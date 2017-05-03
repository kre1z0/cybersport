import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import Loader from 'material-ui/CircularProgress';

import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table/simple-table';
import {getObjects} from '../../ducks/objects';

import NewObjectWindow from './new-object-window';

import './portfolio.scss';



const tranformQuery = query => {
  const columns = Object.keys(query);
  
  const sort = columns
      .map(column => {
          const sortType = query[column].sort;
          if (!sortType || sortType === 0) return;
          return `${column} ${sortType > 0 ? 'asc' : 'desc'}`;
      })
      .filter(i=>!!i);
  
  const filter = columns
      .map(column => {
          const filterString = query[column].filter;
          if (!filterString || filterString.length === 0) return;
          return `${column} like '%${filterString}%'`;
      })
      .filter(i=>!!i);
  
  return ({
      sort: sort.length !== 0 ? sort : undefined,
      filter: filter.length !== 0 ? filter.join(' && ') : undefined
  });
};

class Portfolio extends Component {
    static propTypes = {
        objects: PropTypes.object.isRequired
    };
    
    state = {
        newObjectOpen: false,
        query: {}
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
    
    changeFilter = ({column, filter, sort}) => {
        let query;
        
        if(filter || sort) {
            query = {
                ...this.state.query,
                [column]: {filter, sort}
            };
        } else {
            query = {
                ...this.state.query
            };
            delete query[column];
        }
        
        this.setState(() => ({
            query
        }));

        this.props.getObjects(tranformQuery(query));
    };
    
    render () {
        const {objects: {data, attributes, loading}, isAuth} = this.props;
        const {newObjectOpen, query} = this.state;
        
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
                                 query={query}
                                 loader={loading && <Loader className="loader"/>}
                                 onFilterChange={this.changeFilter}
                          />
                    }
                    <NewObjectWindow open={newObjectOpen}
                                     attributes={
                                         attrJS.filter(({name}) => name !== 'control' && name !== 'address_adjusted')
                                     }
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
