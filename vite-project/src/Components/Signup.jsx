import React from 'react'

const Signup = () => {
  return (
        <form action="" className="border-solid border-[1px] rounded-lg border-neutral-300 m-[auto] my-[200px] w-[500px] text-sm">
                <div className='flex justify-center items-center h-[50px] mb-5'><h2 className=" text-neutral-600 text-3xl text-center">Application Tailor</h2></div>
                <div className="flex flex-col gap-5 my-3 justify-center">
                    <label className="mx-[70px]">
                        First name:
                        <input type="text" placeholder="Username" className=" border-solid border-[1px] mx-2 border-neutral-400 p-1 rounded-lg ml-[55px]"/>
                    </label>
                    <label className="mx-[70px]">
                        Laste name:
                        <input type="text" placeholder="Username" className=" border-solid border-[1px] mx-2 border-neutral-400 p-1 rounded-lg ml-[49px]"/>
                    </label>
                    <label className="mx-[70px]">
                        Username:
                        <input type="text" placeholder="Username" className=" border-solid border-[1px] mx-2 border-neutral-400 p-1 rounded-lg ml-[58px]"/>
                    </label>
                    <label className="mx-[70px]">
                        Password:
                        <input type="text" placeholder="Password" className=" border-solid border-[1px] mx-2 border-neutral-400 p-1 rounded-lg ml-[63px]"/>
                    </label>
                    <label className="mx-[70px]">
                        Confirm password:
                        <input type="text" placeholder="Password" className=" border-solid border-[1px] mx-2 border-neutral-400 p-1 rounded-lg"/>
                    </label>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 my-4">
                    <input type="button" value="Signup" className="bg-custom-blue w-[100px] h-[35px] rounded-lg"/>
                </div>
        </form>
  )
}

export default Signup
