import React, { useState, useEffect } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);



  const handleAddComment = async () => {
    if (comment.trim() === "" || rating === 0) return;
    
  
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Debes estar logueado para comentar.");
      return;
    }
    

    const newCommentPayload = {
      content: comment,
      publicationDate: new Date().toISOString(),
      rating,
      resourceId: "course123", 
      user: { id: userId }
    };

    try {
      const response = await fetch("http://localhost:8080/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCommentPayload)
      });
      if (!response.ok) {
        throw new Error("Error al enviar el comentario");
      }
      const createdComment = await response.json();
      console.log("Comentario creado:", createdComment);
 
      setComments([...comments, createdComment]);
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al enviar el comentario.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Deja un comentario</h2>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
        placeholder="Escribe tu comentario aquí..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="flex items-center mt-3">
        <span className="text-lg font-medium mr-2">Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={handleAddComment}
      >
        Enviar
      </button>
      <div className="mt-5">
        <h3 className="text-lg font-medium">Comentarios:</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No hay comentarios aún.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {comments.map((c, index) => (
              <li key={index} className="p-2 border rounded-md bg-gray-100">
                <p>{c.content}</p>
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(c.rating)}{" "}
                  <span className="text-gray-400">
                    {"★".repeat(5 - c.rating)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
