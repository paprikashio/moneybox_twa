import {useContext} from "react";
import {ConfigContext} from "../components/ConfigProvider/ConfigProvider";

const useColorTheme = () => {

    const { colorScheme } = useContext(ConfigContext);

    return colorScheme;
}

export default useColorTheme;