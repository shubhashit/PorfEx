import React from 'react'
import '../../index.css'
import {auth,provider} from '../backend/firebase';
import { signInWithPopup ,signInWithRedirect} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Navbar';

export default function Notes() {
    function onSignIn(e) {
        e.preventDefault();
        console.log('sign up')
        signInWithRedirect(auth,provider).then(data=>{
            console.log(data);
        })
    }
    function navigateToSignUp() {

    }
    const navigate = useNavigate();
    function navigateToHome(){
        navigate('/');
    }
    return (
        <div>
            <div className='text-white bg-black h-8 flex justify-start cursor-pointer' onClick={navigateToHome}>
                <i className="fa-solid fa-house-user m-2"></i>
            </div>
            <div className="mainBox w-screen flex justify-center items-center bg-black">

                <div className='wrapper p-4 text-white' style={{ backgroundColor: '#222326' }}>
                    <form className='ResForm' style={{ backgroundColor: '#222326' }} >
                        <div style={{ display: 'block', textAlign: 'center' }} >

                            <h3><strong>Prototype ChatApp
                            </strong></h3>
                            <div className='mb-2'>

                                <span>Login</span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <input type="email" style={{ backgroundColor: 'lightGrey' }} className="outline-none placeholder:text-center text-center text-black mb-3 rounded-md h-7  form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                            <input type="password" style={{ backgroundColor: 'lightGrey' }} className="placeholder:text-center outline-none text-black mb-3 rounded-md h-7  form-control text-center" id="password" aria-describedby="emailHelp" placeholder='Password' />
                        </div>

                        <div style={{ display: 'block', textAlign: 'center' }}>
                            <button type="submit" className="bg-blue-500 p-2 pt-1 pb-1" onClick={onSignIn}>Sign in</button>
                        </div>
                        <div style={{ display: 'block', textAlign: 'center' }}>
                            <span>Do not have an account?<u onClick={navigateToSignUp} className='hover:cursor-pointer'> Sign Up </u></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
