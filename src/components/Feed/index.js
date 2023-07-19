import pfp from "../../assets/images/pfp.jpg";
import "./feed.css";
import dog from "../../assets/images/dog.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faComment,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
    const feedItem = [
        {
            profilePicture: pfp,
            username: "barbieofficial",
            image: dog,
        },
    ];
    return (
        <div>
            <div className="user">
                <div className="user__info">
                    <div>
                        {/* <img
                            src={}
                            alt=""
                            className="user__profile--image"
                        /> */}
                    </div>
                    {/* <div className="user__name">{feedItem.username}</div> */}
                    <div className="user__upload--time">
                        <span>1h</span>
                    </div>
                </div>
            </div>

            <img src={feedItem.image} alt="" className="feed__image" />
            <div>
                <div>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={faComment}
                        style={{ color: "#000000" }}
                    />
                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                </div>
                <a href="#likes">31 likes</a>
                <span></span>
            </div>
            <h3>jkspet</h3>
        </div>
    );
};
export default Feed;
