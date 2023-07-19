import profile1 from "../../assets/images/stories/profile1.jpeg";
import profile2 from "../../assets/images/stories/profile2.jpg";
import profile3 from "../../assets/images/stories/profile3.jpeg";
import profile4 from "../../assets/images/stories/profile4.png";
import pfp from "../../assets/images/stories/pfp.jpg";
import "./stories.css";
const Stories = () => {
    const carouselItems = [
        {
            image: profile1,
            username: "rkive",
        },
        {
            image: profile2,
            username: "ind",
        },
        {
            image: profile3,
            username: "srih",
        },
        {
            image: profile4,
            username: "luvr44",
        },
        {
            image: pfp,
            username: "tulip",
        },
        {
            image: pfp,
            username: "tulip",
        },
        {
            image: pfp,
            username: "tulip",
        },
        {
            image: pfp,
            username: "tulip",
        },
    ];
    return (
        <div className="stories">
            {carouselItems.map((item) => (
                <div className="stories--items">
                    <img src={item.image} alt="" className="profile-picture" />
                    <h3 className="username">{item.username}</h3>
                </div>
            ))}
        </div>
    );
};
export default Stories;
