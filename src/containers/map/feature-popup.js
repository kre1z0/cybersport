import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapPopups from '../../components/map-popup';
import ObjectContent from '../../components/map-popup/object-content';
import MapPopupHeader from '../../components/map-popup/map-popup-header';
import { pointToScreen } from '../../evergis/map';

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

        const { x, y } = (anchorPosition &&
            pointToScreen(anchorPosition)) || {};

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
                      <MapPopupHeader
                          status={selectedObjects[current].status}
                      />
                  }
              >
                  <ObjectContent
                      object={selectedObjects[current]}
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
