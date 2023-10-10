import PropTypes from "prop-types";
import "./text.css";

const Text = ({ children, mode, weight }) => {

    const secondary = mode === "secondary" ? "secondary_text" : "";

    const success = mode === "success" ? "success_text" : "";

    const destructive = mode === "destructive" ? "destructive_text" : "";

    const medium = weight === "medium" ? "medium" : "";

    const bold = weight === "bold" ? "bold" : "";

    return(
        <div
            className={`text_body ${secondary} ${medium} ${bold} ${success} ${destructive}`}
        >
            { children }
        </div>
    );

}

Text.propTypes = {
    mode: PropTypes.oneOf(["primary", "secondary", "success", "destructive"]),
    weight: PropTypes.oneOf(["regular", "medium", "bold"])
};

Text.defaultProps = {
    mode: "primary",
    weight: "regular"
};

export default Text;