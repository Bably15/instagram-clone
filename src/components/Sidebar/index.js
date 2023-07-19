import logo from "../../assets/images/logo.png";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faSearch,
    faCompass,
    faHeart,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
    const sidebarItems = [
        {
            icon: faHouse,
            title: "Home",
        },
        {
            icon: faSearch,
            title: "Search",
        },
        {
            icon: faCompass,
            title: "Explore",
        },
        {
            icon: faHouse,
            title: "Reels",
        },
        {
            icon: faPaperPlane,
            title: "Messages",
        },
        {
            icon: faHeart,
            title: "Notifications",
        },
        {
            icon: faHouse,
            title: "Create",
        },
        {
            icon: faHouse,
            title: "Profile",
        },
    ];
    return (
        <div className="sidebar">
            <a href="#logo">
                <img src={logo} alt="" className="logo" />
            </a>
            <div>
                {sidebarItems.map((item) => (
                    <ul className="sidebar__items">
                        <li>
                            <FontAwesomeIcon icon={item.icon} />
                            <span className="sidebar--title">
                                {" "}
                                {item.title}
                            </span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};
export default Sidebar;
