"use client";

import { useState } from "react";
import QuestionItem from "./QuestionItem";

const Faq = ({ faq }) => {
  return (
    <section
      className="max-w-3xl mx-auto flex flex-col items-center gap-8 my-20 px-4"
      aria-label="Frequently Asked Questions Section"
    >
      {/* Heading */}
      <h2 className="text-blue-500 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="w-full flex flex-col gap-2 border border-gray-500 rounded-2xl overflow-hidden">
        {faq.map((item, index) => (
          <QuestionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
