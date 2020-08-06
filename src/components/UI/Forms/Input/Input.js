import React from 'react';
import PropTypes, {element} from 'prop-types';
import classes from './Input.module.css'

const Input = props => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (!props.valid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case 'input':
            inputElement = <input
                disabled={props.disabled}
                onChange={props.changed}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}/>
            break;
        case 'textarea':
            inputElement = <textarea
                onChange={props.changed}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}/>
            break;
        case 'select':
            inputElement = (
                <select
                    onChange={props.changed}
                    className={inputClasses.join(' ')}
                    value={props.value}>
                    {
                        props.elementConfig.options.map(option => {
                            return <option key={option.value} value={option.value}>{option.displayValue}</option>
                        })
                    }
                </select>
            );
            break;
        default:
            inputElement = <input
                onChange={props.changed}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}/>
            break;
    }

    return (
        <div className={classes.Input}>
            {props.label && <label className={classes.Label}>{props.label}</label>}
            {inputElement}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    elementType: PropTypes.string.isRequired,
    elementConfig: PropTypes.object,
    value: PropTypes.string,
    changed: PropTypes.func.isRequired,
    valid: PropTypes.bool,
    touched: PropTypes.bool
};

export default Input;
