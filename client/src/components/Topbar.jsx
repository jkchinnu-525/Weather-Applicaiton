import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between px-2 py-2">
        <Link to="/">
          <h1 className="pl-8 text-lg font-bold text-white">Weatherly</h1>
        </Link>
        <ul className="flex gap-14 text-white">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/weather">
            <li>Weather</li>
          </Link>
          <Link to="/login">
            <li>Create an Account</li>
          </Link>
          <Link to="/suplogin">
            <li>Sup Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
