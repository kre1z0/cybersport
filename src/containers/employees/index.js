import React, {Component} from 'react';
import {connect} from 'react-redux';

class Employees extends Component {
    render () {
        
        return (
            <div>
                Employees
            </div>
        );
    }
}

const mapProps = () => ({

});

const mapActions = {

};

export default connect(mapProps, mapActions)(Employees);
