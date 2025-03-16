import { useState } from "react";
function CommentBox() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const handleAddComment = () => {
    if (comment.trim() === "" || rating === 0) return;
    const newComment = { text: comment, rating };
    setComments([...comments, newComment]);
    setComment("");
    setRating(0);
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Leave a Comment</h2>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
        placeholder="Write your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="flex items-center mt-3">
        <span className="text-lg font-medium mr-2">Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-2xl ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={handleAddComment}
      >
        Submit
      </button>
      <div className="mt-5">
        <h3 className="text-lg font-medium">Comments:</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {comments.map((c, index) => (
              <li key={index} className="p-2 border rounded-md bg-gray-100">
                <p>{c.text}</p>
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
}
export default CommentBox;









