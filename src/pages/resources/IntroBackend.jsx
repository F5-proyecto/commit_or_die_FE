import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CommentBox from "../../components/Comment";
import FinishResource from "../../components/FinishResource";

const IntroBackend = () => {
  const [content, setContent] = useState("");
const courseTitle = "Introducción al Backend";

  useEffect(() => {
    fetch("/assets/CoursesBackend/CourseIntroductionBackend.md")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error al cargar el archivo:", error));
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-blue-3 text-center text-2xl sm:text-4xl md:text-6xl font-bold mt-10 md:mt-20 mb-10 md:mb-20 font-briem-hand">
        Introducción al Backend
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full prose break-words overflow-hidden text-justify leading-relaxed">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>

    <div className="mt-10 flex flex-col gap-6 w-full">
            <FinishResource 
        lessonId={1} 
        lessonTitle="Tarea completada"
        courseTitle={courseTitle} 
      />
            <div className=" p-4 rounded-lg shadow-md w-full">
              <CommentBox />
            </div>
          </div>
          </div>
  );
};

export default IntroBackend;
