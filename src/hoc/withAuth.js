import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'material-ui/CircularProgress';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        render() {
            const { isAuth } = this.props;
            return isAuth
                ? <EnhancedComponent {...this.state} {...this.props} />
                : <Loader className="loader" />;
        }
    }

    const mapProps = ({ user }) => ({
        isAuth: !!user.employee_id,
    });

    const mapActions = {};

    return connect(mapProps, mapActions)(Enhancer);
}
