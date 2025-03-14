import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center p-6 sm:p-12 font-afacad gap-12">
      
   
      <div className="w-full max-w-lg p-8 rounded-2xl bg-blue-3 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-2">Rellena el formulario</h2>
        <form className="flex flex-col gap-6 text-white">
          <div>
            <label className="block mb-2">Nombre Completo</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white placeholder-blue-2 text-blue-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Escribe tu nombre"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Correo Electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white placeholder-blue-2 text-blue-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Escribe tu correo electrónico"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Asunto</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white placeholder-blue-2 text-blue-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Escribe el asunto"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Mensaje</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg bg-white placeholder-blue-2 text-blue-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Escribe tu mensaje"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-blue-2 text-white py-3 rounded-lg hover:scale-105 transition transform"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>


      <div className="w-full max-w-lg p-12 text-center lg:text-left text-blue-3 lg:self-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-briem-hand mb-4">Contacta con nosotros</h1>
        <p className="text-lg sm:text-xl mb-12">Estamos aquí para ayudarte</p>
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-12 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <p className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl">
              <FaEnvelope className="w-6 h-6" />
              <strong>E-mail:</strong>
            </p>
            <span className="text-blue-2">techcodelab@gmail.com</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl">
              <FaPhone className="w-6 h-6" />
              <strong>Teléfono:</strong>
            </p>
            <span className="text-blue-2">+1 (555) 123-4567</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl">
              <FaMapMarkerAlt className="w-6 h-6" />
              <strong>Localización:</strong>
            </p>
            <span className="text-blue-2">Factoría F5 Asturias</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
