// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsis } from "@fortawesome/free-regular-svg-icons";
import Popup from "./Popup";
const FeedItem = ({ userInfo }) => {
    const handleOnClick = () => {
        <Popup />;
    };
    return (
        <div>
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
                            <button onClick={handleOnClick}>
                                {/* <FontAwesomeIcon icon={faEllipsis} /> */}
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={item.image} alt={item.image} />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default FeedItem;
