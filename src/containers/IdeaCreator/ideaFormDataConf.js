const formData = {
    id: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ''
        },
        value: 'Bad Boys',
        label: 'Idea No.',
        disabled: true,
        validation: {},
        valid: true,
        touched: true
    },
    datetime: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ''
        },
        value: 'Bad Boys',
        label: 'Date&Time',
        disabled: true,
        validation: {},
        valid: true,
        touched: true
    },
    title: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Title'
        },
        value: '',
        validation: {
            required: true,
            maxLength: 7
        },
        label: 'Idea Title',
        valid: false,
        touched: false
    },
    desc: {
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            placeholder: 'Description'
        },
        value: '',
        validation: {
            required: true
        },

        label: 'Idea Description',
        valid: false,
        touched: false
    },
    rating: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Rating 1-10'
        },
        value: '',
        validation: {
            required: true,
            number: true,
            maxValue: 10,
            minValue: 1
        },

        label: 'Idea Rating',
        valid: false,
        touched: false
    },
    category: {
        elementType: 'select',
        elementConfig: {
            options: []
        },
        label: 'Select a Category',
        value: 'fastest',
        valid: true
    },
    goal: {
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            placeholder: 'Goal'
        },
        label: 'Idea Goal',
        value: '',
        validation: {
            required: true,
            number: true
        },
        valid: false,
        touched: false
    },
}

export default formData;
