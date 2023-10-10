import PropTypes from "prop-types";
import "./super_title.css";

const SuperTitle = ({ children, mode, weight }) => {

    const secondary = mode === "secondary" ? "secondary_super_title" : "";

    const success = mode === "success" ? "success_super_title" : "";

    const destructive = mode === "destructive" ? "destructive_super_title" : "";

    const medium = weight === "medium" ? "medium" : "";

    const bold = weight === "bold" ? "bold" : "";

    return(
        <div
            className={`super_title ${secondary} ${medium} ${bold} ${success} ${destructive}`}
        >
            { children }
        </div>
    );

}

SuperTitle.propTypes = {
    mode: PropTypes.oneOf(["primary", "secondary", "success", "destructive"]),
    weight: PropTypes.oneOf(["regular", "medium", "bold"]),
};

SuperTitle.defaultProps = {
    mode: "primary",
    weight: "regular"
};

export default SuperTitle;