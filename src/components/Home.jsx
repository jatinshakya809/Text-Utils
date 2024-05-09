import React from "react";
import Navbar from "./Navbar";
import TextArea from "./TextArea";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-center my-5">
        <TextArea heading="Enter the text to analyze" />
      </div>
    </div>
  );
};

export default Home;
