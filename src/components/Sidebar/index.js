import logo from "../../assets/images/logo.png";
import { useState } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as regularHeart,
    faCompass as regularCompass,
    faPaperPlane as regularPaperPlane,
    faSquarePlus as regularSquarePlus,
    faUser as regularUser,
    // faMagnifyingGlass as regularMagnifyingGlass,
} from "@fortawesome/free-regular-svg-icons";
import Searchbar from "../Searchbar";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [openSearchbar, setOpenSearchbar] = useState(false);
    const handlerOnClick = () => {
        setOpenSearchbar(true);
        console.log("heello");
    };
    const sidebarItems = [
        {
            icon: faHouse,
            title: "Home",
            path: "/home",
        },
        {
            icon: faMagnifyingGlass,
            title: "Search",
            // path: "/search",
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
            path: "/create",
        },
        {
            icon: regularUser,
            title: "Profile",
            path: "/profile",
        },
    ];
    return (
        <div className="sidebar">
            <a href="#logo">
                <img src={logo} alt="" className="logo" />
            </a>
            <div>
                {sidebarItems.map((item) => (
                    <Link
                        to={item.path}
                        style={{
                            textDecoration: "none",
                            color: "black",
                            /* Add any other custom styles you want here */
                        }}
                    >
                        <ul className="sidebar__items">
                            <li>
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className="sidebar__items--icons"
                                    onClick={
                                        item.title === "Search"
                                            ? () => handlerOnClick(item.title)
                                            : null
                                    }
                                />
                                
                             
                                <span className="sidebar--title">
                                    {" "}
                                    {item.title}
                                </span>
                                {openSearchbar && <Searchbar />}
                            </li>
                        </ul>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Sidebar;
