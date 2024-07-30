import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Weather from "./pages/Weather";
import { Topbar } from "./components/Topbar";
import SupAuth from "./components/Supauth";

function App() {
  return (
    <BrowserRouter>
      <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/suplogin" element={<SupAuth />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
