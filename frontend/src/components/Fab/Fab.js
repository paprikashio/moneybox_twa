import "./fab.css";
import Ripple from "../Ripple/Ripple";
import {CUPERTINO} from "../../consts/consts";
import useTheme from "../../hooks/useTheme";
import PropTypes from "prop-types";
const Fab = ({ children, onClick }) => {

    const theme = useTheme();

    return(
        <div className={"fab"} onClick={onClick}>
            { theme !== CUPERTINO && <Ripple borderRadius={58}/> }
            { children }
        </div>
    );

}

Fab.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Fab;