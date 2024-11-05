import React from 'react'

const Password = () => {
  return (
    <div className='bg-white w-full max-w-[25rem] mx-auto flex flex-col justify-center items-center mt-[8rem] px-4 sm:px-0 '>
      <div className='flex flex-col justify-center items-start p-5 w-full'>
        <h1 className='text-xl sm:text-2xl font-bold p-2'>Change Password</h1>
        
        <div className='flex flex-col justify-center items-start pt-5 p-2 gap-1 w-full'>
          <label htmlFor="new-password">New Password</label>
          <input 
            type="password" 
            id="new-password" 
            className='border-2 border-black rounded-md w-full h-10 p-1.5' 
          />
        </div>

        <div className='flex flex-col justify-center items-start pt-5 p-2 gap-1 w-full'>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input 
            type="password" 
            id="confirm-password" 
            className='border-2 border-black rounded-md w-full h-10 p-1.5' 
          />
        </div>

        <div className='flex flex-col justify-center items-center pt-5 p-2 w-full'>
          <button className='p-2 bg-green-500 text-white w-full rounded-md'>Change</button>
        </div>
      </div>
    </div>
  )
}

export default Password
