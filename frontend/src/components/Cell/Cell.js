import "./cell.css";
import PropTypes from "prop-types";
import useTheme from "../../hooks/useTheme";
import {CUPERTINO} from "../../consts/consts";
import Ripple from "../Ripple/Ripple";
import Spacing from "../Spacing/Spacing";
import {Fragment} from "react";
const Cell = ({ before, title, subtitle, after, onClick }) => {

    const theme = useTheme();

    const clickHandle = () => {
        if (onClick) {
            onClick();
        }
    }

    return(
        <Fragment>
            <div className={`cell ${!onClick ? "disabled" : ""}`} onClick={clickHandle}>
                <Spacing size={16} mode={"horizontal"}/>
                { theme !== CUPERTINO && onClick ? <Ripple/> : null }
                { before &&
                    <div className={"cell_before"}>
                        { before }
                    </div>
                }
                <div className={"cell_row"}>
                    <div className={"cell_body"}>
                        { title }
                        { subtitle }
                    </div>
                    { after &&
                        <div className={"after"}>
                            { after }
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    );

}

Cell.propTypes = {
    before: PropTypes.node,
    after: PropTypes.node,
    subtitle: PropTypes.node,
    title: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default Cell;