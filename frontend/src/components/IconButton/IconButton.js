import "./icon_button.css";
import Ripple from "../Ripple/Ripple";
import useTheme from "../../hooks/useTheme";
import {CUPERTINO} from "../../consts/consts";
import PropTypes from "prop-types";
const IconButton = ({ children, onClick }) => {

    const theme = useTheme();

    return(
        <div className={"icon_button"} onClick={onClick}>
            { theme !== CUPERTINO ? <Ripple borderRadius={"50%"}/> : null }
            { children }
        </div>
    );

}

IconButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default IconButton;