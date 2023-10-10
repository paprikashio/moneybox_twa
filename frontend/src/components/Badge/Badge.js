import PropTypes from "prop-types";
import Text from "../Typography/Text/Text";
import "./badge.css";

const Badge = ({ text, mode }) => {

    const success = mode === "success" ? "success" : "";

    const destructive = mode === "destructive" ? "destructive" : "";

    return(
        <div className={`badge ${success} ${destructive}`}>
            <Text mode={mode}>{ text }</Text>
        </div>
    );

}

Badge.propTypes = {
    mode: PropTypes.oneOf(["primary", "success", "destructive"]),
    text: PropTypes.string
};

Badge.defaultProps = {
    mode: "primary",
};

export default Badge;