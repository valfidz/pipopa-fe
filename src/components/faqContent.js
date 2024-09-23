import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "How do you make holy water?",
      answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",   

    },
    {
      question: "What do you call someone with no body and no nose?",
      answer: "Nothing.",
    },
    {
      question: "Why do you never see elephants hiding in trees?",
      answer: "Because they're too big.",
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer: "Because they wipe with their wings.",
    },
    {
      question: "Why did the invisible man turn down the job offer?",
      answer: "He couldn't see himself doing it.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="faq-list space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
              <h3 className="text-lg font-semibold text-gray-800">{question.question}</h3>
              <span className="text-2xl font-semibold text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer mt-4">
                <p className="text-gray-700">{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;