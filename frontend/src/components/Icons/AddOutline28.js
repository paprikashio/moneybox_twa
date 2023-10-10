import PropTypes from "prop-types";

const AddOutline28 = ({ color, size }) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28" fill="none">
            <path d="M14 4C14.5523 4 15 4.44772 15 5V13H23C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15H15V23C15 23.5523 14.5523 24 14 24C13.4477 24 13 23.5523 13 23V15H5C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H13V5C13 4.44772 13.4477 4 14 4Z" fill={color}/>
        </svg>
    );

}

AddOutline28.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
};

AddOutline28.defaultProps = {
    color: "#000000",
    size: 28
};

export default AddOutline28;