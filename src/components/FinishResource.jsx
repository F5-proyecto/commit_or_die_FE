import { useState, useEffect } from "react";

function FinishResource({ lessonId, lessonTitle }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const savedStatus = localStorage.getItem(`lesson-${lessonId}`);
    if (savedStatus === "true") {
      setCompleted(true);
    }
  }, [lessonId]);

  const toggleCompletion = () => {
    const newStatus = !completed;
    setCompleted(newStatus);
    localStorage.setItem(`lesson-${lessonId}`, newStatus);
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
}

export default FinishResource;