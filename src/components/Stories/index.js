import pfp from "../../assets/images/pfp.jpg";
import "./stories.css";
const Stories = () => {
    const carouselItems = [
        {
            image: pfp,
            username: "rkive",
        },
        {
            image: pfp,
            username: "rkive",
        },
        {
            image: pfp,
            username: "rkive",
        },
        {
            image: pfp,
            username: "rkive",
        },
        {
            image: pfp,
            username: "rkive",
        },
    ];
    return (
        <div className="stories">
            {carouselItems.map((item) => (
                <div className="stories--items">
                    <img src={item.image} alt="" className="profile-picture" />
                    <h3>{item.username}</h3>
                </div>
            ))}
        </div>
    );
};
export default Stories;
