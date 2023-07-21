import pfp from "../../assets/images/users/pfp.jpg";
import "./feed.css";
import dog from "../../assets/images/dog.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedItem from "./FeedItem";
import {
    faHeart,
    faComment,
    faPaperPlane,
    faBookmark,
} from "@fortawesome/free-regular-svg-icons";

const Feed = () => {
    const feedItemList = [
        {
            profilePicture: pfp,
            username: "barbieofficial",
            image: pfp,
            time: "1h",
            likeCount: "31 likes",
            caption: "hi this is a caption",
            icon: [faHeart, faComment, faPaperPlane, faBookmark],
        },
        // {
        //     profilePicture: pfp,
        //     username: "barbieofficial",
        //     image: pfp,
        //     time: "1h",
        //     likeCount: "31 likes",
        //     caption: "hi this is a caption",
        //     icon: [faHeart, faComment, faPaperPlane, faBookmark],
        // },
    ];
    return (
        <div>
            <FeedItem userInfo={feedItemList} />

            <div></div>
        </div>
    );
};
export default Feed;
