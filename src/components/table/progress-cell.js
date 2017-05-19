import React from 'react';
import './progress-cell.scss';
import { softGreen, limeGreen, dustyOrange } from '../../assets/theme';

const ColorSwitcher = percent => {
    if (percent >= 75) return softGreen;
    else if (percent >= 25) return limeGreen;
    else return dustyOrange;
};

const ProgressCell = ({ rowIndex, percent, ...props }) => {
    return (
        <div className="cell">
            <div className="plan-progress-bar">
                <div
                    style={{
                        width: `${percent}%`,
                        backgroundColor: ColorSwitcher(percent),
                    }}
                    className="plan-progress-bar-percent"
                />
            </div>
            <div className="plan-progress-bar-label">
                {`${percent}%`}
            </div>
        </div>
    );
};

export default ProgressCell;
