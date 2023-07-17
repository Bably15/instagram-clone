import logo from "../../assets/images/logo.png";
import "./sidebar.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
    const sidebarItems = [
        {
            icon: faHouse,
            title: "Home",
        },
    ];
    return (
        <div>
            <a href="#logo">
                <img src={logo} alt="" className="logo" />
            </a>
        </div>
    );
};
export default Sidebar;
