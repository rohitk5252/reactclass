import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllData from "./components/AllData";
import UserCard from "./components/UserCard";
import Login from "./components/Login";
import PostDetails from "./postByUser";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home user={user} setUser={setUser}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={user ? <Home user={user} /> : <Login user={user} setUser={setUser}/>} />
          <Route path="/allData" element={<AllData />} />
          <Route path="/users" element={<UserCard />} />
          <Route path="/postDetails" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
