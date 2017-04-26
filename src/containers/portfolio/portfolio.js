import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import Loader from 'material-ui/CircularProgress';
import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table/simple-table';
import {getObjects} from '../../ducks/objects';

import './portfolio.scss'

class Portfolio extends Component {
    static propTypes = {
        objects: PropTypes.object.isRequired
    };
    
    componentDidMount () {
        const {getObjects, isAuth, objects: {data}} = this.props;
        data.length === 0 && isAuth && getObjects();
    }

    componentWillReceiveProps ({getObjects, isAuth, objects: {data}}) {
        data.length === 0 && !this.props.isAuth && isAuth && getObjects();
    }

    render () {
        const {objects: {data, attributes, cacheKey, loading}, isAuth} = this.props;

        return (
            <div className="portfolio-container">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога" />

                    {data.length === 0 || loading || !isAuth
                        ? <Loader className="loader"/>
                        : <Table data={data}
                                 columns={attributes}
                                 cacheKey={cacheKey}
                          />
                    }

                </div>
            </div>
        );
    }
}

const mapProps = ({objects, user: {login}}) => ({
    objects,
    isAuth: !!login
});

const mapActions = {
    getObjects
};

export default connect(mapProps, mapActions)(Portfolio);
