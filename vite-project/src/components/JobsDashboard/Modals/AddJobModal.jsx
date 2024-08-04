import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

const initalJobData = {
    jobTitle: '',
    company: '',
    jobType: '',
    location: '',
    dateApplied: '',
    duration: '',
    link: '',
    coverLetter: '',
    tailoredCoverLetter: '',
    tags: []
}