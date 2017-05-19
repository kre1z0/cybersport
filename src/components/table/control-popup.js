import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import FlatButton from '../button/flat-button';
import { ContextIcon } from '../icons';

import './control-popup.scss';

const iconStyle = {
    height: 13,
    width: 13,
};

const popoverStyle = {
    position: 'relative',
    width: '260px',
    borderRadius: '6px',
    backgroundColor: '#fff',
    padding: '20px',
};

const setAnchor = anchor => () => ({ anchor });

class ControlPopup extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    state = {
        anchor: null,
    };

    showPopup = e => {
        e.preventDefault();
        this.setState(setAnchor(e.currentTarget));
    };

    closePopup = () => this.setState(setAnchor(null));

    render() {
        const { anchor } = this.state;

        return (
            <div className="control-popup">
                <IconButton
                    iconStyle={iconStyle}
                    className="control-button"
                    onTouchTap={this.showPopup}
                    touch={true}
                >
                    <ContextIcon isActive={!!anchor} />
                </IconButton>
                <Popover
                    open={!!anchor}
                    anchorEl={anchor}
                    anchorOrigin={{ horizontal: 'right', vertical: 'center' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'center' }}
                    style={popoverStyle}
                    autoCloseWhenOffScreen={false}
                    canAutoPosition={false}
                    zDepth={3}
                    onRequestClose={this.closePopup}
                >
                    <div className="control-popup-content">
                        <FlatButton
                            label="Карточка мониторинга"
                            onTouchTap={this.closePopup}
                        />
                        <FlatButton
                            label="Ближайшая проверка"
                            onTouchTap={this.closePopup}
                        />
                        <FlatButton
                            label="Удалить объект"
                            onTouchTap={this.closePopup}
                            secondary={true}
                        />
                    </div>
                </Popover>
            </div>
        );
    }
}

export default ControlPopup;
