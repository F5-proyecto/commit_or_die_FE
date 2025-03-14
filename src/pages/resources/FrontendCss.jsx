import React from "react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import CommentBox from "../../components/Comment";
import FinishResource from "../../components/FinishResource";

const FrontendCss = () => {
  
const [content, setContent] = useState("");

useEffect(() => {
  fetch("/assets/CoursesFrontend/CourseCss.md")
    .then((response) => response.text())
    .then((text) => setContent(text))
    .catch((error) => console.error("Error al cargar el archivo:", error));
}, []);
  return (
    <div className="p-6">
      <h1 className="text-blue-3 text-center text-6xl font-bold mt-30 font-briem-hand mb-20">Frontend Course CSS</h1>
   
      <pre>{content}</pre>
      <FinishResource lessonId={1} lessonTitle="Tarea completada" />
      <CommentBox />
    </div>
  );
};

export default  FrontendCss;
