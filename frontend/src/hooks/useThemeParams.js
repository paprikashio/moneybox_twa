import {useContext} from "react";
import {ConfigContext} from "../components/ConfigProvider/ConfigProvider";

const useThemeParams = () => {

    const { themeParams } = useContext(ConfigContext);

    return {
        bgColor: themeParams.bg_color,
        textColor: themeParams.text_color,
        hintColor: themeParams.hint_color,
        linkColor: themeParams.link_color,
        buttonColor: themeParams.button_color,
        buttonTextColor: themeParams.button_text_color,
        secondaryBgColor: themeParams.secondary_bg_color,
        all: themeParams
    };

}

export default useThemeParams;