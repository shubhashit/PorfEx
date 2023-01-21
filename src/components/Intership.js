import React from 'react'
import Course from './Course';
import logo from '../logo/logo.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import mega from '../logo/mecha.webp'
import skyline from '../logo/skyline.webp'
import tesla from '../logo/tesla.webp'

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
                       	Having trouble getting stipend-based internship? Annoyed with fake intern promises? Here’s a solution.
                        Prof.eX provides online and offline fixed stipend-based internships that too under zero registration fee under professionals for a wholesome work experience for the path of the professional excellence.
                        So, connect with us and grab your seat.

                    </p>
                </div>
                <div className='secGrid grid grid-cols-3 m-2'>

                    <div className='border border-black m-4 cursor-pointer p-2' id='courseBoxes1' onClick={NavigateToCompany}>
                        <div className='flex justify-center'>

                        <img className='h-40 mb-3' src={mega} alt="" />
                        </div>
                        <p>MECHATRONICS</p>
                        <p className='text-sm'>Here we will provide hands on experiences  in the field of mechatronics. Mechatronics is an interdisciplinary field that combines robotics, electronics, computer science, telecommunications, systems, control, and product engineering. It focuses on the integration of mechanical, electrical, and electronic engineering systems.</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1'>
                        <img className='h-40 mb-3' src={skyline} alt="" />
                        <p>SKYLINE INDUSTRIES</p>
                        <p className='text-sm'>Skyline Industries, one of our best partnerships, excels at producing high-quality machine tools, such as drilling and milling equipment, and is the industry leader in producing nuts, bolts, and a variety of other durable products</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1'>
                        <img className='h-40 mb-3' src={tesla} alt="" />
                        {/* Tesla Transformers (Global) Private Limited */}
                        <p>TESLA TRANSFORMER GLOBAL PRIVATE LIMITED</p>
                        <p className='text-sm'>Tesla Transformers (Global) Private Limited has consolidated its position in the Indian Transformer Industry as a manufacturer of a wide range of transformers, which conform to the quality expectations of both the domestic and the international market.</p>
                    </div>
                    {/* <div className='border border-black m-4 cursor-pointer' id='courseBoxes1'>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
