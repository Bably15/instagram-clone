import "./popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Popup = ({ setIsMenuVisible }) => {
    const handleClosePopup = () => {
        setIsMenuVisible(false);
    };
    return (
        <div className="popup__menu">
            <div className="close__icon">
                <FontAwesomeIcon icon={faXmark} onClick={handleClosePopup} />
            </div>

            <div
                style={{
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    width: "25%",
                    margin: "auto",
                    // height: "100%",
                    borderRadius: "5px",
                    border: "1px solid #fff",
                    overflow: "hidden",
                }}
            >
                <button className="btn">Report</button>
                <button className="btn">Unfollow</button>
                <button className="btn">Add to favourites</button>
                <button className="btn">Go to post</button>
                <button className="btn">Share to...</button>
                <button className="btn">Copy link</button>
                <button className="btn">Embed</button>

                <button className="btn">Cancel</button>
            </div>
        </div>
    );
};
export default Popup;
