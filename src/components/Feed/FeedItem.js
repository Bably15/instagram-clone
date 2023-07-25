import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup/index";
const FeedItem = ({ userInfo }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const handleOnClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    return (
        <div className="feed">
            {userInfo.map((item, index) => (
                <div className="feed__item" key={index}>
                    <div className="feed__item--header">
                        <div className="feed__item--header--items">
                            <img
                                src={item.profilePicture}
                                alt={item.profilePicture}
                                className="user__profile-picture"
                            />
                            <span className="header__span">
                                {item.username}
                            </span>
                            <span className="header__span">•</span>
                            <span>{item.time}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faEllipsis}
                                onClick={handleOnClick}
                            />

                            {isMenuVisible && (
                                <Popup setIsMenuVisible={setIsMenuVisible} />
                            )}
                        </div>
                    </div>
                    <div>
                        <img src={item.image} alt={item.image} />
                    </div>
                    <div className="feed__item--footer">
                        <div className="feed__item--footer--icons">
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={item.icon[0]} />
                                </span>
                                <span>
                                    {" "}
                                    <FontAwesomeIcon icon={item.icon[1]} />
                                </span>
                                <span>
                                    {" "}
                                    <FontAwesomeIcon icon={item.icon[2]} />
                                </span>
                            </div>
                            <div>
                                {" "}
                                <FontAwesomeIcon icon={item.icon[3]} />
                            </div>
                        </div>
                        <div> {item.likeCount} </div>
                        <div>
                            <p>
                                <a href="#username" className="username">
                                    {item.username}
                                </a>
                                <span> {item.caption}</span>
                            </p>
                            <textarea
                                placeholder="Add a comment..."
                                className="comment-area"
                            ></textarea>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default FeedItem;
