import TeamCard from "../components/TeamCard";

const AboutUs = () => {
  const profiles = [
    {
      name: "Jose Romero",
      role: "Desarrollador Web y Creador de Contenido",
      image: "src/assets/img/profile/Jose.svg",
      linkedin: "", 
    },
    {
      name: "Celia Garrido",
      role: "CEO y Fundadora",
      image: "src/assets/img/profile/Celia.svg",
      linkedin: "",
    },
    {
      name: "Yeferson Gaviria",
      role: "Desarrollador Web",
      image: "src/assets/img/profile/Yeferson.svg",
      linkedin: "",
    },
    {
      name: "Karina Reyes",
      role: "Diseñadora y Desarrolladora Web",
      image: "src/assets/img/profile/Karina.svg",
      linkedin: "",
        },
    {
      name: "Emma Lanza",
      role: "Desarrolladora Web",
      image: "src/assets/img/profile/Emma.svg",
      linkedin: "",
        },
    ];

    return (
        <section className="p-12 font-afacad flex flex-col gap-10 justify-center items-center">
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-briem-hand text-blue-3">Sobre nosotros</h1>
                <p className="text-blue-3 mt-2 text-2xl">En TechCodeLab, nuestra misión es proporcionar a programadores de todos los niveles las herramientas 
                    y recursos necesarios para dominar el mundo del desarrollo de software. Sabemos que la tecnología está en constante evolución,
                    y queremos asegurarnos de que tengas acceso a la información más actualizada y a los mejores consejos y tutoriales disponibles.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {profiles.map((profile, index) => (
                    <TeamCard
                        key={index}
                        name={profile.name}
                        role={profile.role}
                        image={profile.image}
                        linkedin={profile.linkedin}
                    />
                ))}
            </div>

        </section>
    );
};

export default AboutUs;
