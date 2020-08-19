import React from "react";
import style from './PersonInfo.module.css'

const CloseButton = (props) =>(
    <button className={style.closeButton} onClick={props.click}>
        Close
    </button>
)

export default CloseButton
