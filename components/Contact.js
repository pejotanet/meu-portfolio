"use client"

import { useState } from "react";

export const Contato = () => {

  const [loading, setLoading] = useState(false);

  async function handleSubmit (event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      subject: String(event.target.subject.value),
      message: String(event.target.message.value),
    }

    const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

    if(response.ok) {
      setLoading(false);

			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
      event.target.subject.value = "";
			event.target.message.value = "";
    }

    if (!response.ok) {
      setLoading(false);
    }

  }
    
    return (
      
      <div id="contato" className="w-full bg-slate-50 mx-auto p-4 h-screen mt-16 pt-28">
        <h2 className="text-xl font-semibold text-center text-[#cc0066]">Contato</h2>
        <h1 className="text-4xl font-bold text-center text-[#333]">Vamos trabalhar juntos.</h1> 
        <form className="max-w-[600px] m-auto mt-16" onSubmit={handleSubmit} >
            <div className="grid grid-cols-2 gap-2">
                <input required minLength={3} maxLength={100} id="name" autoComplete="off" className="border shadow-lg p-3" type="text" placeholder="Nome"></input>
                <input required minLength={5} maxLength={150} id="email" className="border shadow-lg p-3" type="email" placeholder="Email"></input>
            </div>
                <input required minLength={5} maxLength={100} id="subject" className="border shadow-lg p-3 w-full my-2" type="text" placeholder="Assunto"></input>
                <textarea required minLength={10} maxLength={500} id="message" className="border shadow-lg p-3 w-full" cols='30' rows='10' placeholder="Mensagem" ></textarea>
                <button disabled={loading} className="border shadow-lg p-3 w-full mt-2 disabled:bg-gray-400 disabled:text-gray-100">Enviar</button>
        </form>
    </div>
  )
}

export default Contato;