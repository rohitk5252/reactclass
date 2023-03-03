import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllData from "./components/AllData";
import UserCard from "./components/UserCard";
import Login from "./components/Login";
import PostDetails from "./postByUser";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
  const [pfp, setPfp] = useState("")
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} pfp={pfp} setPfp={setPfp}/>
        <Routes>
          <Route exact path="/" element={ <Home user={user} setUser={setUser}/>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={user ? <Home user={user} /> : <Login user={user} setUser={setUser} setPfp={setPfp}/>} />
          <Route exact path="/allData" element={<AllData />} />
          <Route exact path="/users" element={<UserCard />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/postDetails" element={<PostDetails />} />
        </Routes>
    </div>
  );
};

export default App;
