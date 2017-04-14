import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table';
import {getObjects} from '../../actions/objects';

import './portfolio.scss'

class Portfolio extends Component {
    static propTypes = {
        objects: PropTypes.object.isRequired
    };
    
    componentDidMount () {
        this.props.getObjects();
    }

    render () {
        const {objects: {data, attributes, loading, error, totalObjects}} = this.props;

        return (
            <div className="portfolio-container">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога" />

                    <Table data={data}
                           columns={attributes}
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
    getObjects
};

export default connect(mapProps, mapActions)(Portfolio);
