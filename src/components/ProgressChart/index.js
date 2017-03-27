import React from 'react';
import './ProgressChart.css';

const ProgressChart = ({value, month}) => (

        <div className="progress-chart">
            <div className="content">
                <h1 className="title">{value}%</h1>
                <h3 className="sub-title">выполнения плана на {month}</h3>
            </div>
        </div>

);

export default ProgressChart;