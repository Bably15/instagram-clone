import Stories from "../components/Stories/index";
import Feed from "../components/Feed";
import Suggestions from "../components/Suggested";

import "./homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage__mainFeed">
                <Stories />
                <Feed />
            </div>
            <div className="homepage__suggestions">
                <Suggestions />
            </div>
        </div>
    );
};
export default Homepage;
