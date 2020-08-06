import React from 'react';
import PropTypes from 'prop-types';
import classes from './IdeaCard.module.css'
import ShowMoreText from "../UI/ShowMoreText/ShowMoreText";

const IdeaCard = props => {

    let cardClasses = [classes.IdeaCard];

    switch (props.idea.category) {
        case 'Personal Life':
            cardClasses.push(classes.IdeaCardPersonal);
            break;
        case 'Work':
            cardClasses.push(classes.IdeaCardWork);
            break;
        case 'Education':
            cardClasses.push(classes.IdeaCardEdu);
            break;
        case 'Fun':
            cardClasses.push(classes.IdeaCardFun);
            break;
        case 'Trip':
            cardClasses.push(classes.IdeaCardTrip);
            break;
        case 'Other':
            cardClasses.push(classes.IdeaCardOther);
            break;
        default:
            cardClasses.push(classes.IdeaCardOther);
            break;
    }

    return (
        <div className={cardClasses.join(' ')}>
            <div className={classes.CardHeader}>
                {props.idea.category}
            </div>
            <div className={classes.CardFooter}>
                <div className={classes.CardContent}>
                    <span className={classes.CardTitle}>{props.idea.title}
                        <span className={classes.CardRating}>
                            Rating: ({props.idea.rating}/10)
                        </span>
                    </span>
                    <ShowMoreText>
                        {props.idea.desc}
                    </ShowMoreText>
                </div>
            </div>
        </div>
    );
};

IdeaCard.propTypes = {
    idea: PropTypes.shape({
        id: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    })
};

export default IdeaCard;
