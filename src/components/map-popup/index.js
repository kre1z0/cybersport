import React, { Component } from 'react';
import { CloseMapPopupIcon } from '../icons';
import { coolGreyTwo } from '../../assets/theme';
import './map-popup.scss';
import IconButton from 'material-ui/IconButton';
import { PageBack, PageNext } from '../icons';

const closeButtonStyle = {
    position: 'absolute',
    right: 12,
    top: 16,
};

const closeSvgStyle = {
    height: 12,
    width: 12,
};

const svgStyle = {
    height: 10,
    width: 6,
};

const paginationButtonStyle = {
    width: 36,
    height: 36,
    padding: 0,
};

const CloseWindowButton = props => (
    <IconButton {...props} style={closeButtonStyle}>
        <CloseMapPopupIcon svgColor={coolGreyTwo} svgStyle={closeSvgStyle} />
    </IconButton>
);

const PageBackButton = props => (
    <IconButton {...props} style={paginationButtonStyle}>
        <PageBack svgColor={coolGreyTwo} svgStyle={svgStyle} />
    </IconButton>
);

const PageNextButton = props => (
    <IconButton {...props} style={paginationButtonStyle}>
        <PageNext svgColor={coolGreyTwo} svgStyle={svgStyle} />
    </IconButton>
);

class MapPopup extends Component {
    render() {
        const {
            children,
            style,
            onCloseRequest,
            count,
            current,
            onNext,
            onPrev,
            headerComponent,
        } = this.props;
        return (
            <div className="map-popup" style={style}>
                {headerComponent}
                <CloseWindowButton onTouchTap={onCloseRequest} />
                <div className="triangle-with-shadow" />
                {children}
                {count > 1 &&
                    <div className="object-cluster-footer">
                        <PageBackButton onTouchTap={onPrev} />
                        <div className="page-numbers">
                            {`${current} из ${count}`}
                        </div>
                        <PageNextButton onTouchTap={onNext} />
                    </div>}
            </div>
        );
    }
}

export default MapPopup;
