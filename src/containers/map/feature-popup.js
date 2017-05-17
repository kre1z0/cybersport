import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import MapPopups from '../../components/map-popup';
import ObjectContent from '../../components/map-popup/object-content';

class FeaturePopup extends Component {
    render () {
        const {selectedMapFeatures} = this.props;
        return (
            selectedMapFeatures &&
            <MapPopups>
                <ObjectContent />
            </MapPopups>
        )
    }
}

const mapProps = ({selectedMapFeatures}) => ({
    selectedMapFeatures
});

const mapActions = {

};

export default connect(mapProps, mapActions)(FeaturePopup);