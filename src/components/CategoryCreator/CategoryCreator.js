import React, {useState} from 'react';
import Input from "../UI/Forms/Input/Input";
import Button from "../UI/Button/Button";
import classes from './CategoryCreator.module.css'
import axios from "../../axios-conf";

const CategoryCreator = () => {

    const [categoryForm, setCategoryForm] = useState({
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Category Name'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    });

    const onChangeHandler = (event) => {
        const updatedCategory = {...categoryForm};
        updatedCategory.value = event.target.value;
        setCategoryForm(updatedCategory);
    }

    const onSubmit = () => {
        axios.post('category.json', {name: categoryForm.value})
            .then(response => {

            })
    }

    return (
        <div className={classes.CategoryCreator}>
            <form>
                <Input
                    elementType={categoryForm.elementType}
                    elementConfig={categoryForm.elementConfig}
                    valid={categoryForm.valid}
                    value={categoryForm.value}
                    shouldValidate={categoryForm.validation}
                    touched={categoryForm.touched}
                    changed={(event) => onChangeHandler(event)}/>
            </form>

            <Button buttonType={'Success'} buttonClicked={onSubmit}>Create</Button>
        </div>
    );
};

export default CategoryCreator;
