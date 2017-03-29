import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import HeaderTitleBlock from '../../components/header-title-block';
import PortfolioTable from '../../components/portfolio-table';

import './Portfolio.css'

class Portfolio extends Component {
    static propTypes = {
        objects: PropTypes.array.isRequired
    };

    render () {
        const {objects} = this.props;
        
        return (
            <div className="portfolio-container">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога" />

                    <PortfolioTable {...{objects}} />

                </div>
            </div>
        );
    }
}

const mapProps = ({objects}) => ({
    objects
});

const mapActions = {

};

export default connect(mapProps, mapActions)(Portfolio);
