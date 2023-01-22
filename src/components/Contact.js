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
        await setDoc(doc(collection(db,"feedback",e.target[0].value)),{
            "name":e.target[0].value,
            "email":e.target[1].value,
            "messege":e.target[2].value
        })
    }
    return (
        <div className='h-fit contact' style={{ "height": "50vh"}}>

            <div className='border border-r-black flex justify-center items-start contactus'>
                <div className='flex justify-center items-start flex-col p-8 mt-8'>
                    <p className='text-2xl'> <strong> Contact Us </strong> </p>
                    <div className='mt-4'><i class="fa-solid fa-phone mr-2"></i>+91 6265602071</div>
                    <div className='mt-4'><i class="fa-solid fa-phone mr-2"></i>+91 7354291981</div>
                    {/* <div className='ml-4 mt-4'><span>logo   </span>fakegmail@gmail.com</div>
                    <div className='ml-4 mt-4'><span>logo   </span>Maulana Azad National Institute of Technology</div> */}
                </div>
            </div>
            <div className='border border-r-black flex flex-col writeToUs' >
                <div className='flex justify-center items-start flex-col p-8 mt-8'>
                    <form action="" onSubmit={onSubmit} className='w-full flex justify-center flex-col'>

                    <p className='text-2xl flex justify-start m-auto'> <strong>write to us</strong> </p>
                        <div className='mt-4 '><input className='w-full border border-b-black  outline-none resinput' type="text" name="Fullname" id="" placeholder='Fullname' /></div>
                        <div className='mt-4'><input className=' w-full border border-b-black  outline-none resinput' type="email" name="Fullname" id="" placeholder='Email' /></div>
                        <div className='mt-4 h-16 mb-4'><input className='w-full border border-b-black outline-none resinput h-full ' type="text" name="messege" id="" placeholder='messege' /></div>
                        <button type="submit" className="bg-black btn btn-primary w-1/3 mt-2 m-auto">Submit</button>
                    </form>
                </div>

            </div>
            {/* <div className='border border-black' style={{ "width": "33vw" }}>

            </div> */}
        </div>
    )
}
