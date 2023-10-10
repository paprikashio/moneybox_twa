import "./button.css";
import useTheme from "../../hooks/useTheme";
import {CUPERTINO} from "../../consts/consts";
import Ripple from "../Ripple/Ripple";
import PropTypes from "prop-types";
import Spacing from "../Spacing/Spacing";
const Button = ({ onClick, children, before }) => {

    const theme = useTheme();

    return(
        <button className={"btn btn-color-primary"} onClick={onClick}>
            { theme !== CUPERTINO ? <Ripple borderRadius={8}/> : null }
            { before } { before && <Spacing size={8} mode={"horizontal"}/> } { children }
        </button>
    );

}

Button.propTypes = {
    before: PropTypes.node,
    onClick: PropTypes.func.isRequired
};

export default Button;