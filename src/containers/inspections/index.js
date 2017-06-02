import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coolGreyTwo, macaroniAndCheese, softGreen } from '../../assets/theme';

import InspectionsHeader from '../../components/inspections-header';
import WorkerItem from '../../components/inspections-content/worker-item';

import './inspections.scss';
import { calculateAudits } from '../../ducks/inspections';
import withAuth from '../../hoc/withAuth';
import moment from 'moment';

import Loader from 'material-ui/CircularProgress';
import RoundedButton from '../../components/button/rounded-button';
import cn from 'classnames';

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

        const groupedAudits = audits
            .sort(({ audit_date: a }, { audit_date: b }) => {
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .reduce((acc, curr) => {
                if (!acc[curr.audit_date]) {
                    acc[curr.audit_date] = [];
                }
                acc[curr.audit_date].push(curr);
                return acc;
            }, {});

        const dates = Object.keys(groupedAudits);

        return (
            <div className="inspections-container">
                <InspectionsHeader onCalculateAudits={this.calculateAudits} />
                <div
                    className={cn(
                        'table-container',
                        audits.length > 0 ? null : 'justify',
                    )}
                >
                    {audits.length > 0
                        ? dates.map(date => {
                              const dateAudits = groupedAudits[date];
                              return (
                                  <div className="date-group" key={date}>
                                      <div className="date-label">
                                          {moment(date).format('L')}
                                      </div>
                                      {dateAudits.map(
                                          ({ gid, employee_id }) => {
                                              const employee = employees.find(
                                                  ({ gid }) =>
                                                      gid === employee_id,
                                              );
                                              return (
                                                  <WorkerItem
                                                      id={gid}
                                                      fullName={
                                                          employee.full_name
                                                      }
                                                      img={employee.image}
                                                      key={gid}
                                                  />
                                              );
                                          },
                                      )}
                                  </div>
                              );
                          })
                        : <RoundedButton
                              primary
                              label="Сформировать план"
                              onTouchTap={this.calculateAudits}
                          />}
                    {loading && <Loader className="loader overlay" />}
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
