import "./textarea.css";
import {useLayoutEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
const Textarea = ({ after, label, placeholder, onChange, value, rows }) => {

    const textBox = useRef(null);

    const [focus, setFocus] = useState(false);

    const updateAreaHeight = () => {
        textBox.current.style.height = "inherit";
        textBox.current.style.height = `${textBox.current.scrollHeight}px`;
    }

    useLayoutEffect(updateAreaHeight, []);

    function handleKeyDown(e) {
        updateAreaHeight();
        onChange(e);
    }

    return(
        <div className={"form_item"}>
            { label && <div className={"label"}>{ label }</div> }
            <div className={"form_field form_span"}>
                <textarea
                    ref={textBox}
                    placeholder={placeholder}
                    rows={rows}
                    value={value}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={handleKeyDown}
                />
                { after && <div className={"after_element"}>{ after }</div> }
                <div aria-hidden="true" className={`form_border ${focus ? "active" : ""}`}></div>
            </div>
        </div>
    );

}

Textarea.propTypes = {
    after: PropTypes.node,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

Textarea.defaultProps = {
    rows: 3
};

export default Textarea;