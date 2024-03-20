import React from 'react';

const Login = () => {
  return (
    <div className="w-[100%] h-[80vh] bg-gray-200 pt-[100px] mt-[50px]">
      <div className="w-[580px] h-[600px] bg-white mx-auto px-[60px] py-[40px] rounded-lg">
        <h1 className="mx-0 my-[20px] text-[24px] font-bold text-center italic text-gray-600">Sign Up</h1>
        <div className="flex flex-col gap-[20px] mt-[30px]">
          <input className="h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[gray] text-[18px]" type="text" placeholder="Your Name" />
          <input className="h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[gray] text-[18px]" type="email" placeholder="Email Address" />
          <input className="h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[gray] text-[18px]" type="password" placeholder="Password" />
        </div>
          <button className="w-[80px] h-[42px] bg-gradient-to-r from-gray-500 to-gray-900 text-white font-bold italic rounded-lg mx-auto my-0 mt-[20px] flex justify-center items-center">Sign Up</button>
          <p>Already have an account <span>Login here</span></p>
          <div>
            <input type="checkbox" name='' id='' />
            <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
          </div>
      </div>
    </div>
  )
}

export default Login