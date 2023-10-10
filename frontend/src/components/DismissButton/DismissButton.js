import Dismiss24 from "../Icons/Dismiss24";
import PropTypes from "prop-types";
import "./dismiss_button.css";

const DismissButton = ({ onClick }) => {

    return(
        <div className={"dismiss_button"} onClick={onClick}>
            <Dismiss24 size={28} color={"var(--tg-theme-link-color)"}/>
        </div>
    );

}

DismissButton.propTypes = {
    onClick: PropTypes.func
};

export default DismissButton;