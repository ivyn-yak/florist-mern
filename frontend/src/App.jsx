import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, CreateFlower, DeleteFlower, UpdateFlower, ViewAll, ViewFlower } from "./pages";


const App = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/flowers/create" element={<CreateFlower/>} />
    <Route path="/flowers/delete/:id" element={<DeleteFlower/>} />
    <Route path="/flowers/update/:id" element={<UpdateFlower/>} />
    <Route path="/flowers/view" element={<ViewAll/>} />
    <Route path="/flowers/view/:id" element={<ViewFlower/>} />

  </Routes>
);

export default App;
