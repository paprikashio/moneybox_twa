import useColorTheme from "../hooks/useColorTheme";
import useTheme from "../hooks/useTheme";
import useThemeParams from "../hooks/useThemeParams";
import useUser from "../hooks/useUser";
import {useTranslation} from "react-i18next";
import Page from "../components/Page/Page";

const Test = () => {

    const colorTheme = useColorTheme();

    const theme = useTheme();

    const { bgColor, textColor, hintColor, linkColor, buttonColor, buttonTextColor, secondaryBgColor } = useThemeParams();

    const { languageCode } = useUser();

    const { t } = useTranslation();

    return(
       <Page>
           <button>Test</button>
           <div>{ t("key_1") }</div>
           <div>Color theme: { colorTheme }</div>
           <div>Theme: { theme }</div>
           <div>Bg: { bgColor }</div>
           <div style={{ width: 40, height: 40, background: bgColor }}></div>
           <div>Text color: { textColor }</div>
           <div style={{ width: 40, height: 40, background: textColor }}></div>
           <div>Hint color: { hintColor }</div>
           <div style={{ width: 40, height: 40, background: hintColor }}></div>
           <div>Link color: { linkColor }</div>
           <div style={{ width: 40, height: 40, background: linkColor }}></div>
           <div>Button color: { buttonColor }</div>
           <div style={{ width: 40, height: 40, background: buttonColor }}></div>
           <div>Button text color: { buttonTextColor }</div>
           <div style={{ width: 40, height: 40, background: buttonTextColor }}></div>
           <div>Secondary bg color: { secondaryBgColor }</div>
           <div style={{ width: 40, height: 40, background: secondaryBgColor }}></div>
           <div>User language: { languageCode }</div>
       </Page>
    );

}

export default Test;