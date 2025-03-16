import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CommentBox from "../../components/Comment";
import FinishResource from "../../components/FinishResource";

const DevBackend = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/assets/CoursesBackend/CourseBackendDevelopmentLanguages.md")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error al cargar el archivo:", error));
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      {/* Título Responsive */}
      <h1 className="text-blue-3 text-center text-2xl sm:text-4xl md:text-6xl font-bold mt-10 md:mt-20 mb-10 md:mb-20 font-briem-hand">
        Development Language Backend
      </h1>

      {/* Contenido Markdown con ajuste responsive */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
  <ReactMarkdown className="prose max-w-full break-words overflow-hidden text-justify leading-relaxed">
    {content}
  </ReactMarkdown>
</div>




      {/* Componentes adicionales */}
      <div className="mt-10 flex flex-col gap-6">
        <FinishResource lessonId={2} lessonTitle="Tarea completada" />
        <CommentBox />
      </div>
    </div>
  );
};

export default DevBackend;
