import logo from "../../assets/images/logo.png";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as regularHeart,
    faCompass as regularCompass,
    faPaperPlane as regularPaperPlane,
    faSquarePlus as regularSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
// import { } from "@fortawesome/free-regular-svg-icons";
import pfp from "../../assets/images/pfp.jpg";

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: faHouse,
            title: "Home",
        },
        {
            icon: regularHeart,
            title: "Search",
        },
        {
            icon: regularCompass,
            title: "Explore",
        },
        {
            icon: regularHeart,
            title: "Reels",
        },
        {
            icon: regularPaperPlane,
            title: "Messages",
        },
        {
            icon: regularHeart,
            title: "Notifications",
        },
        {
            icon: regularSquarePlus,
            title: "Create",
        },
        {
            icon: pfp,
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
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="sidebar__items--icons"
                            />
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
