
import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Auth/Register/Register";
import Help from "./pages/Help/Help";
import Summary from "./pages/Summary/Summary";
import Login from "./pages/Auth/Login/Login";
import Response from "./pages/Responses/Response";
import NewCv from "./pages/NewCv/NewCv";
import Level from "./pages/Level/Level";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Description from "./pages/Description/Description";
import AdminPanel from "./pages/adminpanel/AdminPanel";
import {useSelector} from "react-redux";
import MyVs from "./pages/MyVs/MyVs";
import OneVs from "./pages/Onevs/OneVs";
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
    const {data} = useSelector(store => store.auth)
  return (
    <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/help"} element={<Help/>}/>
            {
                data?.user?.role === "user" ?  <Route path={"/summary"} element={<Summary/>}/> : ""
            }
            {
                data?.user?.role === "manager" ?  <Route path={"/myvs"} element={<MyVs/>}/> : ""
            }
            <Route path={"/level"} element={<Level/>}/>
            <Route path={"/cv"} element={<NewCv/>}/>
            <Route path={"/response"} element={<Response/>}/>
            <Route path={"/resume/:id"} element={<Resume/>}/>
            <Route path={"/description/:id"} element={<Description/>}/>
            <Route path={"/onevs/:id"} element={<OneVs/>}/>
            {
                data?.user?.role === "admin" ?  <Route path={"/adminpanel"} element={<AdminPanel/>}/> : ""
            }
        </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
