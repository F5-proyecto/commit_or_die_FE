import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import TestimonialCard from "../components/TestimonialCard";
import "../styles/swiperStyles.css";



const Testimonials = () => {

    const testimonials = [
        { name: "Marcos Fernández", content: "Muy buenos cursos." },
        { name: "María García", content: "Me encanta TechCodeLab :)" },
        { name: "Pablo Álvarez", content: "Excelente, aprendí todo lo que necesitaba." },
        { name: "Laura Martínez", content: "Una experiencia increíble, altamente recomendados." },
        { name: "Carlos López", content: "¡Totalmente recomendable, aprendí muchísimo!" },
    ];

    return (
        <section className="py-32 px-6 md:py-32 lg:py-40 font-afacad flex flex-col gap-16 items-center min-h-screen">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-briem-hand text-blue-3">
                Opiniones de nuestros alumnos
            </h1>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={800}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                className="mySwiper"
            >
                {testimonials.map((profile, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard name={profile.name} content={profile.content} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-briem-hand text-blue-3">Comparte tu experiencia</h2>
        </section>
    );
};

export default Testimonials;
