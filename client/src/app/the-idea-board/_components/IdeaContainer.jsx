"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdeas, addIdea, setPage } from "../../../redux/IdeasSlice";
import IdeaCard from "./IdeaCard";
import { MoveLeft, MoveRight, Send } from "lucide-react";

const IdeaContainer = () => {
  const dispatch = useDispatch();
  const { items, pageNumber, pageSize, totalPages, loading } = useSelector(
    (state) => state.ideas
  );
  const [newIdea, setNewIdea] = useState("");
  const [error, setError] = useState({});

   const validateIdea = useCallback(() => {
    const newErrors = {}; // initialize error object

    if (!newIdea.trim()) {
      newErrors.newIdea = "Idea cannot be empty.";
    } else if (newIdea.length > 300) {
      newErrors.newIdea = "Idea cannot exceed 300 characters.";
    } else {
      newErrors.newIdea = ""; // no error
    }

    setError(newErrors);

    // return true if there are no errors
    return Object.values(newErrors).every((val) => val === "");
  }, [newIdea]);


  useEffect(() => {
    dispatch(fetchIdeas({ pageNumber, pageSize }));
  }, [dispatch, pageNumber, pageSize]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault(); // ✅ prevent default form submit
      if (!validateIdea()) return;

      if (newIdea.trim()) {
        dispatch(addIdea(newIdea));
        setNewIdea("");
        setError({});
      }
    },
    [dispatch, newIdea, validateIdea]
  );

  const handlePageChange = useCallback(
    (page) => {
      if (page > 0 && page <= totalPages) {
        dispatch(setPage(page));
      }
    },
    [dispatch, totalPages]
  );

  return (
    <section
      className="max-w-6xl mx-auto p-6"
      aria-labelledby="idea-board-heading"
    >
      <h2
        id="idea-board-heading"
        className="text-2xl font-bold mb-4 text-gray-800"
      >
        The Idea Board
      </h2>

       {/* Input Field as a form */}
      <form className="flex flex-col gap-1 mb-6 w-full" onSubmit={handleSubmit}>
  {/* Input + Submit Icon */}
  <div className="relative w-full">
    <input
      type="text"
      value={newIdea}
      maxLength={280}
      onChange={(e) => setNewIdea(e.target.value)}
      placeholder="Share your idea..."
      className="w-full p-2 pr-10 rounded-md bg-gray-200 focus:outline-none"
      aria-label="Enter your idea"
    />

    <button
      type="submit"
      className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer"
      aria-label="Submit new idea"
    >
      <Send className="text-blue-500"/>
    </button>
  </div>

  {/* Error message */}
  {error.newIdea && (
    <p
      id="newIdea-error"
      className="text-red-500 text-xs mt-1"
      role="alert"
    >
      {error.newIdea}
    </p>
  )}
</form>

      {/* Ideas List */}
      {loading ? (
        <p className="text-gray-500">Loading ideas...</p>
      ) : items.length === 0 ? (
        <p className="bg-blue-500 text-white p-2 rounded text-center flex items-center justify-center h-16">
  Currently no cards available.
</p>

      ) : (
        <div className="w-full grid gap-6 
                grid-cols-1 
                sm:grid-cols-2
                md:grid-cols-3 
                lg:grid-cols-3">
    {items.map((idea) => (
      <IdeaCard
        key={idea.id}
        id={idea.id}
        text={idea.text}
        upvotes={idea.upvotes}
        created_at={idea.created_at}
      />
    ))}
  </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber === 1}
          className="px-2 py-1 border rounded disabled:opacity-50 cursor-pointer"
          aria-label="Previous page"
        >
          <MoveLeft />
        </button>
        <span className="px-3 py-1">
          Page {pageNumber} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(pageNumber + 1)}
          disabled={pageNumber === totalPages}
          className="px-2 py-1 border rounded disabled:opacity-50 cursor-pointer"
          aria-label="Next page"
        >
          <MoveRight />
        </button>
      </div>
    </section>
  );
};

export default IdeaContainer;
