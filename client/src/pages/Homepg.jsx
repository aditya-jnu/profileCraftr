import React,{useState} from 'react';

export default function Homepg() {
    const[active,setActive]=useState(false);
    function signinHandle(){
        window.open("http://localhost:5000/auth/google","_self");
    }

    return (
        <div className=' flex items-center justify-center h-screen'>
            <div className='flex flex-col gap-4 items-center'>
            {/* ******************************* */}
            <div className='flex flex-col items-center'>
                <p className='font-bold text-2xl'>Welcome!!</p>
                <p className='text-xl text-center'>Craft a professional portfolio<br/> in minutes to showcase your skills to clients with</p>
                <p className='font-bold text-center text-3xl'>Profile Craftr</p>
                <img src="/cv-icon.svg" alt="" className='size-8'/>
            </div>
            {/* *************************** */}
            <button className={active?'border rounded-2xl py-1 px-2 bg-secondary-blue text-white':'border border-secondary-blue text-secondary-blue rounded-2xl py-1 px-2'} onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}} onClick={signinHandle}>Sign in with Google</button>
            </div>
        </div>
    );
}
