import PropTypes from "prop-types";

const Spacing = ({ size, mode }) => {

    return(
        <div style={{
            height: mode === "vertical" ? size : 0,
            width: mode === "horizontal" ? size : 0,
        }} />
    );

}

Spacing.propTypes = {
    size: PropTypes.number,
    mode: PropTypes.oneOf(["horizontal", "vertical"]),
};

Spacing.defaultProps = {
    size: 8,
    mode: "vertical"
};

export default Spacing;