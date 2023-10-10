import PropTypes from "prop-types";
import "./title.css";

const Title = ({ children, mode, weight }) => {

    const secondary = mode === "secondary" ? "secondary_title" : "";

    const success = mode === "success" ? "success_title" : "";

    const destructive = mode === "destructive" ? "destructive_title" : "";

    const medium = weight === "medium" ? "medium" : "";

    const bold = weight === "bold" ? "bold" : "";

    return(
        <div
            className={`title ${secondary} ${medium} ${bold} ${success} ${destructive}`}
        >
            { children }
        </div>
    );

}

Title.propTypes = {
    mode: PropTypes.oneOf(["primary", "secondary", "success", "destructive"]),
    weight: PropTypes.oneOf(["regular", "medium", "bold"]),
};

Title.defaultProps = {
    mode: "primary",
    weight: "regular"
};

export default Title;