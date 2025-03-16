import React from "react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CoursesFrontendPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-blue-3 text-center text-6xl font-bold mt-30 font-briem-hand">
        Frontend
      </h1>
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto mt-20 h-40">
        <h2 className="font-bold text-2xl font-briem-hand">Curso Frontend Css</h2>
        <Link to="/services/front-end/fe1">
          {" "}
          <button className="bg-blue-3 text-white text-lg font-medium px-6 py-3 rounded-lg button-custom cursor-pointer">
            Empieza ahora{" "}
          </button>{" "}
        </Link>
      </div>
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto mt-20 h-40">
        <h2 className="font-bold text-2xl font-briem-hand">Curso Frontend HTML</h2>
        <Link to="/services/front-end/fe2">
          {" "}
          <button className="bg-blue-3 text-white text-lg font-medium px-6 py-3 rounded-lg button-custom cursor-pointer">
            Empieza ahora{" "}
          </button>{" "}
        </Link>
      </div>
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto mt-20 h-40">
        <h2 className="font-bold text-2xl font-briem-hand">Curso Frontend JavaScript</h2>
        <Link to="/services/front-end/fe3">
          {" "}
          <button className="bg-blue-3 text-white text-lg font-medium px-6 py-3 rounded-lg button-custom cursor-pointer">
            Empieza ahora{" "}
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CoursesFrontendPage;
