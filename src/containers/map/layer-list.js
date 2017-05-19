import React, {Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {connect} from 'react-redux';

import MapControl from '../../components/map-controls';
import LayersList from '../../components/map-controls/layers-list';
import { setObjectsDataFilter, setShowOffices, setShowHomeAddress } from '../../ducks/map';
import TextInput from '../../components/noMUI/text-input';
import Select from '../../components/noMUI/select';

const layerListStyle = {
    position: 'absolute',
    top: '1rem',
    left: '5rem'
};

class LayerList extends Component {
    state = {
        collapsed: false,
        bankValue: 'moscow',
        bankItems: [
            {
                value: 'moscow',
                text: 'Московский банк'
            }
        ],
        employee: '',
        planDate1: null,
        planDate2: null,
        qualityCategoryValue: 'main',
        qualityCategoryItems: [
            {
                value: 'main',
                text: 'Основная'
            }
        ]
    };

    handleBankChange = (value) => {
        console.log(value);
        this.setState({
            bankValue: value
        })
    };

    handleEmployeeChange = (value) => {
        this.setState({
            employee: value
        })
    };

    handleCollapse = () => {
        this.setState(state => ({collapsed: !state.collapsed}))
    };

    handleSelectQualityCategory = (value) => {
        this.setState({
            qualityCategoryValue: value
        })
    };

    render () {
        const { setObjectsDataFilter, setShowOffices, setShowHomeAddress, map } = this.props;
        const { collapsed, bankValue, bankItems, employee, qualityCategoryValue, qualityCategoryItems } = this.state;
        return (
            <MapControl onCollapse={this.handleCollapse} style={layerListStyle} collapsed={collapsed}>
                <CSSTransitionGroup
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionName="extend-filter">
                    {collapsed && <div style={{paddingBottom: "100px"}}>
                        <div>
                            <Select style={{width: '100%'}} value={bankValue} items={bankItems} onChange={this.handleBankChange} />
                        </div>
                        <div>
                            <TextInput style={{width: '100%'}} value={employee} onChange={this.handleEmployeeChange} />
                        </div>
                        <div>
                            <Select style={{width: '100%'}} value={qualityCategoryValue} items={qualityCategoryItems} onChange={this.handleSelectQualityCategory} />
                        </div>
                    </div>}
                </CSSTransitionGroup>
                <LayersList
                    showOffices={map.showOffices}
                    showHomeAddress={map.showHomeAddress}
                    setShowOffices={setShowOffices}
                    setShowHomeAddress={setShowHomeAddress}

                    objectsDataFilter={map.objectsDataFilter.toJS()}
                    onChangeItem={setObjectsDataFilter}/>
            </MapControl>
        )
    }
}

const mapProps = ({map}) => ({
    map
});

const mapActions = {
    setObjectsDataFilter,
    setShowOffices,
    setShowHomeAddress
};

export default connect(mapProps, mapActions)(LayerList);