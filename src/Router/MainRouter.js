import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import Layout from "../components/Layout";
import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/search" element="hello" />
                <Route path="/create" element="snow" />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};
export default MainRouter;
