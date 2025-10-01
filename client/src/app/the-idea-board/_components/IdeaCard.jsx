"use client";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { upvoteIdea } from "../../../redux/IdeasSlice";
import { HeartPlus } from "lucide-react";

const IdeaCard = ({ id, text, upvotes, created_at }) => {
  const dispatch = useDispatch();

  const handleUpvote = useCallback(() => {
    dispatch(upvoteIdea(id));
  }, [dispatch, id]);

  return (
<div
  className="p-4 rounded-md shadow-sm bg-blue-500 flex flex-col justify-between
             w-full min-w-0 min-h-[120px] transition-transform transform hover:scale-105 hover:shadow-lg"
  aria-label={`Idea card for ${text}`}
>

  {/* Text section */}
  <div  className="
    flex-1 overflow-y-auto max-h-32 mb-2
    [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-blue-200 
    [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-thumb]:rounded
  ">
    <p className="text-white break-words">{text}</p>
  </div>

  {/* Footer: date + upvote */}
  <div className="flex justify-between items-center">
    <p className="text-white/80 text-sm">
      Created at: {new Date(created_at).toLocaleString()}
    </p>
    <button
      onClick={handleUpvote}
      className="text-white px-3 py-1 rounded hover:scale-110 transition-all duration-200 flex gap-1 cursor-pointer"
      aria-label={`Upvote idea: ${text}`}
    >
      <HeartPlus /> {upvotes}
    </button>
  </div>
</div>

  );
};

export default React.memo(IdeaCard);
