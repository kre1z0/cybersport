import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateAudits } from '../../ducks/inspections';
import withAuth from '../../hoc/withAuth';
import moment from 'moment';

import RoundedButton from '../../components/button/rounded-button';
import Loader from 'material-ui/CircularProgress';

class Inspections extends Component {
    calculateAudits = () => {
        const now = moment();
        const startDate = now.format('YYYY-MM-DD HH:mm:ss');
        const end = now.add(30, 'days');
        const endDate = end.format('YYYY-MM-DD HH:mm:ss');

        this.props.calculateAudits({
            startDate,
            endDate,
        });
    };

    render() {
        const { audits, loading, employees } = this.props;
        return (
            <div className="--padding">
                <RoundedButton
                    label="Сформировать план"
                    primary
                    onTouchTap={this.calculateAudits}
                />
                {audits && JSON.stringify(audits.map(({ task_id }) => task_id))}
                {loading && <Loader className="loader overlay" />}
            </div>
        );
    }
}

const mapProps = ({ inspections: { audits, loading, employees } }) => ({
    audits,
    loading,
    employees,
});

const mapActions = { calculateAudits };

export default connect(mapProps, mapActions)(withAuth(Inspections));
