import React, {Component, PropTypes} from 'react';
import Calendar from 'material-ui/DatePicker';
import CalendarIcon from '../icons/calendar';

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
        height: '2.286rem',
        padding: '0 0.8571rem',
        lineHeight: '2.286rem',
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
        onChange: PropTypes.func
    };

    static defaultProps = {
        value: null
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
        this.setState({
            focused: false,
            value: date
        })
    };

    handleHide = () => {
        this.setState({
            focused: false
        })
    };

    render(){
        let DateTimeFormat = global.Intl.DateTimeFormat;
        return (
            <div className="date-picker-input">
                <div className="icon-wrapper">
                    <CalendarIcon style={{height: '1rem', width: '1rem'}} />
                </div>
                <Calendar
                    DateTimeFormat={DateTimeFormat}
                    locale="ru-RU"
                    hintText=" "
                    autoOk={true}
                    container="inline"
                    fullWidth={true}
                    underlineShow={false}
                    dialogContainerStyle={styles.CALENDAR}
                    style={styles.ROOT}
                    textFieldStyle={styles.INPUT}
                    hideCalendarDate={true}
                    className={`text-input ${this.state.focused ? 'focused' : ''}`}
                    mode="landscape"
                    okLabel={false}
                    onShow={this.handleFocus}
                    onDismiss={this.handleHide}
                    onChange={this.handleBlur}
                    value={this.state.value}
                />
            </div>
        )
    }
}

export default DatePicker;