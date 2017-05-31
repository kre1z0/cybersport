import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapPopups from '../../components/map-popup';
import ObjectContent from '../../components/map-popup/object-content';
import HomeContent from '../../components/map-popup/home-content';
import OfficeContent from '../../components/map-popup/office-content';
import MapPopupHeader from '../../components/map-popup/map-popup-header';
import { pointToScreen } from '../../evergis/map';

const FEATURE_TYPES = {
    OBJECT: 'object',
    HOME: 'home',
    OFFICE: 'office',
};

const getObjectType = ({ status, employee_id, address }) => {
    if (status) {
        return FEATURE_TYPES.OBJECT;
    } else if (employee_id) {
        return FEATURE_TYPES.HOME;
    } else if (address) {
        return FEATURE_TYPES.OFFICE;
    }
};

const ContentSwitch = ({ type, feature, staticServiceUrl }) => {
    switch (type) {
        case FEATURE_TYPES.OBJECT:
            return (
                <ObjectContent
                    object={feature}
                    staticServiceUrl={staticServiceUrl}
                />
            );
        case FEATURE_TYPES.HOME:
            return (
                <HomeContent
                    object={feature}
                    staticServiceUrl={staticServiceUrl}
                />
            );
        case FEATURE_TYPES.OFFICE:
            return (
                <OfficeContent
                    object={feature}
                    staticServiceUrl={staticServiceUrl}
                />
            );
    }
};

const HeaderSwitch = ({ type, object }) => {
    switch (type) {
        case FEATURE_TYPES.OBJECT:
            return <MapPopupHeader status={object.status} />;
        case FEATURE_TYPES.HOME:
            return (
                <div className="map-popup-header">
                    Домашний адрес
                </div>
            );
        case FEATURE_TYPES.OFFICE:
            return (
                <div className="map-popup-header">
                    Офис ПМЗ
                </div>
            );
    }
};

class FeaturePopup extends Component {
    state = {
        current: 0,
        close: false,
    };
    onNext = () =>
        this.setState(state => ({
            current: Math.min(
                state.current + 1,
                this.props.selectedObjects.length - 1,
            ),
        }));
    onPrev = () =>
        this.setState(state => ({ current: Math.max(0, state.current - 1) }));

    closePopup = () => this.setState(state => ({ close: true }));

    componentWillReceiveProps = ({ selectedObjects }) => {
        if (selectedObjects !== this.props.selectedObjects) {
            this.setState(state => ({
                current: 0,
                close: false,
            }));
        }
    };

    render() {
        const {
            selectedObjects,
            staticServiceUrl,
            anchorPosition,
        } = this.props;
        const { current, close } = this.state;

        const selectedObject = selectedObjects[current];
        const type = selectedObject && getObjectType(selectedObject);

        const { x, y } = (anchorPosition &&
            pointToScreen(anchorPosition)) || {};
        console.log(selectedObject);
        return !close && selectedObject
            ? <MapPopups
                  onCloseRequest={this.closePopup}
                  style={{
                      top: y,
                      left: x,
                      transform: `translate(${selectedObjects.length === 1 ? 31 : 41}px, -50%)`,
                  }}
                  current={current + 1}
                  count={selectedObjects.length}
                  onNext={this.onNext}
                  onPrev={this.onPrev}
                  headerComponent={
                      <HeaderSwitch object={selectedObject} type={type} />
                  }
              >
                  <ContentSwitch
                      type={type}
                      feature={selectedObject}
                      staticServiceUrl={staticServiceUrl}
                  />
              </MapPopups>
            : null;
    }
}

const mapProps = ({
    map: { center, selectedObjects, anchorPosition },
    user: { staticServiceUrl },
}) => ({
    selectedObjects,
    staticServiceUrl,
    anchorPosition,
    center,
});

const mapActions = {};

export default connect(mapProps, mapActions)(FeaturePopup);
