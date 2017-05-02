import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {hash} from 'immutable';

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
        newObjectOpen: false,
        filter: undefined,
        sort: undefined
    };
    
    componentDidMount () {
        const {getObjects, isAuth} = this.props;
        isAuth && getObjects();
    }

    componentWillReceiveProps ({getObjects, isAuth}) {
        !this.props.isAuth && isAuth && getObjects();
    }
    
    showNewObject = () => this.setState(() => ({newObjectOpen: true}));
    closeNewObject = () => this.setState(() => ({newObjectOpen: false}));
    
    addNewObject = () => {
        this.closeNewObject();
    };
    
    changeFilter = ({filter, sort}) => {
        this.setState(state => ({
            filter,
            sort
        }));
        
        this.props.getObjects({filter, sort});
    };
    
    render () {
        const {objects: {data, attributes, loading}, isAuth} = this.props;
        const {newObjectOpen, filter, sort} = this.state;
        
        const dataJS = data.toJS();
        const attrJS = attributes.toJS();
        const hashKey = Math.random().toString(36);
        
        return (
            <div className="portfolio-container --padding">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога"
                                      onNewObjectClick={this.showNewObject}
                    />

                    {!isAuth
                        ? <Loader className="loader"/>
                        : <Table cacheKey={hashKey}
                                 data={dataJS}
                                 columns={attrJS}
                                 filter={filter}
                                 sort={sort}
                                 loader={loading && <Loader className="loader"/>}
                                 onFilterChange={this.changeFilter}
                          />
                    }
                    <NewObjectWindow open={newObjectOpen}
                                     attributes={attrJS.filter(({name}) => name !== 'control' && name !== 'address_adjusted')}
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
