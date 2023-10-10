import {useEffect, useState, createContext, useMemo} from "react";
import WebApp from "@twa-dev/sdk";
import {useTranslation} from "react-i18next";
import {CUPERTINO, DEFAULT_LANGUAGE, MATERIAL} from "../../consts/consts";

const getThemeByProvider = (platform) => {
    if (platform) {
        return platform === "macos" || platform === "ios" ? CUPERTINO : MATERIAL;
    }
    if (navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i)) {
        return CUPERTINO;
    } else {
        return MATERIAL;
    }
}

const getDefaultUser = () => {
    return {
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        languageCode: undefined,
        allowsWriteToPm: undefined
    }
}

export const ConfigContext = createContext({
    colorScheme: WebApp.colorScheme,
    theme: getThemeByProvider(WebApp.platform),
    platform: WebApp.platform,
    themeParams: WebApp.themeParams,
    user: WebApp.initDataUnsafe.user,
    webAppInstance: WebApp
});

export const ConfigProvider = ({ children }) => {

    const { i18n } = useTranslation();

    const [colorScheme, setColorScheme] = useState(WebApp.colorScheme);

    const platform = WebApp.platform;

    const themeParams = WebApp.themeParams;

    const user = WebApp.initDataUnsafe.user || getDefaultUser();

    const webAppInstance = WebApp;

    useEffect(() => {
        const onChange = () => {
            setColorScheme(WebApp.colorScheme);
        };
        WebApp.onEvent("themeChanged", onChange);
        return () => {
            WebApp.offEvent("themeChanged", onChange);
        };
    }, []);

    useEffect(() => {
        document.body.setAttribute("data-color-scheme", colorScheme);
        document.body.setAttribute("data-theme", theme);
        // eslint-disable-next-line
    }, [colorScheme]);

    useEffect(() => {
        console.log(user);
        i18n.changeLanguage(!user ? DEFAULT_LANGUAGE : user.language_code);
        // eslint-disable-next-line
    }, [user]);

    const theme = useMemo(() => {
        return getThemeByProvider(platform);
    }, [platform]);

    const value = useMemo(() => {
        return {
            platform,
            theme,
            colorScheme,
            themeParams,
            user,
            webAppInstance
        };
    }, [colorScheme, theme, platform, themeParams, user, webAppInstance]);

    return (
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    );
}