import "./App.css";
import Sidebar from "./components/Sidebar/index";
// import Homepage from "./pages/Homepage";
import router from "./Router/MainRouter";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainRouter from "./Router/MainRouter";
import Profile from "./components/Profile";
function App() {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
}

export default App;
