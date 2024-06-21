import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJobAsync, getJobsAsync } from "../redux/jobs/thunks";

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [duration, setDuration] = useState('')
    const [link, setLink] = useState('')
    const [cv, setCV] = useState('')

    const dispatch = useDispatch();

    async function addJob() {
        await dispatch(addJobAsync({title, company, type, location, date, duration, link, cv}))
        props.setSelectForm(false)
        props.setSelectedJob(null)
    }

  return (
    <div className='flex flex-col justify-between border-solid rounded-lg text-sm w-[100%] h-[100%]'>
      <div className='mt-2 text-center'><h2 className='text-3xl'>Add Job</h2></div>
      <form className='my-[10px]'>
        <div className='my-[10px] flex justify-between'>
            <div>
                <label className='block '>
                    Job Title:
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" name="" id="" placeholder='Job Title' className='m-4 ml-[71px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block '>
                    Company:
                    <input value={company} onChange={(e) => {setCompany(e.target.value)}} type="text" name="" id="" placeholder='Company' className='m-4 ml-[64px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block '>
                    Job Type:
                    <input value={type} onChange={(e) => {setType(e.target.value)}} type="text" name="" id="" placeholder='Job Type' className='m-4 ml-[70px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block'>
                    Location:
                    <input value={location} onChange={(e) => {setLocation(e.target.value)}} type="text" name="" id="" placeholder='Location' className='m-4 ml-[71px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block'>
                    Date Applied:
                    <input value={date} onChange={(e) => {setDate(e.target.value)}} type="text" name="" id="" placeholder='Date Applied' className='m-4 ml-[39px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block'>
                    Duration:
                    <input value={duration} onChange={(e) => {setDuration(e.target.value)}} type="text" name="" id="" placeholder='Duration' className='m-4 ml-[68px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block'>
                    Link:
                    <input value={link} onChange={(e) => {setLink(e.target.value)}} type="text" name="" id="" placeholder='Link' className='m-4 ml-[100px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
            </div>
            <div>
                <label className='block'>
                    Cover letter used:
                    <br/>
                    <textarea value={cv} onChange={(e) => {setCV(e.target.value)}} name="" rows={10} cols={65} className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'></textarea>
                </label>
            </div>
        </div>
        <div className='text-center'>
            <input className="add-job w-[150px] p-[10px]" type="button" value="Add Job" onClick={async () => {await addJob()}}/>
        </div>
      </form>
    </div>
  )
}

export default Form
