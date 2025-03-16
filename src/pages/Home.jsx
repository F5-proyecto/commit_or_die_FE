import banner from "../assets/img/img-banner.svg";
import javascript from "../assets/img/courses/javascript.svg";
import html from "../assets/img/courses/html.svg";
import java from "../assets/img/courses/java.svg";
import react from "../assets/img/courses/react.svg";
import springboot from "../assets/img/courses/springboot.svg";
import testing from "../assets/img/courses/testing.svg";
import NavButton from "../components/NavButton";

const courseImages = [
  { src: javascript, alt: "JavaScript" },
  { src: html, alt: "HTML" },
  { src: react, alt: "React" },
  { src: java, alt: "Java" },
  { src: springboot, alt: "Spring Boot" },
  { src: testing, alt: "Testing" },
];

const Home = () => {
  return (
    <>

      <section className="flex flex-col md:flex-row justify-evenly items-center gap-4 py-20 font-afacad px-4 md:px-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-9xl text-aqua font-briem-hand mb-6">
            TechCodeLab
          </h1>
          <h2 className="text-xl sm:text-xl lg:text-3xl 2xl:text-4xl text-blue-2 font-bold">
            Cursos de programación para pasar de 0 a experto.
          </h2>
          <p className="text-base sm:text-base lg:text-xl 2xl:text-2xl text-blue-2 max-w-[500px] 2xl:max-w-[700px] mx-auto md:mx-0">
            Desde lo más básico hasta conceptos avanzados, cada lección
            está diseñada para que puedas construir tu conocimiento paso a
            paso, enfrentando retos y creando soluciones reales. No importa tu
            nivel inicial, lo único que necesitas es la motivación para empezar.
          </p>
          <NavButton
            to="/login"
            className="bg-blue-3 text-white my-4 button-custom
            w-2/3 rounded-md p-2 transition transform hover:scale-105"
            onClickCloseMenu={() => setIsMenuOpen(false)}
          >
            Empieza ya
          </NavButton>
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <img
            className="w-full max-w-[350px] h-auto"
            loading="lazy"
            src={banner}
            alt="Banner"
          />
        </div>
      </section>

      <section
        className="flex flex-col md:flex-row justify-evenly items-center py-20 border-t-10 border-blue-3 
        bg-gradient-to-t md:bg-gradient-to-b from-aqua/50 to-blue-1/50 px-4 md:px-12" 
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl text-blue-3 font-briem-hand">
            <span className="block">El Primer Paso</span>
            <span className="block">hacia tu</span>
            <span className="block text-aqua">Futuro Digital</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 mt-8 md:mt-0 sm:grid-cols-3 gap-4">
          {courseImages.map((course, index) => (
            <div
              key={index}
              className="flex justify-center items-center mx-auto"
            >
              <img
                className="w-[150px] h-[150px] rounded-[48px] object-cover 2xl:w-[250px] 2xl:h-[250px]"
                loading="lazy"
                src={course.src}
                alt={course.alt}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
