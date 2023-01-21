import { doc, setDoc ,collection} from 'firebase/firestore';
import React from 'react'
import '../index.css';
import { db,storage } from './backend/firebase';

export default function Contact() {
    async function onSubmit(e){
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log('object');
        await setDoc(doc(collection(db,e.target[0].value)),{
            "name":e.target[0].value,
            "messege":e.target[2].value
        })
    }
    return (
        <div className='h-fit contact' style={{ "height": "50vh"}}>

            <div className='border border-r-black flex justify-center items-start contactus'>
                <div className='flex justify-center items-start flex-col p-8 mt-8'>
                    <p className='text-2xl'> <strong> Contact Us </strong> </p>
                    <div className='ml-4 mt-4'><span>logo   </span>+91 94898492892</div>
                    <div className='ml-4 mt-4'><span>logo   </span>fakegmail@gmail.com</div>
                    <div className='ml-4 mt-4'><span>logo   </span>Maulana Azad National Institute of Technology</div>
                </div>
            </div>
            <div className='border border-r-black flex flex-col writeToUs' >
                <div className='flex justify-center items-start flex-col p-8 mt-8'>
                    <form action="" onSubmit={onSubmit}>

                    <p className='text-2xl'> <strong>write to us</strong> </p>
                    <div className='ml-4 mt-4 '><input className='border border-b-black  outline-none' type="text" name="Fullname" id="" placeholder='Fullname' /></div>
                    <div className='ml-4 mt-4'><input className='border border-b-black  outline-none' type="text" name="Fullname" id="" placeholder='Fullname' /></div>
                    <div className='ml-4 mt-4 '><input className='border border-b-black outline-none' type="text" name="messege" id="" placeholder='messege' /></div>
                    <div className='ml-4 mt-4'><input type="submit" value="SBUMIT" /></div>
                    </form>
                </div>

            </div>
            <div className='border border-black' style={{ "width": "33vw" }}>

            </div>
        </div>
    )
}
