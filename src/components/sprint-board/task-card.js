import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskCard extends Component {
    static propsTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        task: PropTypes.array.isRequired,
    };

    render() {
        const { id, name } = this.props;

        return <div>{`${id}: ${name}`}</div>;
    }
}

export default TaskCard;
