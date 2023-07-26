import profile5 from "../../assets/images/stories/profile5.jpeg";
import profile3 from "../../assets/images/stories/profile3.jpeg";
import profile4 from "../../assets/images/stories/profile4.png";
import "./posts.css";
const Posts = () => {
    const postItems = [profile5, profile3, profile4];
    return (
        <div className="post">
            {postItems.map((item, index) => (
                <div key={index} className="post__items">
                    <img src={item} alt="" className="post__items--image" />
                </div>
            ))}
        </div>
    );
};

export default Posts;
