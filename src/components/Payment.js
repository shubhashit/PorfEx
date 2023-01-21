import React from 'react'
import logo from '../logo/logo.png';
export default function Payment() {
  return (
    <div className='border border-black min-h-screen'>
      <div className='border border-black h-40 flex justify-center' >
        <a download={logo} href="../logo/logo.png">
            <img className='h-40' src={logo} alt="" />
        </a>
      </div>
      <div>
        <p>Enter the email through which you will send the fee reciet on the following email</p>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <p>kindly forward your upi id and fee reciept on the following email</p>
        <p>fakeemain@gmail.com</p>
      </div>
      <div>

      </div>
    </div>
  )
}
