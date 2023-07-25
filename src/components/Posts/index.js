import profile2 from "../../assets/images/stories/profile2.jpg";
import profile3 from "../../assets/images/stories/profile3.jpeg";
import profile4 from "../../assets/images/stories/profile4.png";
const Posts = () => {
    const postItems = [profile2, profile3, profile4];
    return (
        <div>
            {postItems.map((item, index) => (
                <div key={index}>
                    <img src={item} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Posts;
