import React from 'react'

const Login = () => {
  return (
    <div className="border-solid border-[1px] rounded-lg border-neutral-300 m-[auto] w-[460px] mt-[200px]">
      <div className='flex justify-center items-center h-[50px]'><h2 className=" text-neutral-600 text-3xl text-center">Application Tailor</h2></div>
      <div className="flex flex-col gap-5 my-3 h-[200px] justify-center">
        <label className=' mx-[80px]'>
          Username:
          <input type="text" placeholder="Username" className=" border-solid border-[1px] mx-2 border-neutral-400 p-2 rounded-lg"/>
        </label>
        <label className=' mx-[80px]'>
          Password:
          <input type="text" placeholder="Password" className=" border-solid border-[1px] mx-2 border-neutral-400 p-2 rounded-lg"/>
        </label>
      </div>
      <div className="flex justify-center gap-3 my-4">
        <input type="button" value="Login" className="bg-custom-blue w-[100px] h-[35px] rounded-lg"/>
      </div>
      <div>
        <p className="my-2 text-center">Don't have an account? <a className="text-slate-500 cursor-pointer" >Sign up</a></p>
      </div>
    </div>
  )
}

export default Login
