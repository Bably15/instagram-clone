import "./popup.css";

const Popup = () => {
    const handleModelOutsideClick = () => {
        console.log("HANDLE MODEL OUTSIDE CLICK");
    };

    return (
        <div
            onClick={handleModelOutsideClick}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
            }}
        >
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
