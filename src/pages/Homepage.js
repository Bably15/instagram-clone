import Stories from "../components/Stories/index";
import Feed from "../components/Feed";
import Suggestions from "../components/Suggested";

import "./homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div>
                <Stories />
                <Feed />
            </div>
            <div>
                <Suggestions />
            </div>
        </div>
    );
};
export default Homepage;
