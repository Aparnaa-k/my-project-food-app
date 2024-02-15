import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Success from "./pages/success";
import Error from './pages/error';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/success" element={<Success />}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
