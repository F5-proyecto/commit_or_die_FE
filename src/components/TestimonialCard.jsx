import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ name, content }) => {
  return (
    <div className="bg-white shadow-md rounded p-6 
      w-full sm:w-64 md:w-72 lg:w-80 xl:w-88 
      h-auto sm:h-72 md:h-80 lg:h-88 xl:h-96
      flex flex-col justify-between overflow-hidden 
      font-afacad">

      <div className="flex flex-col flex-grow justify-between">

        <FaQuoteLeft size={60} className="text-blue-3" />

        <p className="text-xl text-blue-3">{content}</p>

      </div>

      <hr className="my-4 border-blue-3" />

      <p className="text-blue-3 text-lg">{name}</p>

    </div>
  );
};

export default TestimonialCard;
