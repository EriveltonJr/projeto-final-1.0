import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/Home"; 


function App() {
  return (
    <div className="w-full min-h-screen h-auto bg-[#171717]">
      <Router>
        <Navbar />
        <HomePage />  
      </Router>
    </div>
  );
}

export default App;