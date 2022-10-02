import Sig from "./Pages/Sig"
import Login from "./Pages/Login"
import NavbarForHome from "./Pages/NavbarForHome";
import Home from "./Pages/Home"
import './App.css';
import AllRoutes from "./Pages/AllRoutes";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <NavbarForHome />
      <AllRoutes />
    </div>
  );
}

export default App;
