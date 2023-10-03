import IgImg1 from '../public/ig-img-1.jpg'
import IgImg2 from '../public/ig-img-2.jpg'
import IgImg5 from '../public/ig-img-5.jpg'
import IgImg6 from '../public/ig-img-6.jpg'
import ProjectImg from './ProjectImg'

export default function Projects() {
  return (
    <div className='max-w-[1240px] mx-auto text-center mt-8'>
        <div className='flex flex-wrap p-5'>
                <ProjectImg socialImg={IgImg1} link="" git="" text={`Em produção`}/>
                <ProjectImg socialImg={IgImg2} link="" git="" text={`Em produção`}/>
                <ProjectImg socialImg={IgImg6} link="" git="" text={`Em produção`}/>
                <ProjectImg socialImg={IgImg5} link="" git="" text={`Em produção`}/>  
        </div>
    </div>
  )
}