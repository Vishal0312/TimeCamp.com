import Sig from "./Pages/Sig"
import Login from "./Pages/Login"
import NavbarForLogin from "./Pages/NavbarForLogin";
import Home from "./Pages/Home"
import './App.css';
import AllRoutes from "./Pages/AllRoutes";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <NavbarForLogin />
      <Login />
      <AllRoutes />
      <Home />
      <Signup />
    </div>
  );
}

export default App;
