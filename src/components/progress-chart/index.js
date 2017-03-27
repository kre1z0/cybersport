import React from 'react';
import './ProgressChart.css';

const ProgressChart = ({value, month}) => (

    <div className="progress-chart">
        <svg width="300" height="300">
            <path d="M20,150a130,130 0 1,0 260,0a130,130 0 1,0 -260,0"
                  fill="transparent"
                  stroke='#d7dce0'
                  strokeWidth="26"
                  strokeLinecap="round"
            >
            </path>
            <path d="M20,150a130,130 0 1,0 260,0a130,130 0 1,0 -260,0"
                  fill="transparent"
                  stroke='#64c76c'
                  strokeDasharray="887"
                  strokeWidth="26"
                  strokeDashoffset={887 - value*8.15}
                  strokeLinecap="round"
                  className="plan-chart"
            >
            </path>
        </svg>
        <div className="content">
            <h1 className="title">{value}%</h1>
            <h3 className="sub-title">выполнения плана на {month}</h3>
        </div>
    </div>

);

export default ProgressChart;