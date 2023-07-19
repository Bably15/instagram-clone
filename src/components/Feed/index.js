import pfp from "../../assets/images/pfp.jpg";
import "./feed.css";
import dog from "../../assets/images/dog.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedItem from "./FeedItem";
import {
    faHeart,
    faComment,
    faPaperPlane,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
    const feedItemList = [
        {
            profilePicture: pfp,
            username: "barbieofficial",
            image: dog,
            time: "1h",
            likeCount: "31 likes",
            // options: { faEllipsis },
        },
    ];
    return (
        <div>
            <FeedItem userInfo={feedItemList} />

            <div>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <FontAwesomeIcon
                    icon={faComment}
                    style={{ color: "#000000" }}
                />
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </div>
        </div>
    );
};
export default Feed;
