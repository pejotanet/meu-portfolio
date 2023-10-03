import Image from "next/image"
import Link from "next/link"

import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai"

export default function ProjectImg( { socialImg, link, git, text} ) {

  return (
    <div className="relative overflow-hidden h-[600px] w-[600px]">
        <Image src={socialImg} alt="/" className="object-contain"/>

        <div className="justify-center items-center absolute top-0 right-0 left-0 bottom-0 hover:bg-black/50 group">

          <div className={`flex justify-center items-center w-full h-auto mt-[40%]`}>
            <Link href={link}>
              <p className="text-gray-300 hidden group-hover:block hover:text-[#cc0066] p-2">
                <AiOutlineLink size={40}/>
              </p>
            </Link>
            <Link href={git}>
              <p className="text-gray-300 hidden group-hover:block hover:text-[#cc0066] p-2">
                <AiOutlineGithub size={40}/>
              </p>
            </Link>
          </div>

          <div className="flex justify-center items-center w-[50%] mx-auto h-auto">
              <p className="text-gray-300 hidden group-hover:block justify-center items-center p-4 font-light">
                {text}
              </p>
          </div>
        </div>
    </div>
  )
}