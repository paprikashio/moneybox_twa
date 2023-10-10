import Subtitle from "../Typography/Subtitle/Subtitle";
import Text from "../Typography/Text/Text";
import "./summary.css";
import PropTypes from "prop-types";

const Summary = ({ name, cost }) => {

    return(
        <div className={"summary"}>
            <Subtitle>{ name }</Subtitle>
            <Text>{ cost } TON</Text>
        </div>
    );

}

Summary.propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
};

export default Summary;