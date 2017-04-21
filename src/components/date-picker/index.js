import React, {Component, PropTypes} from 'react';
import Calendar from 'material-ui/DatePicker';
import CalendarIcon from '../icons/calendar';
import cn from 'classnames';

import './DatePicker.scss';

const styles = {
    ROOT: {
        fontSize: '1rem',
    },
    CALENDAR: {
        paddingBottom: '1rem',
        minHeight: 'auto'
    },
    INPUT: {
        fontSize: 'inherit',
        height: '100%',
        padding: '0 0.8571rem',
        paddingLeft: '2rem'
    }
};

class DatePicker extends Component {
    constructor(props){
        super();
        this.state = {
            focused: false,
            blockFocus: false,
            value: props.value
        }
    }

    static propTypes = {
        value: PropTypes.instanceOf(Date),
        className: PropTypes.string,

        style: PropTypes.object,
        calendarStyle: PropTypes.object,
        inputStyle: PropTypes.object,

        onChange: PropTypes.func,
        onBlur: PropTypes.func

    };

    handleFocus = () => {
        this.setState({
            focused: true
        })
    };

    handleBlur = (n, date) => {
        if(this.props.onChange){
            this.props.onChange(date);
        }
        this.handleHide();
    };

    handleHide = () => {
        const { onBlur } = this.props;
        this.setState({
            focused: false
        });
        onBlur && onBlur();
    };



    render(){
        const { value, className, style, calendarStyle, inputStyle, ...other } = this.props;
        const mergedClassName = cn('date-picker-input', className);

        let DateTimeFormat = global.Intl.DateTimeFormat;
        return (
            <div className={mergedClassName}>
                <div className="icon-wrapper">
                    <CalendarIcon style={{height: '1rem', width: '1rem'}} />
                </div>
                <Calendar
                    {...other}
                    DateTimeFormat={DateTimeFormat}
                    locale="ru-RU"
                    hintText=" "
                    autoOk={true}
                    container="inline"
                    fullWidth={true}
                    underlineShow={false}
                    dialogContainerStyle={{...styles.CALENDAR, ...calendarStyle}}
                    style={{...styles.ROOT, ...style}}
                    textFieldStyle={{...styles.INPUT, ...inputStyle}}
                    hideCalendarDate={true}
                    className={`text-input ${this.state.focused ? 'focused' : ''}`}
                    mode="landscape"
                    okLabel={false}
                    onShow={this.handleFocus}
                    onDismiss={this.handleHide}
                    onChange={this.handleBlur}
                    value={value}
                />
            </div>
        )
    }
}

export default DatePicker;