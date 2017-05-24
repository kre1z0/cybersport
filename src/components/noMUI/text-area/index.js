/**
 * Created by re on 17.05.2017.
 */
import React, {Component} from 'react';

import './TextArea.scss';

class TextArea extends Component {


    handleChange = ({target}) => {
        const {onChange} = this.props;
        onChange && onChange(target.value);
    };

    render(){
        const {value} = this.props;

        return <div className="sberTextArea">
            <textarea value={value} onChange={this.handleChange} />
        </div>
    }
}

export default TextArea;