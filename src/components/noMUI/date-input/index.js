import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import cn from 'classnames';
import CalendarIcon from '../../icons/calendar';
import Close from '../../icons/close-map-popup';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './DateInput.scss';

class DateInput extends Component {
    state = {
        displayedDate: '',
    };

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        value: null,
    };

    handleChange = ({ target }) => {
        const { onChange } = this.props;
        const v = target.value;
        let displayedDate = null;

        if (v.length > 10 || isNaN(v.replace('.', '') * 1)) return;

        if (
            v.match(/^\d{2}$/) !== null &&
            this.state.displayedDate !== v + '.'
        ) {
            displayedDate = v + '.';
        } else if (
            v.match(/^\d{2}\.\d{2}$/) !== null &&
            this.state.displayedDate !== v + '.'
        ) {
            displayedDate = v + '.';
        } else {
            displayedDate = v;
        }

        if (displayedDate.match(/^\d{2}\.\d{2}\.\d{4}$/) !== null) {
            const dateControl = moment(displayedDate, 'DD.MM.YYYY');
            if (dateControl.isValid()) {
                onChange(dateControl);
            } else {
                onChange(moment());
            }
        } else {
            onChange(null);
        }

        this.setState({
            displayedDate,
        });
    };

    handleReset = () => {
        this.setState({ displayedDate: '' });
        const { onChange } = this.props;
        onChange && onChange(null);
    };

    render() {
        const { style, className, onChange, value, libProps } = this.props;
        const { displayedDate } = this.state;

        return (
            <div style={style} className={cn('sberDateInput', className)}>
                <DatePicker
                    {...libProps}
                    customInput={
                        <CalendarIcon
                            style={{ height: '1rem', width: '1rem' }}
                        />
                    }
                    onChange={onChange}
                    selected={value}
                    dateFormat="DD/MM/YYYY"
                    locale="ru-ru"
                    calendarClassName="sberCalendar"
                />
                <input
                    placeholder="дд.мм.гггг"
                    type="text"
                    ref={elem => (this.input = elem)}
                    onChange={this.handleChange}
                    value={
                        (value && value.format('DD.MM.YYYY')) || displayedDate
                    }
                />
                {(value || displayedDate) &&
                    <button
                        className="clearDatePicker"
                        onClick={this.handleReset}
                    >
                        <Close
                            svgStyle={{
                                width: '10px',
                                height: '10px',
                                verticalAlign: 'top',
                                cursor: 'pointer',
                            }}
                        />
                    </button>}
            </div>
        );
    }
}

export default DateInput;
