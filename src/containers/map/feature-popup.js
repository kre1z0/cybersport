import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapPopups from '../../components/map-popup';
import ObjectContent from '../../components/map-popup/object-content';

class FeaturePopup extends Component {
    render () {
        const {selectedObjects, staticServiceUrl} = this.props;
        return (
            selectedObjects && selectedObjects.length > 0
            ? <MapPopups style={{
                top: '1rem',
                right: '1rem'
              }}>
                <ObjectContent object={selectedObjects[0]}
                               staticServiceUrl={staticServiceUrl}
                />
              </MapPopups>
            : null
        )
    }
}

const mapProps = ({map: {selectedObjects}, user: {staticServiceUrl} }) => ({
    selectedObjects,
    staticServiceUrl
});

const mapActions = {

};

export default connect(mapProps, mapActions)(FeaturePopup);