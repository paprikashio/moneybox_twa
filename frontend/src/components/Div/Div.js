import PropTypes from "prop-types";

const Div = ({ children, left, right, top, bottom, className, forwardRef }) => {

    return(
        <div
            className={className}
            style={{
                paddingLeft: left,
                paddingRight: right,
                paddingTop: top,
                paddingBottom: bottom
            }}
            ref={forwardRef}
        >
            { children }
        </div>
    );

}

Div.propTypes = {
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    className: PropTypes.string,
    forwardRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
};

Div.defaultProps = {
    left: 16,
    right: 16,
    top: 12,
    bottom: 12,
    className: ""
};

export default Div;