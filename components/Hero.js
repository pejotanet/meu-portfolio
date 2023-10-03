import Link from 'next/link';


import { IoLogoLinkedin } from 'react-icons/io5'
import { DiGithubBadge } from "react-icons/di";

export default function Hero({heading, message}) {
    return (
      <div className="flex flex-wrap items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        {/* <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" /> */}
        <div className='w-[1240px] mt-60'>
            <div className=" p-4 sm:p-5 text-white z-[2]">
                <h4 className="text-2xl text-center text-[#cc0066]">Olá, Mundo.</h4>    
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">{heading}</h2>
                <p className="py-5 sm:text-xl text-center">{message}</p>
                <div className='w-[195px] mx-auto'>
                    <Link href='https://drive.google.com/file/d/1JztCtPFAuuQsHdcbMWgBNdZNzmp_GyXr/view?usp=drive_link' target='_blank'>
                        <button className="px-8 py-2 border hover:bg-white hover:text-black">Download CV</button>
                    </Link>
                </div>
            </div> 
        </div>
        <div className='w-[1240px] text-white'>
            <div className='w-[100px] mx-auto flex'>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <Link href='https://www.linkedin.com/in/albuquerquepaulo96/' target='_blank'>
                        <IoLogoLinkedin size={50} />
                    </Link>
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <Link href='https://github.com/pejotanet' target='_blank'>
                        <DiGithubBadge size={50} />
                    </Link>
                </div>             
            </div>
        </div>
      </div>
    )
  }
  