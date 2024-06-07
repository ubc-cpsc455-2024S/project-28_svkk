import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center border-solid rounded-lg border-neutral-400 border-[1px] p-[5px] pb-[5px] w-[420px] m-[auto] mt-[200px] text-sm'>
      <div className='mt-2 text-center'><h2 className='text-3xl'>Application Tailor</h2></div>
      <form className='my-[10px]'>
        <label className='block ml-[70px]'>
            First name:
            <input type="text" name="" id="" placeholder='First name' className='m-4 ml-[63px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
        </label>
        <label className='block ml-[70px]'>
            Last name:
            <input type="text" name="" id="" placeholder='Second name' className='m-4 ml-[64px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
        </label>
        <label className='block ml-[70px]'>
            Username:
            <input type="text" name="" id="" placeholder='Username' className='m-4 ml-[65px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
        </label>
        <label className='block ml-[70px]'>
            Password:
            <input type="text" name="" id="" placeholder='Password' className='m-4 ml-[69px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
        </label>
        <label className='block ml-[70px]'>
            Confirm Password:
            <input type="text" name="" id="" placeholder='Confirm Password' className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
        </label>
      </form>
      <div className='text-center'>
        <input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md" type="button" value="Sign up"/>
      </div>
    </div>
  )
}

export default Signup
