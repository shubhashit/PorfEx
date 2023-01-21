import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar'
import logo from '../../../logo/logo.png'
import '../../../index.css'

export default function Company() {
  const navigate2 = useNavigate();
  function navigateToHome() {
    console.log('object')
    navigate2('/');
  }
  function proceedToPay(e){
    e.preventDefault();
    console.log('object')
    navigate2('/Intership/company/payment')
  }
  return (
    <div className='company'>
      <div className="tk-blob blolstyle opacity-50 bg-1" style={{ "position": "fixed", "--time": "33s", "--amount": "3" }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
          <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
        </svg>
      </div>
      <div className="tk-blob blolstyle opacity-50 bg-2" style={{ "position": "fixed", "--time": "33s", "--amount": "3" }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
          <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
        </svg>
      </div>
      <div className="tk-blob blolstyle opacity-50 bg-3" style={{ "position": "fixed", "--time": "33s", "--amount": "3" }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
          <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
        </svg>
      </div>
      <div className="tk-blob blolstyle opacity-50 bg-4" style={{ "position": "fixed", "--time": "33s", "--amount": "3" }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
          <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
        </svg> 
      </div>
      <div className="tk-blob blolstyle opacity-50 bg-5" style={{ "position": "fixed", "--time": "33s", "--amount": "3" }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
          <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
        </svg>
      </div>
      <div className='navbar border border-black  h-16 opacity-50 flex justify-between  sticky top-0 items-center z-20'>
        <div className='pl-1 inline-block'>
          {/* <img className='  w-16 aspect-auto opacity-100' src={logo} alt="" />
         */}
          <div className='ml-4' onClick={navigateToHome}><i className="cursor-pointer fa-xl fa-solid fa-house-user m-2"></i>
          </div>
        </div>
        <div className='ml-4 navbarOptions'>
          <span className='text-black text-2xl mr-3'>home</span>
          <span className='text-black text-2xl mr-3'>home</span>
          <span className='text-black text-2xl mr-3'>home</span>
          <span className='text-black text-2xl mr-3'>home</span>
          <span className='text-black text-2xl mr-3'>home</span>
          <span className='text-black text-2xl mr-3'>home</span>
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
      <div className='border border-black h-fit'>
        <div className="h-36 flex justify-center">
          <img className='h-36' src={logo} alt="" />
        </div>
        <p className='text-2xl'>COMPANY NAME</p>
        <div className='border border-black mt-2 p-4'>
          <div className='flex'>
            <h2 className='ml-5'>
              about:
            </h2>
          </div>
          <p className=''>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ut, laudantium rem nemo fuga doloremque similique veritatis. Magnam rerum a, consectetur eaque doloribus dolor ipsum id ut accusantium accusamus voluptas nobis alias eius assumenda veritatis explicabo quae vitae cupiditate perspiciatis unde dolore, cum quibusdam voluptates optio. Cum error illum similique consequatur saepe? Exercitationem enim provident similique nostrum cupiditate sequi non itaque, totam perspiciatis! Mollitia veniam suscipit laborum laboriosam tenetur molestiae labore sunt inventore voluptas sapiente. Culpa obcaecati voluptatem labore libero doloribus maxime autem nobis modi, facilis voluptate porro qui iusto blanditiis aperiam distinctio! Officia quis illo non obcaecati voluptatum debitis.
          </p>
        </div>
        <div className='border border-black mt-2 p-4'>
          <div className='flex'>
            <h2 className='ml-5'>
              Eligibility:
            </h2>
          </div>
          <p className=''>
            Lorem ipsum dolor sit, amet consectetur adm id ut accusantium accusamus voluptas nobis alias eius assumenda veritatis explicabo quae vitae cupiditate perspiciatis unde dolore, cum quibusdam voluptates optio. Cum error illum similique consequatur saepe? Exercitationem enim provident
          </p>
        </div>
      </div>
      <div className='m-4'>
        <div>
          ------- REGISTRATION --------
        </div>
        <form onSubmit={proceedToPay}>
          <div className=' p-2 flex '>
            <label htmlFor="exampleInputEmail1" className="form-label flex justify-center items-center" style={{ "width": "20vw" }}>Name</label>
            <input type="email" className="form-control border border-black" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="p-2 flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{"width":"20vw"}}>College Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="p-2 flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{"width":"20vw"}}>Course</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="p-2 flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{"width":"20vw"}}>Year</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="bg-black btn btn-primary">Proceed To Pay</button>
        </form>
      </div>
    </div>
  )
}
