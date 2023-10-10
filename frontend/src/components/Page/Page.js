import React, {Fragment, useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import { BackButton } from '@twa-dev/sdk/react';
import PropTypes from "prop-types";
import useColorTheme from "../../hooks/useColorTheme";
import useThemeParams from "../../hooks/useThemeParams";

const Page = ({ children, ...props }) => {

    const { header, body, isBack } = props;

    const { setHeaderColor, setBackgroundColor } = WebApp;

    const colorScheme = useColorTheme();

    const { bgColor, secondaryBgColor } = useThemeParams();

    useEffect(() => {
        const headerColor = header === "primary" ? bgColor : secondaryBgColor;
        const bodyColor = body === "primary" ? bgColor : secondaryBgColor;

        try {
            setBackgroundColor(bodyColor);
            setHeaderColor(headerColor);
        } catch (e) {
            console.error(e);
        }
        document.documentElement.style.setProperty("background", bodyColor);

        return () => {
            document.documentElement.style.removeProperty("background");
        };
        // eslint-disable-next-line
    }, [header, body, colorScheme]);

    return (
        <Fragment>
            { isBack && <BackButton onClick={() => window.history.back()} /> }
            {children}
        </Fragment>
    );
}

Page.propTypes = {
    header: PropTypes.oneOf(["primary", "secondary"]),
    body: PropTypes.oneOf(["primary", "secondary"]),
    isBack: PropTypes.bool
};

Page.defaultProps = {
    header: "primary",
    body: "primary",
    isBack: false
};

export default Page;