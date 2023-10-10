import PropTypes from "prop-types";
import "./delimiter.css";

const Delimiter = ({ height }) => {

    return(
        <div className={"delimiter"} style={{ height: height }}/>
    );

}

Delimiter.propTypes = {
    height: PropTypes.number
};

Delimiter.defaultProps = {
    height: 24
};

export default Delimiter;