import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [Data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...Data, [e.target.id]: e.target.value });
  };
  console.log(Data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: Data["email"],
          password: Data["password"],
        }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold py-4 text-3xl">Sign In</h1>
      <div className="font-bold flex justify-center text-2xl py-4">Login</div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="p-3 rounded-lg bg-slate-100"
            onChange={handleChange}
          />
          <input
            id="password"
            type="text"
            placeholder="Password"
            className="p-3 rounded-lg bg-slate-100"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-65"
          >
            SignIn
          </button>
        </form>
        <div className="flex pt-4">
          <p>Dont Have an account?</p>
          <Link to="/register">
            <p className="text-blue-500 underline">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
