import {RouterProvider} from "react-router-dom";
import {router} from "./navigation/router";
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {manifestUrl} from "./consts/config";
import useColorTheme from "./hooks/useColorTheme";
import {useTranslation} from "react-i18next";

const App = () => {

    const theme = useColorTheme();

    const { i18n } = useTranslation();

    return(
        <TonConnectUIProvider
            restoreConnection={true}
            language={i18n.language === "ru" ? "ru" : "en"}
            manifestUrl={manifestUrl}
            uiPreferences={{ theme: theme === "dark" ? THEME.DARK : THEME.LIGHT }}
        >
            <RouterProvider router={router} />
        </TonConnectUIProvider>
    );

}

export default App;