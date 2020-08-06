import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classes from './ShowMoreText.module.css'

const ShowMoreText = props => {

    const [mode, setMode] = useState('Show less');
    const [text, setText] = useState(props.children);
    const elementRef = useRef(null);

    useEffect(() => {
        calculateNewText(mode);
        setMode('Show more')
    }, [elementRef.current])


    const calculateNewText = (mode) => {
        if (mode === 'Show more') {
            const newLength = text.length / Math.round(getLinesCount(text)) - 3;
            setText(text.substring(0, newLength) + '...');
        } else {
            setText(props.children);
        }
    }

    const onButtonClicked = () => {
        if (mode === 'Show more') {
            setMode('Show less');
            calculateNewText('Show less');
        } else {
            setMode('Show more');
            calculateNewText('Show more');
        }
    }

    const getLinesCount = (text) => {
        return elementRef.current.offsetHeight/20;
    }

    return (
        <div className={classes.ShowMoreText}>
            <div className={classes.Text} ref={elementRef}>
                {text}
                <div onClick={onButtonClicked} className={classes.Button}>{mode}</div>
            </div>

        </div>
    );
};

ShowMoreText.propTypes = {};

export default ShowMoreText;
