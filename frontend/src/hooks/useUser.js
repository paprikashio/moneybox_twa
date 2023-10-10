import {useContext} from "react";
import {ConfigContext} from "../components/ConfigProvider/ConfigProvider";

const useUser = () => {

    const { user } = useContext(ConfigContext);

    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        languageCode: user.language_code,
        allowsWriteToPm: user.allows_write_to_pm
    };

}

export default useUser;