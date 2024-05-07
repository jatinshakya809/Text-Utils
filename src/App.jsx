import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container my-3">
        <TextArea heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
