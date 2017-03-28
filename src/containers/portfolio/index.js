import React, {Component} from 'react';
import {connect} from 'react-redux';

class Portfolio extends Component {
    render () {
        
        return (
            <div>
                Portfolio
            </div>
        );
    }
}

const mapProps = () => ({

});

const mapActions = {

};

export default connect(mapProps, mapActions)(Portfolio);
