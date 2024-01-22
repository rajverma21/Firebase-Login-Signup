import React from 'react'
import mail_icon from '../icons/mail.png'
import padlock from '../icons/lock.png'
import show_passward from '../icons/hidden.png'
import minus from '../icons/minus.png'
import facebook from '../icons/facebook.png'
import google from '../icons/search.png'
import twitter from '../icons/twitter.png'
import { Link } from 'react-router-dom'

export default function Login () {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h1 className='font-[700] text-[38px] mb-12'>Login</h1>
      <form className=' flex flex-col justify-center w-[21%] gap-4'>
        <div>
          <div className='bg-slate-100 flex items-center px-4 rounded-3xl h-[47px] border-2 border-[#c9cfda] mb-4 hover:border-2 hover:border-[#ff9090]'>
            <img src={mail_icon} className='h-[19px]' alt='email_icon' />
            <input
              type='email'
              className='flex-1 bg-transparent px-4 h-full text-[1.6rem] focus:outline-none '
              placeholder='Enter Email Address'
              required
            />
          </div>
          <div className='bg-slate-100 flex items-center px-4 rounded-3xl h-[47px] border-2 border-[#c9cfda] hover:border-2 hover:border-[#ff9090]'>
            <img src={padlock} className='h-[19px]' alt='password_icon' />

            <input
              type='password'
              className='h-full px-4 bg-transparent flex-1 text-[1.6rem] focus:outline-none'
              placeholder='Password'
              required
            />
            <button>
              <img src={show_passward} className='h-[19px]' alt='hidden_icon' />
            </button>
          </div>
          <div className='flex px-2 text-[12.5px] py-2 gap-2 font-[500] text-[#9298a3]'>
            <input type='checkbox' className='scale-125' />
            <span className='flex-1 1.6rem '>Rememeber me</span>
            <a href='/' className='1.6rem'>
              Forgot Password?
            </a>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='w-full bg-[#fd5858] text-white font-semibold text-[1.3rem] h-[43px] rounded-3xl mt-5'
          >
            LOGIN
          </button>
          <p className='text-[12px] p-1 my-2'>
            Don't have an account?
            <strong>
              <Link to='/signup'> Create Account</Link>
            </strong>
          </p>
        </div>
      </form>
      <div className='flex items-center gap-2 my-12'>
        <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
        <div className='text-[1.34rem] text-[#a4a9b2] font-semibold'>
          Login with
        </div>
        <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
      </div>
      <div>
        <div className='flex gap-10'>
          <button className='h-[3.8rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
            <img src={facebook} className='h-[1.9rem]' alt='' />
          </button>
          <button className='h-[3.8rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
            <img src={google} className='h-[1.9rem]' alt='' />
          </button>
          <button className='h-[3.8rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
            <img src={twitter} className='h-[1.6rem]' alt='' />
          </button>
        </div>
      </div>
    </div>
  )
}
