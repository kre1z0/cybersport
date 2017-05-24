import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapPopups from '../../components/map-popup';
import ObjectContent from '../../components/map-popup/object-content';

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
        const { selectedObjects, staticServiceUrl } = this.props;
        const { current, close } = this.state;

        const selectedObject = selectedObjects[current];

        return !close && selectedObject
            ? <MapPopups
                  onCloseRequest={this.closePopup}
                  style={{
                      top: '1rem',
                      right: '1rem',
                  }}
              >
                  <ObjectContent
                      current={current + 1}
                      count={selectedObjects.length}
                      object={selectedObjects[current]}
                      staticServiceUrl={staticServiceUrl}
                      onNext={this.onNext}
                      onPrev={this.onPrev}
                  />
              </MapPopups>
            : null;
    }
}

const mapProps = ({
    map: { selectedObjects },
    user: { staticServiceUrl },
}) => ({
    selectedObjects,
    staticServiceUrl,
});

const mapActions = {};

export default connect(mapProps, mapActions)(FeaturePopup);
