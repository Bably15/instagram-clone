import saved1 from "../../assets/images/saved/saved1.jpeg";
import saved2 from "../../assets/images/saved/saved2.jpeg";

import saved4 from "../../assets/images/saved/saved4.jpeg";
import "./saved.css";
const Saved = () => {
    const savedItems = [saved1, saved2, saved4];
    return (
        <div className="saved">
            {savedItems.map((item, index) => (
                <div key={index} className="saved__items">
                    <img src={item} alt="" className="saved__items--image" />
                    <div class="gradient-overlay"></div>
                    <div class="text-overlay">Your Text Here</div>
                </div>
            ))}
        </div>
    );
};
export default Saved;
