import PropTypes from "prop-types";
import "./action_link.css";

const ActionLink = ({ title, onClick, destructive }) => {

    return(
        <div className={`action_link ${destructive ? "destructive" : ""}`} onClick={onClick}>
            { title }
        </div>
    );

}

ActionLink.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    destructive: PropTypes.bool
};

ActionLink.defaultProps = {
    destructive: false
};

export default ActionLink;