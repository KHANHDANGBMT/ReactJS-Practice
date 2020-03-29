import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    let inputClasses = "InputElement";
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses = inputClasses + " " + "Invalid";
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}></input>
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}></textarea>
            break;
        case ('select'):
            inputElement = <select
                className={inputClasses}
                {...props.elementConfig}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            break;
        default: inputElement = <input
            className={inputClasses}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}></input>
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input; 