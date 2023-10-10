import "./placeholder.css";
import PropTypes from "prop-types";
import {useLottie} from "lottie-react";
import Headline from "../Typography/Headline/Headline";
import Text from "../Typography/Text/Text";
import Spacing from "../Spacing/Spacing";
import diamondAnimation from "../../assets/animations/diamond.json";
import eggAnimation from "../../assets/animations/egg.json";
import clockAnimation from "../../assets/animations/clock.json";
import successAnimation from "../../assets/animations/success.json";
const Placeholder = ({ top, title, description, animation }) => {

    const options = {
        animationData: animation === "egg"
            ? eggAnimation
            : animation === "diamond"
                ? diamondAnimation
                : animation === "clock"
                    ? clockAnimation
                    : successAnimation,
        loop: true
    };

    const { View } = useLottie(options);

    return(
        <div
            className={"placeholder"}
            style={{ height: `calc(100vh - ${top}px)` }}

        >
            <div className={"animation_container"}>
                { View }
            </div>
            <Spacing size={16}/>
            <Headline>{ title }</Headline>
            <Spacing size={8}/>
            <Text mode={"secondary"}>{ description }</Text>
        </div>
    );

}

Placeholder.propTypes = {
    top: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    animation: PropTypes.oneOf(["egg", "diamond", "clock", "success"])
};

Placeholder.defaultProps = {
    top: 0,
    animation: "egg"
};

export default Placeholder;