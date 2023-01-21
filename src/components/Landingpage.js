import React from 'react'
import Mainpage2 from './Mainpage2';
import Navbar from './Navbar';
import Course from './Course';
import Contact from './Contact';

export default function Landingpage() {
  return (
    <div className='landingpage'>
          <Navbar></Navbar>
          <Mainpage2></Mainpage2>
          <Course></Course>
          <Contact></Contact>
    </div>
  )
}
