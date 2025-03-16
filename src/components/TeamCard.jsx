import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, role, image, linkedin }) => {
  return (
    <div className="relative bg-white shadow-md rounded-3xl p-6 
    w-full sm:w-80 md:w-96 lg:w-96 
    h-auto sm:h-72 md:h-80 flex flex-col justify-end overflow-hidden 
    font-afacad border-1 border-b-5 border-blue-3">

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-blue-3 text-white p-2 rounded-full hover:scale-110 transform transition"
      >
        <FaLinkedin size={20} />
      </a>


      <div className="flex items-end">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-42 rounded-lg object-cover"
        />
        <h3 className="ml-4 text-xl font-semibold text-blue-3">{name}</h3>
      </div>


      <hr className="my-4 border-blue-3" />

      {/* Rol */}
      <p className="text-blue-2 h-12 text-lg">{role}</p>
    </div>
  );
};

export default TeamCard;
