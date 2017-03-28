import React, {Component, PropTypes} from 'react';

import HeaderTitleBlock from '../../components/header-title-block';
import PortfolioTable from '../../components/portfolio-table';
import data from './data';

import './Portfolio.css'

class Portfolio extends Component {

    render () {
        
        return (
            <div className="portfolio-container">
                <div className="portfolio-content">

                    <HeaderTitleBlock title="Реестр объектов залога" />

                    <PortfolioTable {...{data}} />

                </div>
            </div>
        );
    }
}

export default Portfolio;
