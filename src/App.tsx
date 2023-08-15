import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoggedInRoutes } from "./components/routes/LoggedInRoute";
import { Profile } from "./pages/Profile";
import { NotLoggedInRoutes } from "./components/routes/NotLoggedInRoutes";
import { Login } from "./pages/Login";
import { Reset } from "./pages/Reset";
import { Home } from "./pages/Home";
import http from "./utils/http";
import { toast } from "react-toastify";
import { useAppSelector } from "./app/hooks";
import { CreatePost } from "./components/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
