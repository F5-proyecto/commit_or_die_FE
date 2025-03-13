const Cards = ({image, title, description, type}) => {
    return(
        <div className="bg-white shadow-Ig rounded-Ig p-4 max-w-sx text-center">
              <img 
        src={image} 
        alt={title} 
        className={`w-24 h-24 mx-auto rounded-full ${type === "profile" ? "border-4 border-blue-500" : ""}`} 
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
</div>        
    );
};
export default Cards;