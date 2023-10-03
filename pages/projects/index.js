import Navbar from "@/components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";

export default function Projetos() {
  return (
    <>
    <Navbar />
    <Hero heading="Bem vindo ao meu Portfólio" message='ABAIXO MEUS PROJETOS EDUCACIONAIS E PROFISSIONAIS' />
    <div className="h-auto mx-auto text-center pt-12">
        <h2 className="text-2xl font-semibold text-[#cc0066]">Projetos</h2>
        <h1 className="text-4xl font-bold text-[#333]">Projetos em Destaque</h1>
        <Projects />
    </div>
    </>
  )
}
