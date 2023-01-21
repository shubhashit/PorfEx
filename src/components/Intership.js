import React from 'react'
import Course from './Course';
import logo from '../logo/logo.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function Intership() {
    const navigate2 = useNavigate();
    function NavigateToCompany(){
        navigate2('/Intership/company')
    }
    function navigateToHome() {
        console.log('object')
        navigate2('/');
    }
    function navigateToCompany(num){
        var st =``;
    }
    return (
        <div>
            {/* <Navbar></Navbar> */}
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
                <p className='text-2xl'>INTERSHIP</p>
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
                <div className='secGrid grid grid-cols-3 m-2'>

                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1' onClick={NavigateToCompany}>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1'>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1'>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1'>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
