import React, {useEffect, useState} from 'react';
import ideaForm from "./ideaFormDataConf";
import Input from '../../components/UI/Forms/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './IdeaCreator.module.css'

import axios from "../../axios-conf";
import {connect} from 'react-redux';
import CategoryCreator from "../../components/CategoryCreator/CategoryCreator";
import * as actions from "../../store/actions/actionCreator";

const IdeaCreator = props => {
    const [formData, setFormData] = useState(ideaForm);
    const [isFormValid, setIsFormValid] = useState(false);
    const [datetime, setDatetime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const updatedFormData = {...formData};
        updatedFormData['category'].elementConfig.options.length = 0;
        props.cat.forEach(category => {
            updatedFormData['category'].elementConfig.options.push({
                value: category, displayValue: category
            });
            setFormData(updatedFormData);
        });
    }, [props.cat]);

    const inputChangedHandler = (event, inputId) => {
        const updatedContactData = {...formData};
        const updatedFormElement = {...updatedContactData[inputId]};
        updatedFormElement.value = event.target.value;
        if (updatedFormElement.validation) {
            updatedFormElement.valid = checkIsValid(event.target.value, updatedFormElement.validation);
            updatedFormElement.touched = true;
        }
        updatedContactData[inputId] = updatedFormElement;
        setFormData(updatedContactData);
        setIsFormValid(checkIsFormValid(updatedContactData));
    }

    /**
     * @author Vladimir Dabic
     * @param {object} updatedContactData
     * @description Checks if the form is valid. If not, the ORDER button will be disabled.
     */
    const checkIsFormValid = (updatedContactData) => {
        let valid = true;
        for (let key in updatedContactData) {
            if (!updatedContactData[key].valid) {
                valid = false;
                break;
            }
        }
        return valid;
    }

    /**
     * @author Vladimir Dabic
     * @param {string} value
     * @param {object} rules
     * @description Checks if some value is valid based on the given rules.
     */
    const checkIsValid = (value, rules) => {
        let isValid = true;
        if (rules.required && value.trim() === '') {
            isValid = false;
        }

        if (rules.minLength && value.length < rules.minLength) {
            isValid = false;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            isValid = false;
        }

        return isValid;
    }

    const formArray = [];
    Object.keys(formData).forEach(key => {
        formArray.push({
            disabled: formData[key].disabled,
            elementType: formData[key].elementType,
            elementConfig: formData[key].elementConfig,
            value: formData[key].value,
            valid: formData[key].valid,
            validation: formData[key].validation,
            touched: formData[key].touched,
            label: formData[key].label,
            id: key
        });
    });

    return (
        <div className={classes.IdeaCreator}>
            <CategoryCreator />
            <form>
                {
                    formArray.map(element => {
                        return <Input
                            disabled={element.disabled}
                            key={element.id}
                            elementType={element.elementType}
                            elementConfig={element.elementConfig}
                            value={element.value}
                            label={element.label}
                            changed={(event) => inputChangedHandler(event, element.id)}
                            valid={element.valid}
                            shouldValidate={element.validation}
                            touched={element.touched}/>
                    })
                }
                <Button buttonType="Success" disabled={!isFormValid}>CREATE IDEA</Button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cat: state.ids.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateCategory: (category) => dispatch(actions.createCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaCreator);
