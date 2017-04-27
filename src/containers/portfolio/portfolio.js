import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import Loader from 'material-ui/CircularProgress';

import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table/simple-table';
import {getObjects} from '../../ducks/objects';

import NewObjectWindow from './new-object-window';

import './portfolio.scss'

class Portfolio extends Component {
    static propTypes = {
        objects: PropTypes.object.isRequired
    };
    
    state = {
        newObjectOpen: false
    };
    
    componentDidMount () {
        const {getObjects, isAuth, objects: {data}} = this.props;
        data.length === 0 && isAuth && getObjects();
    }

    componentWillReceiveProps ({getObjects, isAuth, objects: {data}}) {
        data.length === 0 && !this.props.isAuth && isAuth && getObjects();
    }
    
    showNewObject = () => this.setState(() => ({newObjectOpen: true}));
    closeNewObject = () => this.setState(() => ({newObjectOpen: false}));
    
    addNewObject = () => {
        this.closeNewObject();
    };
    
    render () {
        const {objects: {data, attributes, cacheKey, loading}, isAuth} = this.props;
        const {newObjectOpen} = this.state;
        
        return (
            <div className="portfolio-container">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога"
                                      onSettingsClick={this.showNewObject}
                    />

                    {data.length === 0 || loading || !isAuth
                        ? <Loader className="loader"/>
                        : <Table data={data}
                                 columns={attributes}
                                 cacheKey={cacheKey}
                          />
                    }
                    <NewObjectWindow open={newObjectOpen}
                                     attributes={attributes.filter(({name}) => name !== 'control' && name !== 'address_adjusted')}
                                     onRequestClose={this.closeNewObject}
                                     onApply={this.addNewObject}
                    />
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
