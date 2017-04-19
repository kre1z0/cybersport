import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
    ROOT: {
        border: '1px solid red'
    }
};

class TextArea extends Component {
    render(){
        return (
            <TextField
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
                rows={2}
                underlineShow={false}
                style={styles.ROOT}
            />
        )
    }
}

export default TextArea;