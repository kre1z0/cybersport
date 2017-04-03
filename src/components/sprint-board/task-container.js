import React, {Component, PropTypes} from 'react';

import TaskCard from './task-card';

class TaskContainer extends Component {
    static propsTypes = {
        title: PropTypes.string.isRequired,
        titleColor: PropTypes.string,
        tasks: PropTypes.array
    };
    
    render () {
        const {tasks} = this.props;
        
        return (
            <div>
                {tasks.map(task => <TaskCard {...task}/>)}
            </div>
        )
    }
}

export default TaskContainer;
