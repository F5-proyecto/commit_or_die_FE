import React from "react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

const CoursesTddPage = () => {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState("CourseTdd.md");  // Establecemos un archivo por defecto

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  useEffect(() => {
    fetch(`/assets/CoursesTdd/${selectedFile}`)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [selectedFile]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Courses TDD</h1>

      {/* Selector de archivos */}
      <select 
        value={selectedFile} 
        onChange={handleFileChange}
        className="mb-4 p-2 border rounded"
      >
        <option value="CourseTdd.md">TDD Course 1</option>
      </select>

      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CoursesTddPage;
