import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MapControl from '../../components/map-controls';
import LayersList from '../../components/map-controls/layers-list';


const layerListStyle = {
    position: 'absolute',
    top: '1rem',
    left: '1rem'
};

class LayerList extends Component {
    render () {
        const {objectsDataFilter, onChangeItem} = this.props;
        return (
            <MapControl style={layerListStyle}>
                <LayersList objectsDataFilter={objectsDataFilter} onChangeItem={onChangeItem}/>
            </MapControl>
        )
    }
}

const mapProps = ({map}) => ({
    map
});

const mapActions = {

};

export default connect(mapProps, mapActions)(LayerList);