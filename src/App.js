
import Home from "./pages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Auth/Register/Register";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path={"/"} element={<Home/>}/>
        </Route>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
