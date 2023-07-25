import profile from "../constants/profile";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons";
import Posts from "../components/Posts/index";
const Profile = () => {
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
                    />
                    <h3>New</h3>
                </div>
                <div>
                    <Posts />
                </div>
            </div>
        </div>
    );
};
export default Profile;
