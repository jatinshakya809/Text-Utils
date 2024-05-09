import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="md:w-[60vw] w-[90vw] mt-5">
        <h1 className="text-3xl font-bold underline text-purple-600 my-5">
          About Our TextifyTool
        </h1>
        <p>
          Welcome to your TextifyTool go-to destination for all your text
          manipulation needs! Our website offers a range of simple yet powerful
          tools to help you transform, analyze, and manipulate text
          effortlessly.
        </p>
        <h1 className="text-xl font-bold my-3">What We Offer.</h1>

        <p className="mb-2">
          <b>Text Transformation:</b>Text Transformation: Easily convert text
          between uppercase, lowercase, and title case. Whether you're drafting
          an email, writing a report, or coding, our transformation tools ensure
          your text is formatted exactly as you need it.
        </p>
        <p className="mb-2">
          <b>Copy Text:</b> Copy text with just a click! Our copy text feature
          makes it convenient to copy transformed text to your clipboard, ready
          to paste into any document or application.
        </p>
        <p>
          <b>Reverse Text:</b> Ever wondered what your text looks like in
          reverse? With our reverse text tool, you can flip the order of
          characters or words in your text. It's a fun and useful way to explore
          language and patterns.
        </p>

        <h1 className="my-5">
          Developer: <b>Jatin Shakya</b>
        </h1>

        <h1 className="text-pink-500 text-lg mb-10">Thanks You :)</h1>
      </div>
    </div>
  );
};

export default About;
