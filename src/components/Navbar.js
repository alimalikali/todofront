import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../store/reducers/usersReducers";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    navigate("/login");
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) navigate("/login");
  }, []);

  return (
    <nav className="bg-white">
      <div className="md:px-14 px-4 py-5 flex justify-between md:flex-row flex-col">
        <Link
          to={"/"}
          className="text-black font-bold font-mono text-5xl flex items-center"
        >
          Task Master
        </Link>
        <div className="text-2xl flex space-x-4">
          {user ? (
            <>
              <button
                className="mt-4 px-6 py-3 bg-[#13ab85] text-white font-semibold rounded-lg shadow-md focus:outline-none"
                onClick={handleLogout}
              >
                Logout
              </button>
              {user.data && (
                <div className="mt-4 text-gray-800 font-semibold flex items-center">
                  {user.data.email}
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="bg-blactext-black rounded-xl p-3 text-2xl font-bold text-black"
              >
                Login
              </Link>
              <Link
                to={"/signup"}
                className="bg-blactext-black rounded-xl p-3 text-2xl font-bold text-black"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
