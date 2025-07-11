import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import authService from "./appwrite/auth";

import { login, logout } from "./store/authSlice";
import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? <div className="min-h-screen flex flex-wrap content-between bg-gray-400"> 

  <div className="w-full block">
    <Header />

    <main>
      {/* Todo outlet  */} {/* <Outlet /> */}
      <Outlet />
    </main>

    <Footer />
  </div>
  {/* test */}
  
  </div> : null;

}

export default App;
