import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import FDForm from "./pages/FDForm"
import DDForm from "./pages/DDForm"


function App() {
  return (
    <div>
      <div>

        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/FDForm" element={<FDForm/>} />
        <Route path="/DDform" element={<DDForm/>} />
        </Routes>
        
      </div>

    </div>
  );
}

export default App;
