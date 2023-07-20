import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="app-homepage">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
