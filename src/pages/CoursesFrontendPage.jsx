import React from "react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

const CoursesFrontendPage = () => {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState("CourseCss.md");  // Establecemos un archivo por defecto

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  useEffect(() => {
    fetch(`/assets/CoursesFrontend/${selectedFile}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => console.error("Error fetching file:", error));
  }, [selectedFile]);
  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Courses Frontend</h1>

      {/* Selector de archivos */}
      <select 
        value={selectedFile} 
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded"
      >
        <option value="CourseCss.md">Frontend Course CSS</option>
        <option value="CourseHtml.md">Frontend Course HTML</option>
        <option value="CourseJavascript.md">Frontend Course JavaScript</option>
      </select>

      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CoursesFrontendPage;
