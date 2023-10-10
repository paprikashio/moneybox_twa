import React, { useState, useEffect } from "react";
import "./ripple.css";
import PropTypes from "prop-types";
const Ripple = ({ borderRadius }) => {

    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 400);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return(
        <div
            className={"ripple-container"}
            style={{ borderRadius: borderRadius }}
            onClick={e => {
                const rect = e.target.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
        >
            {isRippling ? (
                <div
                    className={"touch"}
                    style={{
                        left: coords.x,
                        top: coords.y
                    }}
                />
            ) : (
                ''
            )}
        </div>
    );

}

Ripple.propTypes = {
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

Ripple.defaultProps = {
    borderRadius: 0
};

export default Ripple;