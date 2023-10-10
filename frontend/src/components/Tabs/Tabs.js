import Ripple from "../Ripple/Ripple";
import {createRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import { elementScrollIntoViewPolyfill } from "seamless-scroll-polyfill";

import "./tabs.css";
import useTheme from "../../hooks/useTheme";
import {CUPERTINO} from "../../consts/consts";
import Spacing from "../Spacing/Spacing";

const Tabs = ({ list, onChange }) => {

    elementScrollIntoViewPolyfill();

    const theme = useTheme();

    const activeRef = createRef();
    const none = createRef();

    const [selectedOption, setSelectedOption] = useState(0);
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const activeElement = activeRef.current;
        setOffset(activeElement.offsetLeft);
        setWidth(activeElement.clientWidth);
        activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // eslint-disable-next-line
    }, [selectedOption, activeRef]);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        onChange(value);
    }

    return(
        <nav className="material_horizontal">
            <Spacing mode={"horizontal"} size={16}/>
            <i
                className={"animate"}
                style={{ transform: `translateX(${offset}px)`, width: width - 32 }}
            />
            {list.map((item, index) => (
                <div
                    key={`radio_${index}`}
                    ref={selectedOption === index ? activeRef : none}
                    className={`material_horizontal_item ${selectedOption === index ? "active" : ""}`}
                    onClick={() => handleOptionChange(index)}
                >
                    { theme !== CUPERTINO && <Ripple borderRadius={"10px 10px 0 0"}/> }
                    <span className={"menu_horizontal_div_item_span"}>{ item }</span>
                </div>
            ))}
            <Spacing mode={"horizontal"} size={16}/>
        </nav>
    );

}

Tabs.propTypes = {
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Tabs;