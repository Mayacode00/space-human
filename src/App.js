import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Space from "./components/space/space";

function App() {
  return (
    <>
     <Router>
       <Space/>
     </Router>
    </>
  );
}

export default App;
