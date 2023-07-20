import Lily from "../assets/images/Lily.jpeg";
import "./profile.css";
const Profile = () => {
    return (
        <div className="profile__bar">
            <img src={Lily} alt="" className="profile-picture" />
            <span>username</span>
        </div>
    );
};
export default Profile;
