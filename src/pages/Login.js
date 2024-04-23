import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/api/userSlice";
import { setUser } from "../store/reducers/usersReducers";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let creditionals = { email, password };
    const res = await login(creditionals);
    dispatch(setUser(res));
    localStorage.setItem("user", JSON.stringify(res));
    navigate("/");

  };
  useEffect(() => {
    let user = localStorage.getItem("user",);
    if (user) navigate("/");
  }, []);

  return (
    <main className="flex justify-center pt-10 ">
      <form
        className="login bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2 max-w-auto"
        onSubmit={handleSubmit}
      >
        <h3 className="text-[#13ab85] text-3xl font-bold mb-6">Log In</h3>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-[#13ab85] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
