import "./input.css";
import {Fragment, useState} from "react";
import PropTypes from "prop-types";
import Subtitle from "../../Typography/Subtitle/Subtitle";
import Spacing from "../../Spacing/Spacing";
const Input = ({ after, label, placeholder, onChange, value, autoFocus, type, hint }) => {

    const [focus, setFocus] = useState(false);

    return(
        <div className={"form_item"}>
            { label && <div className={"label"}>{ label }</div> }
            <div className={"form_field form_span"}>
                <input
                    type={type}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    value={value}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={onChange}
                />
                { after && <div className={"after_element"}>{ after }</div> }
                <div aria-hidden="true" className={`form_border ${focus ? "active" : ""}`}></div>
            </div>
            { hint && <Fragment>
                <Spacing size={8}/>
                <Subtitle>{ hint }</Subtitle>
            </Fragment> }
        </div>
    );

}

Input.propTypes = {
    after: PropTypes.node,
    label: PropTypes.string,
    hint: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    autoFocus: PropTypes.bool,
    type: PropTypes.oneOf(["text", "number"]),
    onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
    autoFocus: false,
    type: "text"
};

export default Input;