import React, {Fragment, useEffect, useState} from "react";
import "./bottom_sheet.css";
import DismissButton from "../DismissButton/DismissButton";
import PropTypes from "prop-types";
import Headline from "../Typography/Headline/Headline";
import {useElementSize} from "usehooks-ts";

const BottomSheet = ({ isVisible, onClose, children, title }) => {

    const [contentRef, { height }] = useElementSize()

    const [sheetHeight, setSheetHeight] = useState(0);

    useEffect(() => {
        if (isVisible) {
            setSheetHeight(height);
        }
        // eslint-disable-next-line
    }, [isVisible]);

    return (
        <Fragment>
            <div className="sheet" aria-hidden={!isVisible}>
                <div className="contents" style={{ height: `${sheetHeight}px` }}>
                    <div ref={contentRef}>
                        <div className={"sheet_header"}>
                            <Headline>{ title }</Headline>
                            <DismissButton onClick={onClose}/>
                        </div>
                        { children }
                    </div>
                </div>
                <div className="overlay" onClick={onClose}></div>
            </div>
        </Fragment>
    );
};

BottomSheet.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
};

BottomSheet.defaultProps = {
    isVisible: false
};

export default BottomSheet;