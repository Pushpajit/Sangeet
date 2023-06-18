import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import { getAccessToken, setToken } from "./redux/APISlice";
import RecentlyPlayed from "./components/RecentlyPlayed";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getAccessToken());

  }, []);



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recent" element={<RecentlyPlayed />}/>
      </Routes>

    </>
  );
}

export default App;
