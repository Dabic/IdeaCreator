import React, {useState} from 'react';
import Input from "../UI/Forms/Input/Input";
import Button from "../UI/Button/Button";
import classes from './CategoryCreator.module.css'
import axios from "../../axios-conf";
import {connect} from 'react-redux';
import * as actions from "../../store/actions/actionCreator";

const CategoryCreator = props => {

    const [categoryForm, setCategoryForm] = useState({
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Category Name'
        },
        validation: true,
        value: '',
        valid: false,
        touched: false
    });

    const [isFormValid, setIsFormValid] = useState(false);


    const onChangeHandler = (event) => {
        const updatedCategory = {...categoryForm};
        updatedCategory.value = event.target.value;
        updatedCategory.touched = true;
        updatedCategory.valid = (event.target.value.length > 2 && event.target.value.length < 10) || event.target.value.length === 0;
        setIsFormValid(event.target.value.length > 2 && event.target.value.length < 10);
        setCategoryForm(updatedCategory);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onCreateCategory({name: categoryForm.value});
    }

    return (
        <div className={classes.CategoryCreator}>
            <span className={classes.Placeholder}>Create a Category</span>
            <form className={classes.Form}>
                <Input
                    elementType={categoryForm.elementType}
                    elementConfig={categoryForm.elementConfig}
                    valid={categoryForm.valid}
                    value={categoryForm.value}
                    shouldValidate={categoryForm.validation}
                    touched={categoryForm.touched}
                    changed={(event) => onChangeHandler(event)}/>

                <Button buttonType={'Success'} disabled={!isFormValid} buttonClicked={onSubmit}>CREATE</Button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ids: state.ids.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateCategory: (category) => dispatch(actions.createCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreator);
