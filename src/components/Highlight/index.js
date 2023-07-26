import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./highlight.css";
const Highlight = ({ setOpenHighlight }) => {
    const closeHighlightHandler = () => {
        setOpenHighlight(false);
    };
    return (
        <div className="highlight__tab">
            <div className="highlight__box">
                <div className="higlight__heading">
                    <h5>New Highlight</h5>
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={closeHighlightHandler}
                    />
                </div>
                <div className="higlight__name">
                    <input
                        type="text"
                        placeholder="Highlight name"
                        className="higlight__name--input"
                    />
                </div>
                <div>
                    <button className="higlight__button">Next</button>
                </div>
            </div>
        </div>
    );
};
export default Highlight;
