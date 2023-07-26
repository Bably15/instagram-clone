import profile from "../constants/profile";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGear,
    faPlus,
    faTableCells,
    faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Posts from "../components/Posts/index";
import Tagged from "../components/Tagged/index";
import Saved from "../components/Saved/index";
import Highlight from "../components/Highlight/index";
import { useState } from "react";

const Profile = () => {
    const [openHighlight, setOpenHighlight] = useState(false);
    const createHighlight = () => {
        setOpenHighlight(!openHighlight);
    };
    const [profileElements, setProfileElements] = useState("POSTS");
    const renderProfileElements = () => {
        if (profileElements === "POSTS") {
            return <Posts />;
        } else if (profileElements === "SAVED") {
            return <Saved />;
        } else {
            return <Tagged />;
        }
    };
    const handleChangeTag = (tag) => {
        // console.log(tag);
        setProfileElements(tag);
    };
    const profileTags = [
        {
            icon: faTableCells,
            tag: "POSTS",
            path: "/posts",
        },
        {
            icon: faBookmark,
            tag: "SAVED",
            path: "/saved",
        },
        {
            icon: faUserTag,
            tag: "TAGGED",
            path: "/tagged",
        },
    ];

    return (
        <div className="profile">
            <div className="profile__header">
                <div className="profile__header--userInfo">
                    <div>
                        <img
                            src={profile.picture}
                            alt=""
                            className="profile__header--userInfo--picture"
                        />
                    </div>

                    <div>
                        <span>{profile.username}</span>
                        <span>
                            <button className="profile__header--button">
                                Edit Profile
                            </button>
                        </span>
                        <span>
                            {" "}
                            <button className="profile__header--button">
                                View archive
                            </button>
                        </span>
                        <span>
                            {" "}
                            <button className="profile__header--button">
                                Ad tools
                            </button>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faGear} />
                        </span>
                        <ul className="header__info">
                            <li>
                                <b>0</b> posts
                            </li>
                            <li>
                                {" "}
                                <b>0</b> followers
                            </li>
                            <li>
                                {" "}
                                <b>0</b> following
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="highlight">
                    <FontAwesomeIcon
                        icon={faPlus}
                        size="2x"
                        className="highlight__icon"
                        onClick={createHighlight}
                    />
                    <h3>New</h3>
                    {openHighlight && (
                        <Highlight setOpenHighlight={setOpenHighlight} />
                    )}
                </div>
            </div>
            <div className="profile__footer">
                {profileTags.map((item) => (
                    <div
                        key={item.tag}
                        onClick={() => handleChangeTag(item.tag)}
                        className="profile__footer--tabs"
                    >
                        <span>
                            <FontAwesomeIcon icon={item.icon} />
                        </span>
                        <span>{item.tag}</span>
                    </div>
                ))}
            </div>
            {renderProfileElements()}
        </div>
    );
};
export default Profile;
