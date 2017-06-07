import React, { Component } from 'react';

import { darkGrey, softGreen } from '../../assets/theme';
import ModalWindow from '../../components/modal-window';
import RoundedButton from '../../components/button/rounded-button';
import DateInput from '../../components/noMUI/date-input';

import './plan-window.scss';

const buttonStyle = {
    width: 110,
    margin: 0,
    boxShadow: 'none',
    border: '1px solid #e6ebf0',
};

const labelButtonStyle = {
    padding: '0',
    textTransform: 'none',
    color: darkGrey,
    fontWeight: 500,
};

const Actions = (
    <div className="ggwp">
        <RoundedButton
            style={buttonStyle}
            labelStyle={labelButtonStyle}
            label="Отменить"
        />
    </div>
);

const actionsContainerStyle = {
    padding: 20,
    borderTop: 'none',
    textAlign: 'center',
};

class PlanWindow extends Component {
    state = {
        loader: false,
    };

    click = () => {
        const { onApply } = this.props;
        const { start, end } = this.state;

        onApply(start, end);
        this.setState(state => ({
            loader: true,
        }));
    };

    onChange = field => value => {
        if (value) {
            this.setState(state => ({
                [field]: value,
            }));
        }
    };

    componentWillReceiveProps({ open }) {
        if (!open && this.props.open) {
            this.setState(state => ({
                loader: false,
                start: null,
                end: null,
            }));
        }
    }

    render() {
        const { open, onRequestClose, progress } = this.props;
        const { loader, start, end } = this.state;
        return (
            <ModalWindow
                actions={Actions}
                actionsContainerStyle={actionsContainerStyle}
                contentClassName="plan-calculate-modal"
                open={open}
                onRequestClose={onRequestClose}
            >
                <div className="plan-calculate-modal-conent">
                    <div
                        className="plan-progress-chart"
                        onTouchTap={this.click}
                    >
                        <svg width="300" height="300">
                            <path
                                d="M20,150a130,130 0 1,0 260,0a130,130 0 1,0 -260,0"
                                fill="transparent"
                                stroke="#d7dce0"
                                strokeWidth="26"
                                strokeLinecap="round"
                            />
                            <path
                                d="M20,150a130,130 0 1,0 260,0a130,130 0 1,0 -260,0"
                                fill="transparent"
                                stroke={softGreen}
                                strokeDasharray="887"
                                strokeWidth="26"
                                strokeDashoffset={887 + progress * 8.87 + 30}
                                strokeLinecap="round"
                                className="plan-progress-chart-path"
                            />
                        </svg>
                        <div className="content">
                            {loader
                                ? <div>
                                      <h1 className="title">
                                          {progress}%
                                      </h1>
                                      <h3 className="sub-title">идет расчет</h3>
                                  </div>
                                : <h3 className="default-title">
                                      сформировать план
                                  </h3>}
                        </div>
                    </div>
                    <div className="date-block">
                        <div className="date-block-label">
                            Период:
                        </div>
                        <div className="date-block-content">
                            <DateInput
                                libProps={{
                                    popoverAttachment: 'bottom left',
                                    popoverTargetAttachment: 'top left',
                                    popoverTargetOffset: '10px -25px',
                                }}
                                value={start}
                                onChange={this.onChange('start')}
                            />
                            <DateInput
                                libProps={{
                                    popoverAttachment: 'bottom center',
                                    popoverTargetAttachment: 'top center',
                                    popoverTargetOffset: '10px -15px',
                                }}
                                value={end}
                                onChange={this.onChange('end')}
                            />
                        </div>
                    </div>
                </div>
            </ModalWindow>
        );
    }
}

export default PlanWindow;
