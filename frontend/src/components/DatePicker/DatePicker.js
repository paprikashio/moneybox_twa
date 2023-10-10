import {DayPicker} from "react-day-picker";
import { enUS, ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import "./date_picker.css";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const DatePicker = ({ value, onChange }) => {

    const { i18n } = useTranslation();

    return(
        <DayPicker
            mode="single"
            selected={value}
            locale={i18n.language === "ru" ? ru : enUS}
            onSelect={onChange}
        />
    );

}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired
};

export default DatePicker;