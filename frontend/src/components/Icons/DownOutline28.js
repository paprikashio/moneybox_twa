import PropTypes from "prop-types";

const DownOutline28 = ({ color, size }) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 28 28" fill="none">
            <path d="M14 23L13.9806 22.9998C13.9573 22.9994 13.934 22.9981 13.9107 22.996L14 23C13.9473 23 13.8955 22.9961 13.845 22.9887C13.8335 22.9862 13.8214 22.9841 13.8094 22.9818C13.5546 22.936 13.3345 22.7976 13.1884 22.6051L5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929C5.65338 12.9324 6.22061 12.9047 6.6129 13.2097L6.70711 13.2929L13 19.586V4.95C13 4.42533 13.4477 4 14 4C14.5128 4 14.9355 4.36674 14.9933 4.83921L15 4.95V19.586L21.2929 13.2929C21.6534 12.9324 22.2206 12.9047 22.6129 13.2097L22.7071 13.2929C23.0676 13.6534 23.0953 14.2206 22.7903 14.6129L22.7071 14.7071L14.8116 22.6051C14.6655 22.7976 14.4454 22.936 14.1909 22.9827C14.1786 22.9841 14.1665 22.9862 14.1545 22.9881C14.1336 22.9918 14.1119 22.9943 14.09 22.9962C14.0657 22.9981 14.042 22.9994 14.0184 22.9998C14.0128 22.9999 14.0064 23 14 23Z" fill={color}/>
        </svg>
    );

}

DownOutline28.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
};

DownOutline28.defaultProps = {
    color: "#000000",
    size: 28
};

export default DownOutline28;