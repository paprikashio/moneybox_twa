import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

const useDate = (date, needTime = null) => {

    const { t } = useTranslation();

    const [name, setName] = useState("-");

    useEffect(() => {
        const getMonthName = (month) => {
            switch (month) {
                case 0 :
                    return t("key_15");
                case 1 :
                    return t("key_16");
                case 2 :
                    return t("key_17");
                case 3 :
                    return t("key_18");
                case 4 :
                    return t("key_19");
                case 5 :
                    return t("key_20");
                case 6 :
                    return t("key_21");
                case 7 :
                    return t("key_22");
                case 8 :
                    return t("key_23");
                case 9 :
                    return t("key_24");
                case 10 :
                    return t("key_25");
                case 11 :
                    return t("key_26");
                default:
                    return "?"
            }
        }
        const dateObject = new Date(date * 1000);
        const monthName  = getMonthName(dateObject.getMonth());
        const day = dateObject.getDate();
        const year = dateObject.getFullYear();
        if (!needTime) {
            setName(`${day} ${monthName}, ${year}`);
        } else {
            let hours = dateObject.getHours();
            let minutes = dateObject.getMinutes();
            let seconds = dateObject.getSeconds();
            hours = hours < 10 ? `0${hours}` : hours;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            setName(`${day} ${monthName}, ${year} ${hours}:${minutes}:${seconds}`);
        }
        // eslint-disable-next-line
    }, []);

    return name;
}

export default useDate;