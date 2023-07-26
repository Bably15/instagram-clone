// import { useState } from "react";
import profile from "../../constants/profile";
import dog from "../../assets/images/suggestedProfiles/dog.jpeg";
import spfp1 from "../../assets/images/suggestedProfiles/spfp1.jpeg";
import spfp2 from "../../assets/images/suggestedProfiles/spfp2.jpeg";
import spfp3 from "../../assets/images/suggestedProfiles/spfp3.jpeg";
import spfp4 from "../../assets/images/suggestedProfiles/spfp4.jpeg";
import spfp5 from "../../assets/images/suggestedProfiles/spfp5.jpeg";
import "./suggested.css";

const Suggestions = () => {
    const suggestedProfiles = [
        {
            image: spfp1,
            username: "lara1992",
        },
        {
            image: spfp2,
            username: "lara1992",
        },
        {
            image: spfp3,
            username: "lara1992",
        },
        {
            image: spfp4,
            username: "lara1992",
        },
        {
            image: spfp5,
            username: "lara1992",
        },
    ];
    return (
        <div className="profiles__sidebar">
            <div className="profiles__sidebar--user">
                <div className="profiles__sidebar--user--info">
                    {" "}
                    <img
                        src={profile.picture}
                        alt=""
                        className="user__profile-picture"
                    />
                    <span>{profile.username}</span>
                </div>

                <button className="sidebar__functions"> switch</button>
            </div>
            <div className="profiles__sidebar--title">
                <h5>Suggested for you</h5>
                <div>See all</div>
            </div>
            <div>
                {suggestedProfiles.map((item) => (
                    <div className="suggestions__bar">
                        <div className="suggestions__bar--user--info">
                            <img
                                src={item.image}
                                alt=""
                                className="user__profile-picture"
                            />
                            <span>{item.username}</span>
                        </div>
                        <div>
                            <a href="#follow" className="sidebar__functions">
                                Follow
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Suggestions;
