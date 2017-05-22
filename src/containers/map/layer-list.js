import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MapControl from '../../components/map-controls';
import LayersList from '../../components/map-controls/layers-list';
import {
    setObjectsDataFilter,
    setShowOffices,
    setShowHomeAddress,
} from '../../ducks/map';

const layerListStyle = {
    position: 'absolute',
    top: '1rem',
    left: '5rem',
};

class LayerList extends Component {
    render() {
        const {
            setObjectsDataFilter,
            setShowOffices,
            setShowHomeAddress,
            map,
        } = this.props;
        return (
            <MapControl style={layerListStyle}>
                <LayersList
                    showOffices={map.showOffices}
                    showHomeAddress={map.showHomeAddress}
                    setShowOffices={setShowOffices}
                    setShowHomeAddress={setShowHomeAddress}
                    objectsDataFilter={map.objectsDataFilter.toJS()}
                    onChangeItem={setObjectsDataFilter}
                />
            </MapControl>
        );
    }
}

const mapProps = ({ map }) => ({
    map,
});

const mapActions = {
    setObjectsDataFilter,
    setShowOffices,
    setShowHomeAddress,
};

export default connect(mapProps, mapActions)(LayerList);
