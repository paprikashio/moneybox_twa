import { Fragment } from "react";
import PropTypes from "prop-types";
import useTheme from "../../hooks/useTheme";
import {CUPERTINO} from "../../consts/consts";
import Header from "../Header/Header";
import "./container.css";
const Container = ({ children, mode, rounded, title, action, forwardRef }) => {

    const theme = useTheme();

    const header = <Fragment>
        <Header title={!title ? "" : title} action={action}/>
    </Fragment>;

    return(
        <Fragment>
            { theme === CUPERTINO && title ? header : null}
            <div
                ref={forwardRef}
                className={mode === "primary"
                    ? "container_primary"
                    : "container_secondary"
                }
                style={{
                    borderRadius: theme === CUPERTINO && rounded ? 14 : 0
                }}
            >
                { theme !== CUPERTINO && title ? header : null }
                { children }
            </div>
        </Fragment>
    );

}

Container.propTypes = {
    mode: PropTypes.oneOf(["primary", "secondary"]),
    rounded: PropTypes.bool,
    title: PropTypes.string,
    action: PropTypes.node,
    forwardRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
};

Container.defaultProps = {
    mode: "primary",
    rounded: true
};

export default Container;