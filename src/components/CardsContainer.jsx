import Cards from "./Cards";

const CardsContainer = () => {
  const opinions = [
    {
      image: "",
      title: "Juan Pérez",
      description: "¡Esta plataforma es increíble! Me ha ayudado muchísimo.",
      type: "opinion",
    },
    {
      image: "",
      title: "María López",
      description: "Gran experiencia, totalmente recomendable.",
      type: "opinion",
    },
  ];

  const profiles = [
    {
      image: "src\assets\img\profile\Jose.jpg",
      title: "Jose",
      description: "Desarrollador Frontend.",
      type: "profile",
    },
    {
        image: "src\assets\img\profile\Karina.jpg",
        title: "Karina",
        description: "Desarrolladora Backend.",
        type: "profile",
      },{
        image: "src\assets\img\profile\Yeferson.jpg",
        title: "Yeferson",
        description: "Desarrollador Backend.",
        type: "profile",
      },{
        image: "src\assets\img\profile\Celia.jpg",
        title: "Celia",
        description: "Desarrolladora Backend.",
        type: "profile",
      },{
        image: "src\assets\img\profile\Enma.jpg",
        title: "Enma",
        description: "Desarrolladora Frontend.",
        type: "profile",
      },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-center mb-4">Opiniones</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {opinions.map((opinion, index) => (
          <Card key={index} {...opinion} />
        ))}
      </div>

      <h2 className="text-xl font-bold text-center mt-8 mb-4">Nuestro Equipo</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {profiles.map((profile, index) => (
          <Card key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
