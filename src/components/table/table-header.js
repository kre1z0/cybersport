import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        scrollLeft: PropTypes.number,
        columnCount: PropTypes.number,
        cellRenderer: PropTypes.func.isRequired,
    };

    static defaultProps = {
        scrollLeft: 0,
        columnCount: 0,
    };

    state = {
        renderHelper: new Array(this.props.columnCount).fill(1),
    };

    componentWillReceiveProps(nextProps) {
        this.setState(state => ({
            renderHelper: new Array(nextProps.columnCount).fill(1),
        }));
    }

    render() {
        const { scrollLeft, cellRenderer } = this.props;
        const { renderHelper } = this.state;

        return (
            <div
                className="header-container"
                style={{ transform: `translateX(-${scrollLeft}px)` }}
            >
                <table>
                    <thead>
                        <tr>
                            {renderHelper.map((c, columnIndex) => (
                                <th key={`th-${columnIndex}`}>
                                    {cellRenderer(columnIndex)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Header;
