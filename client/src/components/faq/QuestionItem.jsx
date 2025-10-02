"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Question Button */}
      <button
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
        className="w-full py-5 px-6 flex justify-between items-center text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl lg:text-2xl">{question}</span>
        <Plus
          className={`w-6 h-6 text-blue-500 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>

      {/* Answer */}
      {isOpen && (
        <div
          id={`faq-answer-${question}`}
          role="region"
          aria-labelledby={`faq-question-${question}`}
          className="px-6 pb-6 text-gray-500 text-base md:text-lg leading-relaxed"
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
