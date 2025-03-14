import { useState } from "react";
function CommentBox() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleAddComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
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
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={handleAddComment}
      >
        Enviar
      </button>
      {/* Lista de comentarios */}
      <div className="mt-5">
        <h3 className="text-lg font-medium">Comentarios:</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No hay comentarios aún.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {comments.map((c, index) => (
              <li key={index} className="p-2 border rounded-md bg-gray-100">
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default CommentBox;









