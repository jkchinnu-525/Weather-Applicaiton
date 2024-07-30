import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
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
        "https://task-2-hmum.onrender.com/api/auth/register",
        {
          username: Data["username"],
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
      <h1 className="text-center font-bold py-4 text-3xl">Sign Up</h1>
      <div className="font-bold flex justify-center text-2xl py-4">
        Create an account
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            id="username"
            type="text"
            placeholder="Username"
            className=" p-3 rounded-lg bg-slate-100"
            onChange={handleChange}
          />
          <input
            id="password"
            type="text"
            placeholder="Password"
            className="p-3 rounded-lg bg-slate-100"
            onChange={handleChange}
          />
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="p-3 rounded-lg bg-slate-100"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-65"
          >
            SignUp
          </button>
        </form>
        <div className="flex pt-4">
          <p>Already Have an account?</p>
          <Link to="/signin">
            <p className="text-blue-500 underline">Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
