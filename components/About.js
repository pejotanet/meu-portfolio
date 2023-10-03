import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact, DiWordpress } from "react-icons/di";
import { BiLogoTailwindCss, BiLogoGit } from "react-icons/bi"
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobelightroom, SiAdobeaftereffects, SiCanva, SiNextdotjs} from "react-icons/si"

export default function About() {
  return (
    <div id="sobre" className="h-auto mx-auto text-center pt-32">
        <h2 className="text-xl font-semibold text-[#cc0066]">Sobre</h2>
        <h1 className="text-4xl font-bold text-[#333]">Deixe eu me apresentar</h1>
        <div className="flex flex-wrap max-w-[700px] h-auto pt-10 mx-auto">
            <div className="w-[100px] h-[100px] max-sm:mx-auto rounded-full profile-pic bg-cover"/> 
            <p className="sm:w-[70%] ml-4 max-sm:mt-6">Desde pequeno sempre fui muito curioso em relação a tecnologia, desenvolvi cedo uma paixão por jogos e isso foi evoluindo para uma paixão em computadores. Graças a isso comecei a estudar sobre computação e desenvolvimento web</p>           
        </div>
        <div className="flex flex-wrap max-w-[800px] h-auto mx-auto mt-12">
            <div className="text-left mx-auto w-[350px] p-4">
                <h3 className="text-lg font-bold text-[#333]">Nome Completo:</h3>
                <p className="text-md font-medium">Paulo José Pires de Albuquerque</p>
            </div>
            <div className="text-left mx-auto w-[350px] p-4 ">
                <h3 className="text-lg font-bold text-[#333]">Profissão</h3>
                <p className="text-md font-medium">Frontend Developer e Designer de interface</p>
            </div>
            <div className="text-left mx-auto w-[350px] p-4 ">
                <h3 className="text-lg font-bold text-[#333]">Nascimento:</h3>
                <p className="text-md font-medium">1 de setembro, 1996</p>
            </div>
            <div className="text-left mx-auto w-[350px] p-4 ">
                <h3 className="text-lg font-bold text-[#333]">Email:</h3>
                <p className="text-md font-medium">pejotanet@gmail.com</p>
            </div>
        </div>
        <div className="flex flex-wrap max-w-[800px] h-auto mx-auto mt-12">
            <div className="flex mx-auto">
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <DiHtml5 size={50} title="HTML 5"/>
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <DiCss3 size={50} title="CSS 3" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <DiJavascript size={50} title="Javascript" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <DiBootstrap size={50} title="Bootstrap" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <DiReact size={50} title="Reactjs" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer pt-1">
                    <SiNextdotjs size={40} title="Nextjs" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <BiLogoTailwindCss size={50} title="Tailwind"/> 
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <BiLogoGit size={50} title="GIT"/> 
                </div>
                <p className="font-semibold sm:text-2xl text-center mt-2">| Tecnologias</p>
            </div> 
        </div>
        <div className="flex flex-wrap max-w-[800px] h-auto mx-auto mt-8">
            <div className="flex mx-auto">
                <div className="hover:text-[#cc0066] cursor-pointer p-2">
                    <SiAdobephotoshop size={30} title="Photoshop"/>
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer p-2">
                    <SiAdobeillustrator size={30} title="Illustrator" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer p-2">
                    <SiAdobeindesign size={30} title="InDesign" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer p-2">
                    <SiAdobelightroom size={30} title="Lightroom" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer p-2">
                    <SiAdobeaftereffects size={30} title="After Effects" />
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer p-2">
                    <SiCanva size={30} title="Canva"/> 
                </div>
                <div className="hover:text-[#cc0066] cursor-pointer">
                    <DiWordpress size={45} title="Wordpress"/> 
                </div>
                <p className="font-semibold sm:text-xl text-center mt-2">| Softwares </p>
            </div> 
        </div>
    </div>
  )
}
