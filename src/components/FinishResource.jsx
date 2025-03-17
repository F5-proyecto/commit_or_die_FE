import React, { useState, useEffect } from "react";

const FinishResource = ({ lessonId, lessonTitle, courseTitle }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const savedStatus = localStorage.getItem(`lesson-${lessonId}`);
    if (savedStatus === "true") {
      setCompleted(true);
    }
  }, [lessonId]);

  const toggleCompletion = async () => {
    const newStatus = !completed;
    setCompleted(newStatus);
    localStorage.setItem(`lesson-${lessonId}`, newStatus.toString());

    const loggedUserId = localStorage.getItem("userId");
    if (!loggedUserId) {
      alert("Debes estar logueado para actualizar el progreso.");
      return;
    }

    const courseId = courseTitle;
    const progressKey = `progress-${courseId}-${loggedUserId}`;
    const progressId = localStorage.getItem(progressKey);

    console.log("courseTitle:", courseTitle);

    const payload = {
      user: { id: Number(loggedUserId) },
      courseId: courseTitle,
      progressPercentage: newStatus ? 100.0 : 0.0,
      completedLessonsCount: newStatus ? 1 : 0
    };

    try {
      let response;
      if (progressId) {
        payload.id = Number(progressId);
        response = await fetch("http://localhost:8080/course-progress/update", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        response = await fetch("http://localhost:8080/course-progress/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al enviar el progreso: ${errorText}`);
      }

      const data = await response.json();
      console.log("Progreso guardado/actualizado:", data);
      if (!progressId) {
        localStorage.setItem(progressKey, data.id.toString());
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Ocurrió un error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg flex items-center">
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleCompletion}
        className="mr-3 w-5 h-5 accent-green-500"
      />
      <span className={`text-lg ${completed ? "line-through text-gray-500" : ""}`}>
        {lessonTitle}
      </span>
    </div>
  );
};

export default FinishResource;