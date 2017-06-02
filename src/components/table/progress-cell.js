import React from 'react';
import './progress-cell.scss';
import { softGreen, limeGreen, dustyOrange } from '../../assets/theme';

const getColor = percent => {
    if (percent >= 75) return softGreen;
    else if (percent >= 25) return limeGreen;
    else return dustyOrange;
};

const ProgressCell = ({ value = 0 }) => {
    return (
        <div className="cell">
            <div className="plan-progress-bar">
                <div
                    style={{
                        width: `${value}%`,
                        backgroundColor: getColor(value),
                    }}
                    className="plan-progress-bar-percent"
                />
            </div>
            <div className="plan-progress-bar-label">
                {`${value}%`}
            </div>
        </div>
    );
};

export default ProgressCell;
