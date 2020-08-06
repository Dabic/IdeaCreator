import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actionCreator';

const IdeaViewer = props => {
    useEffect(() => {
        props.onFetchIdeas();
        props.onFetchCategories();
    }, [])
    return (
        <div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        ids: state.ids.ideas
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchIdeas: () => dispatch(actions.fetchIdeas()),
        onFetchCategories: () => dispatch(actions.fetchCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaViewer);
