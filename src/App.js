
import Home from "./pages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
<<<<<<< HEAD
import Register from "./pages/Auth/Register/Register";
=======
import Help from "./pages/Help/Help";

>>>>>>> 64ccbef7e1a8c8eb5584e465e43474d3d8bf62d5

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path={"/"} element={<Home/>}/>
<<<<<<< HEAD
        </Route>
        <Route path={"/register"} element={<Register/>}/>
=======
            <Route path={"/help"} element={<Help/>}/>
        </Route>
>>>>>>> 64ccbef7e1a8c8eb5584e465e43474d3d8bf62d5
    </Routes>
  );
}

export default App;
