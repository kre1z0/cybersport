import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table';

import './portfolio.scss'

class Portfolio extends Component {
    static propTypes = {
        objects: PropTypes.object.isRequired
    };

    render () {
        const {objects: {data, columns}} = this.props;

        return (
            <div className="portfolio-container">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога" />

                    <Table data={data}
                           columns={columns}
                    />

                </div>
            </div>
        );
    }
}

const mapProps = ({objects}) => ({
    objects
});

const mapActions = {

};

export default connect(mapProps, mapActions)(Portfolio);
