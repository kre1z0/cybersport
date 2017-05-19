import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskContainer from './task-container';

import { macaroniAndCheese, coolGrayTwo, softGreen } from '../../assets/theme';

const colorMap = {
    1: coolGrayTwo,
    2: macaroniAndCheese,
    3: softGreen,
};

class SprintBoard extends Component {
    static propTypes = {
        taskStatuses: PropTypes.array,
        tasks: PropTypes.array,
    };

    render() {
        const { taskStatuses, tasks } = this.props;
        return (
            <div className="sprint-board">
                {taskStatuses.map((status, i) => (
                    <TaskContainer
                        title={status}
                        titleColor={colorMap[i]}
                        tasks={tasks.filter(task => task.status === status)}
                    />
                ))}
            </div>
        );
    }
}

export default SprintBoard;
