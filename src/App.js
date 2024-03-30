
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Auth/Register/Register";
import Help from "./pages/Help/Help";
import Summary from "./pages/Summary/Summary";
import Login from "./pages/Auth/Login/Login";
import Response from "./pages/Responses/Response";
function App() {
    const role = [
        {
            id:1,
            role:"admin"
        },
        {
            id:2,
            role:"user"
        },
        {
            id:3,
            role:"company"
        }
    ]
  return (
    <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/help"} element={<Help/>}/>
            <Route path={"/summary"} element={<Summary/>}/>
            <Route path={"/response"} element={<Response/>}/>
        </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
