var express = require('express');
var router = express.Router();
const users = require('../model/user');
const bcrypt = require('bcrypt');

const { Resume, CoverLetter, JobPosting, TailoredCoverLetter } = require('../model/schema');
const Job = require('../model/job');

// grabs user
router.post('/getUser', async (req, res) => {
    const { email } = req.body;
    try {
        let user = await users.findOne({ email });
        if (!user) {

            return res.status(400).json({ msg: 'No account with this email exists' });
        }
        res.status(200).json({
            msg: 'User found',
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isGoogleUser: user.isGoogleUser
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/getUser/verify', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await users.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'No account with this email exists' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }

        res.status(200).json({
            msg: 'Login successful',
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/updateUser', async (req, res) => {
    try {
        const { email, firstName, lastName, password } = req.body;
        let user = await users.findOne({email});

        if (user) {
            user.firstName = firstName;
            user.lastName = lastName;
            if (password) {
                const hashedPassword = await bcrypt.hash(password, 10);
                user.password = hashedPassword;
            }
            await user.save();
            res.json({ msg: 'User updated successfully' });
        } else {
            res.status(404).json({msg: 'User not found'});
        }
    } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
});

router.delete('/deleteUser', async (req, res) => {
    try {
        const {email} = req.body;
        let user = await users.findOne({email});
        if (user) {
            await users.deleteOne({email});
            await Resume.deleteMany({email});
            await CoverLetter.deleteMany({email});
            await JobPosting.deleteMany({email});
            await TailoredCoverLetter.deleteMany({email});
            await Job.deleteMany({userEmail: email});
            res.json({ msg: 'User and all associated documents deleted successfully' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;

