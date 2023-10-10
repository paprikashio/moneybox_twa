import PropTypes from "prop-types";
import "./subtitle.css";

const Subtitle = ({ children, mode, weight }) => {

    const secondary = mode === "secondary" ? "secondary_subtitle" : "";

    const success = mode === "success" ? "success_subtitle" : "";

    const destructive = mode === "destructive" ? "destructive_subtitle" : "";

    const medium = weight === "medium" ? "medium" : "";

    const bold = weight === "bold" ? "bold" : "";

    return(
        <div className={`subtitle ${secondary} ${medium} ${bold} ${success} ${destructive}`}>
            { children }
        </div>
    );

}

Subtitle.propTypes = {
    mode: PropTypes.oneOf(["primary", "secondary", "success", "destructive"]),
    weight: PropTypes.oneOf(["regular", "medium", "bold"])
};

Subtitle.defaultProps = {
    mode: "secondary",
    weight: "regular"
};

export default Subtitle;