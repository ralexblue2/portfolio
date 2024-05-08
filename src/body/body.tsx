import React from 'react'
import '../styles/body.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

type bodyProps = {};

export const Body = ({}: bodyProps) => {
  
  let CommonBody = (text?:String) =>{
    return(
      <div className="wholeBody">  
        <div className="table">
          <div className="test">{text}</div>
        </div>
      </div>
    )

  }
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={CommonBody()}></Route>
        <Route path="/some" element={CommonBody("some")}></Route>
      </Routes>
    </BrowserRouter>
  );
};