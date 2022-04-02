// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 20000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark Mode has been Enabled", "success");
      document.title = 'Text Edit-Dark Mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been Enabled", "success");
      document.title = 'Text Edit-Light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextBlog' mode={mode} togglemode={togglemode} abouttitle='About Us' />
        <Alert alert={alert} />
        <div className="container my-3" >
          {/* <Routes> */}
            {/* <Route path="/About" element={<About />}> */}
            {/* </Route> */}
            {/* <Route path="/" element={<TextForm showalert={showalert} heading='Enter the Text' mode={mode} />}> */}
            <TextForm showalert={showalert} heading='Enter the Text' mode={mode} />
            {/* </Route>/ */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
