import React from "react";
import classes from './Input.module.css';
const Input = (props) => {
    return <React.Fragment>
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    </React.Fragment>
}
export default Input;