
import Home from "./pages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Auth/Register/Register";
import Help from "./pages/Help/Help";
<<<<<<< HEAD
import Summary from "./pages/Summary/Summary";
=======
import Login from "./pages/Auth/Login/Login";
>>>>>>> f8ff1b89bb31bf96804ce0c6989488971bc2af15
import Response from "./pages/Responses/Response";
function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/help"} element={<Help/>}/>
            <Route path={"/summary"} element={<Summary/>}/>
            <Route path={"/response"} element={<Response/>}/>
        </Route>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
    </Routes>
  );
}

export default App;
