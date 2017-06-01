import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coolGreyTwo, macaroniAndCheese, softGreen } from '../../assets/theme';

import InspectionsHeader from '../../components/inspections-header';
import WorkerItem from '../../components/inspections-content/worker-item';

import './inspections.scss';
import { calculateAudits } from '../../ducks/inspections';
import withAuth from '../../hoc/withAuth';
import moment from 'moment';

import RoundedButton from '../../components/button/rounded-button';
import Loader from 'material-ui/CircularProgress';

class Inspections extends Component {
    calculateAudits = () => {
        const now = moment();
        const startDate = now.format('YYYY-MM-DD HH:mm:ss');
        const end = now.add(30, 'days');
        const endDate = end.format('YYYY-MM-DD HH:mm:ss');

        this.props.calculateAudits({
            startDate,
            endDate,
        });
    };

    render() {
        const { audits, loading, employees } = this.props;
        return (
            <div className="inspections-container">
                <InspectionsHeader />
                <div className="inspections-status-header">
                    <div
                        className="inspections-status-title"
                        style={{
                            color: coolGreyTwo,
                        }}
                    >
                        Назначенные
                    </div>
                    <div
                        className="inspections-status-title"
                        style={{
                            color: macaroniAndCheese,
                        }}
                    >
                        В работе
                    </div>
                    <div
                        className="inspections-status-title"
                        style={{
                            color: softGreen,
                        }}
                    >
                        Выполненные
                    </div>
                </div>
                <div className="table-container">
                    <div className="inspections-status-block">
                        <div className="inspections-status-block-item">
                            <div className="inspections-status-wrapper">
                                <div className="inspections-item-date">
                                    01.04.2017
                                </div>
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />

                                <WorkerItem
                                    id="0000001"
                                    fullName="6575675"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="123"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="dfgfdgdfgdfgdfgd"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                            </div>
                        </div>
                        <div className="inspections-status-block-item">
                            <div className="inspections-status-wrapper">
                                <div className="inspections-item-date">
                                    01.04.2017
                                </div>
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                            </div>
                            <div className="inspections-status-wrapper">
                                <div className="inspections-item-date">
                                    01.04.2017
                                </div>
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                            </div>
                        </div>
                        <div className="inspections-status-block-item">
                            <div className="inspections-status-wrapper">
                                <div className="inspections-item-date">
                                    01.04.2017
                                </div>
                                <WorkerItem
                                    id="0000001"
                                    fullName="Иванов Иван Иванович"
                                    img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapProps = ({ inspections: { audits, loading, employees } }) => ({
    audits,
    loading,
    employees,
});

const mapActions = { calculateAudits };

export default connect(mapProps, mapActions)(withAuth(Inspections));
