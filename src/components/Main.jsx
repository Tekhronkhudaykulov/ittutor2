import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { Header } from "./Header/Header";
import Home from "./Home";
import Fillter from "./home/FillterLearingCenter";

export default function Main() {
  return (
    <div className="main">
      {/* header-main  */}
      <Header />
      {/* all components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fillter" element={<Fillter />} />
      </Routes>
    </div>
  );
}
