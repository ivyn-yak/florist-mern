import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import CreateFlower from "./pages/CreateFlower"
import DeleteFlower from "./pages/DeleteFlower"
import UpdateFlower from "./pages/UpdateFlower"
import ShowFlower from "./pages/ShowFlower"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/flowers/create" element={<CreateFlower/>} />
      <Route path="/flowers/delete/:id" element={<DeleteFlower/>} />
      <Route path="/flowers/update/:id" element={<UpdateFlower/>} />
      <Route path="/flowers/details/:id" element={<ShowFlower/>} />
    </Routes>
  )
}

export default App