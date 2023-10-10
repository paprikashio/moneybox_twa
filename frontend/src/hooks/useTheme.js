import {useContext} from "react";
import {ConfigContext} from "../components/ConfigProvider/ConfigProvider";

const useTheme = () => {

    const { theme } = useContext(ConfigContext);

    return theme;
}

export default useTheme;