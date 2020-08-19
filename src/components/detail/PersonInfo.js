import React from "react";
import style from "./PersonInfo.module.css";
import CloseButton from "./CloseButton";

const PersonInfo = props => (
    <div className={style.personInfo}>
        <CloseButton click={props.closeHandler} > Close </CloseButton>
        <h1>{props.activePerson.firstName + ' ' + props.activePerson.lastName}</h1>
        <div className={style.info}>Email: {props.activePerson.email}</div>
        <div className={style.info}>Age: {props.activePerson.age}</div>
        <div className={style.info}>Phone: {props.activePerson.phone}</div>
        <div className={style.info}>Balance: {props.activePerson.balance}</div>
        <div className={style.info}>Company: {props.activePerson.company}</div>
        <div className={style.info}>{props.activePerson.about}</div>
    </div>
)

export default PersonInfo