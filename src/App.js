
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Auth/Register/Register";
import Help from "./pages/Help/Help";
import Summary from "./pages/Summary/Summary";
import Login from "./pages/Auth/Login/Login";
import Response from "./pages/Responses/Response";
import NewCv from "./pages/NewCv/NewCv";
<<<<<<< HEAD
import Abstract from "./pages/Abstract/Abstract";
=======
import Level from "./pages/ level/level";
import Names from "./pages/Names/Names";
import University from "./pages/University/University";
>>>>>>> 16ed821eae67ee9f33fdb6d5fe8ce5c07613ba09
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
            <Route path={"/level"} element={<Level/>}/>
            <Route path={"/cv"} element={<NewCv/>}/>
            <Route path={"/response"} element={<Response/>}/>
<<<<<<< HEAD
            <Route path={"/abstract"} element={<Abstract/>}/>
=======
            <Route path={"/names"} element={<Names/>}/>
            <Route path={"/university"} element={<University/>}/>
>>>>>>> 16ed821eae67ee9f33fdb6d5fe8ce5c07613ba09
        </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
