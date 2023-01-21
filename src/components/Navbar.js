import React from 'react'
import logo from '../logo/oglogo.png'
import '../index.css'
import './Navbar.css'
import '../assets/css/hamburgers.css'
import { useNavigate } from 'react-router-dom'
// function onclick(){
//   console.log('object');
//   var ham = document.getElementsByClassName('hamburger');
//   // ham.classList.remove('is-active');
//   // ham.classList.remove('hamburger--vortex')
//   ham.classList.add('hi');
//   // document.getElementsByClassName('hamburger').

// }

export default function Navbar() {
  const navigate = useNavigate()
  function navigateToHome(){
    navigate('/');
  }
  return (
    <div className='navbar border border-black  h-16 opacity-50 flex justify-between  sticky top-0 items-center z-20'>
      {/* <div className='pl-1 inline-block'>
        <img className='  w-16 aspect-auto opacity-100' src={logo} alt="" />
      </div> */}
      <div className='ml-4 navbarOptions'>
        <span className='text-black text-2xl mr-3 cursor-pointer' onClick={navigateToHome}>Home</span>
        {/* <span className='text-black text-2xl mr-3'>home</span>
        <span className='text-black text-2xl mr-3'>home</span>
        <span className='text-black text-2xl mr-3'>home</span>
        <span className='text-black text-2xl mr-3'>home</span>
        <span className='text-black text-2xl mr-3'>home</span> */}
      </div>
      <div className='ham' >
        {/* eslint-disable-next-line */}
        {/* <a className="McButton" data="hamburger-menu" >
          <b id='1'></b>
          <b id='2' style={{ 'top': '50%' }}></b>
          <b id='3' style={{ 'top': '100%' }}></b>
        </a> */}
        <button className="hamburger hamburger--vortex is-active" type="button" >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  )
}
