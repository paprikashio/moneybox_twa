import useDate from "../../hooks/useDate";
import PropTypes from "prop-types";

const DateName = ({date, needTime}) => {

    return useDate(date, needTime);

}

DateName.propTypes = {
    date: PropTypes.number.isRequired,
    needTime: PropTypes.bool
};

DateName.defaultProps = {
    needTime: false,
};

export default DateName;