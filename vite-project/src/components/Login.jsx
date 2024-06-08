import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col border-solid rounded-lg border-neutral-400 border-[1px] p-[5px] pb-[15px] w-[420px] m-[auto] mt-[200px]'>
      <div className='mt-2 text-center'><h2 className='text-3xl'>Application Tailor</h2></div>
      <div className='flex flex-col h-[200px] justify-center'>
        <label className='block ml-[70px]'>
            Username:
            <input type="text" name="" id="" placeholder='Username' className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
        </label>
        <label className='block ml-[70px]'>
            Password:
            <input type="text" name="" id="" placeholder='Password' className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
        </label>
      </div>
      <div className='text-center'>
        <input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md" type="button" value="Log in"/>
      </div>
        <p className='text-center'>Not already a member? <a className='text-neutral-500 cursor-pointer'>Sign up</a></p>
    </div>
  )
}

export default Login
