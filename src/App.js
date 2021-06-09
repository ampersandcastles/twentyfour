<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
// import React, { useState, useEffect } from 'react';
>>>>>>> 732677dac5275858a5d0aaf82d6e3034c3eb140b
=======
// import React, { useState, useEffect } from 'react';
>>>>>>> origin/development
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Footer from "./components/site/Footer";
import Header from "./components/site/Header";
import Sidebar from "./components/site/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
