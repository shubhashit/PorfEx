import React from 'react'
import Mainpage2 from './Mainpage2';
import Navbar from './Navbar';
import Course from './Course';
import Contact from './Contact';
import logovid from '../logo/logovid.mp4'
import { doc, setDoc, collection } from 'firebase/firestore';
import { db,} from './backend/firebase';


export default function Landingpage() {
  async function onSubmit(e){
      e.preventDefault();
      console.log('object')
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    // console.log('object');
    await setDoc(doc(collection(db,"Candidate Info")), {
      "name": e.target[0].value,
      "college/school": e.target[1].value,
      "course":e.target[2].value,
      "year/class":e.target[3].value,
      "email":e.target[4].value,
      "phoneNumber":e.target[5].value
    })
  }
  return (
    <div className='landingpage'>
          <Navbar></Navbar>
          <Mainpage2></Mainpage2>
      <video src={logovid} poster="initial_static_picture.jpg" width="480" className='m-auto' controls>
      </video>
          <Course></Course>
      <div className='m-4'>
        <div className='mb-4 text-xl'><strong>

          ------- REGISTRATION --------
        </strong>
        </div>
        <form onSubmit={onSubmit}>
          <div className=' p-2 resinputdiv flex '>
            <label htmlFor="exampleInputEmail1" className="form-label flex justify-center items-center" style={{ "width": "20vw" }}>Name</label>
            <input type="text" className="resinput form-control border border-black" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Vedant Sign'/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="p-2 resinputdiv flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ "width": "20vw" }}>College/School Name</label>
            <input type="text" className="resinput form-control" id="exampleInputPassword1" placeholder='MANIT' />
          </div>
          <div className="p-2 resinputdiv flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ "width": "20vw" }}>Course</label>
            <input type="text" className="resinput form-control" id="exampleInputPassword1" placeholder='B.tech' />
          </div>
          <div className="p-2 resinputdiv flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ "width": "20vw" }}>Year/class</label>
            <input type="text" className="resinput form-control"  placeholder='1st Year' />
          </div>
          <div className="p-2 resinputdiv flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ "width": "20vw" }}>Email</label>
            <input type="email" className="resinput form-control" id="exampleInputPassword1" placeholder='vedant@example.com' />
          </div>
          <div className="p-2 resinputdiv flex">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ "width": "20vw" }}>Phone Number</label>
            <input type="text" className="resinput form-control" id="examp" placeholder='for ex: 3948392584' />
          </div>
          <button type="submit" className="bg-black btn btn-primary">Register</button>
        </form>
      </div>
          <Contact></Contact>
    </div>
  )
}
