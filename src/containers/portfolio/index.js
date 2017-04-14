import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import Loader from 'material-ui/CircularProgress';
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
        const {objects: {data, attributes}} = this.props;

        return (
            <div className="portfolio-container">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога" />

                    {data.length > 0
                        ? <Table data={data}
                           columns={attributes}
                          />
                        : <Loader className="loader"/>
                    }

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
