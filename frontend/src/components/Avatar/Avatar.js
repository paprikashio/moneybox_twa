import "./avatar.css";
import PropTypes from "prop-types";
const Avatar = ({ src, color, children, size, onClick }) => {

    const clickHandle = () => {
        if (onClick) {
            onClick();
        }
    }

    return(
        <div
            className={"avatar"}
            style={{
                background: color ? color : "auto",
                width: size,
                height: size
            }}
            onClick={clickHandle}
        >
            { src && <img className={"image_overlay"} src={src} alt={""}/> }
            { children }
        </div>
    );

}

Avatar.propTypes = {
    src: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

Avatar.defaultProps = {
    size: 46
};

export default Avatar;