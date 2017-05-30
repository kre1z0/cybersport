import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

import MapControl from '../../components/map-controls';
import LayersList from '../../components/map-controls/layers-list';
import {
    setObjectsDataFilter,
    setShowOffices,
    setShowHomeAddress,
    setDomainsFilter,
} from '../../ducks/map';
import TextInput from '../../components/noMUI/text-input';
import Select from '../../components/noMUI/select';
import DateInput from '../../components/noMUI/date-input';

import RoundedButton from '../../components/button/rounded-button';
import CommerceProperty from '../../components/icons/commerce-property';
import AgroProperty from '../../components/icons/agro-property';
import LandProperty from '../../components/icons/land-property';
import IndustrialProperty from '../../components/icons/industrial-property';
import ResidentialProperty from '../../components/icons/residential-property';

import CLASSIFIER from '../../assets/const/classifier';

const layerListStyle = {
    position: 'absolute',
    top: '1rem',
    left: '5rem',
};

const ensureIcons = {
    'Коммерческая недвижимость': CommerceProperty,
    'Жилая недвижимость': ResidentialProperty,
    'Промышленная недвижимость': IndustrialProperty,
    'Сельскохозяйственная недвижимость': AgroProperty,
    'Права собственности и аренды на земельные участки': LandProperty,
};

const ensureIconStyle = {
    height: '18px',
    width: '17px',
    verticalAlign: 'middle',
    marginRight: '6px',
    fill: '#000',
};

const LayerListInitState = Map({
    disableEnsure3: true,
    bankValue: 'all',
    employee: '',
    planDate1: null,
    planDate2: null,
    liquidityValue: 'all',
    qualityCategoryValue: 'all',
    ensureType2Value: List(Object.keys(CLASSIFIER)),
    ensureType3Value: 'all',
    dataFilter: Map({
        liquidity: null,
        department: null,
        classifier2: null,
        classifier3: null,
    }),
});

class LayerList extends Component {
    state = Object.assign(
        {
            collapsed: false,
            bankItems: [
                {
                    value: 'all',
                    text: 'Все',
                },
            ],
            liquidityItems: [
                {
                    value: 'all',
                    text: 'Все',
                },
            ],
            qualityCategoryItems: [
                {
                    value: 'all',
                    text: 'Все',
                },
            ],
            ensureType2Items: Object.keys(CLASSIFIER).map(key => {
                const Icon = ensureIcons[key];
                return {
                    value: key,
                    text: <span><Icon style={ensureIconStyle} /> {key}</span>,
                };
            }),
            ensureType3Items: [
                {
                    value: 'all',
                    text: 'Все',
                },
            ],
        },
        LayerListInitState.toJS(),
    );

    setFilter() {
        const { dataFilter } = this.state;
        const FILTER = Object.keys(dataFilter)
            .filter(filter => dataFilter[filter] !== null)
            .map(key => dataFilter[key])
            .join(' && ');
        this.props.setDomainsFilter(FILTER || null);
    }

    handleBankChange = value => {
        this.setState(
            state => ({
                bankValue: value,
                dataFilter: Map(state.dataFilter)
                    .set(
                        'department',
                        value === 'all' ? null : `(department == "${value}")`,
                    )
                    .toJS(),
            }),
            () => {
                this.setFilter();
            },
        );
    };

    handleEmployeeChange = value => {
        this.setState({
            employee: value,
        });
    };

    handleCollapse = () => {
        this.setState(state => ({
            collapsed: !state.collapsed,
        }));
    };

    handleSelectQualityCategory = value => {
        this.setState({
            qualityCategoryValue: value,
        });
    };

    handleSelectLiquidity = value => {
        this.setState(
            state => ({
                liquidityValue: value,
                dataFilter: Map(state.dataFilter)
                    .set(
                        'liquidity',
                        value === 'all'
                            ? null
                            : `(actual_liquidity == {null} && liquidity == "${value}" || actual_liquidity == "${value}")`,
                    )
                    .toJS(),
            }),
            () => {
                this.setFilter();
            },
        );
    };

    handlerChangeDate1 = value => {
        this.setState({
            planDate1: value,
        });
    };

    handlerChangeDate2 = value => {
        this.setState({
            planDate2: value,
        });
    };

    handleEnsure2Select = value => {
        let toEnsure3 = [
            {
                value: 'all',
                text: 'Все',
            },
        ];
        if (value.length === 1)
            CLASSIFIER[value[0]].forEach(item =>
                toEnsure3.push({ value: item, text: item }),
            );

        this.setState(
            state => ({
                ensureType2Value: value,
                disableEnsure3: value.length > 1,
                ensureType3Items: toEnsure3,
                dataFilter: Map(state.dataFilter)
                    .set(
                        'classifier2',
                        value.length === 5
                            ? null
                            : '(' +
                                  value
                                      .map(e => `classifier2 == "${e}"`)
                                      .join(' || ') +
                                  ')',
                    )
                    .toJS(),
            }),
            () => {
                this.setFilter();
            },
        );
    };

    handleEnsure3Select = value => {
        this.setState(
            state => ({
                ensureType3Value: value,
                dataFilter: Map(state.dataFilter)
                    .set(
                        'classifier3',
                        value === 'all' ? null : `(classifier3 == "${value}")`,
                    )
                    .toJS(),
            }),
            () => {
                this.setFilter();
            },
        );
    };

    ensure2ItemFormatter = items => {
        return items.map(item => item.text.props.children[0]);
    };

    resetForm = () => {
        this.setState(LayerListInitState.toJS(), () => {
            this.setFilter();
        });
    };

    componentWillMount() {
        const domains = this.props.domains.toJS();
        Object.keys(domains)
            .filter(domain => domain !== undefined)
            .forEach(domain => {
                if (domain === 'department') {
                    this.setState(state => ({
                        bankItems: [
                            ...state.bankItems,
                            ...domains[domain].map(el => ({
                                value: el,
                                text: el,
                            })),
                        ],
                    }));
                }
                if (domain === 'object_quality_category') {
                    this.setState(state => ({
                        qualityCategoryItems: [
                            ...state.qualityCategoryItems,
                            ...domains[domain].map(el => ({
                                value: el,
                                text: el,
                            })),
                        ],
                    }));
                }
                if (domain === 'liquidity') {
                    this.setState(state => ({
                        liquidityItems: [
                            ...state.liquidityItems,
                            ...domains[domain].map(el => ({
                                value: el,
                                text: el,
                            })),
                        ],
                    }));
                }
            });
    }

    render() {
        const {
            setObjectsDataFilter,
            setShowOffices,
            setShowHomeAddress,
            map,
        } = this.props;
        const {
            disableEnsure3,
            collapsed,
            bankValue,
            bankItems,
            employee,
            qualityCategoryValue,
            qualityCategoryItems,
            planDate1,
            planDate2,
            ensureType2Value,
            ensureType2Items,
            ensureType3Value,
            ensureType3Items,
            liquidityValue,
            liquidityItems,
        } = this.state;
        return (
            <MapControl
                onCollapse={this.handleCollapse}
                style={layerListStyle}
                collapsed={collapsed}
            >
                <CSSTransitionGroup
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionName="extend-filter"
                >
                    {collapsed &&
                        <div className="extend-filter">
                            <div className="form-control">
                                <span className="label">ТБ:</span>
                                <Select
                                    style={{ width: '100%' }}
                                    value={bankValue}
                                    items={bankItems}
                                    onChange={this.handleBankChange}
                                />
                            </div>
                            <div className="form-control">
                                <span className="label">Сотрудник ПМЗ:</span>
                                <TextInput
                                    style={{ width: '100%' }}
                                    value={employee}
                                    onChange={this.handleEmployeeChange}
                                />
                            </div>
                            <div className="form-control">
                                <span className="label">
                                    Плановые даты проверки:
                                </span>
                                <DateInput
                                    libProps={{
                                        selectsStart: true,
                                        startDate: planDate1,
                                        maxDate: planDate2,
                                        endDate: planDate2,
                                    }}
                                    onChange={this.handlerChangeDate1}
                                    value={planDate1}
                                    style={{
                                        width: '50%',
                                        display: 'inline-block',
                                    }}
                                />
                                <DateInput
                                    libProps={{
                                        selectsEnd: true,
                                        startDate: planDate1,
                                        minDate: planDate1,
                                        endDate: planDate2,
                                    }}
                                    onChange={this.handlerChangeDate2}
                                    value={planDate2}
                                    style={{
                                        width: '50%',
                                        display: 'inline-block',
                                    }}
                                />
                            </div>
                            <div className="form-control">
                                <span className="label">
                                    Категория качества:
                                </span>
                                <Select
                                    style={{ width: '100%' }}
                                    value={qualityCategoryValue}
                                    items={qualityCategoryItems}
                                    onChange={this.handleSelectQualityCategory}
                                />
                            </div>
                            <div className="form-control">
                                <span className="label">Ликвидность:</span>
                                <Select
                                    style={{ width: '100%' }}
                                    value={liquidityValue}
                                    items={liquidityItems}
                                    onChange={this.handleSelectLiquidity}
                                />
                            </div>
                            <div className="form-control">
                                <span className="label">
                                    Вид обеспечения по классификатору (2 уровень):
                                </span>
                                <Select
                                    selectItemFormatter={
                                        this.ensure2ItemFormatter
                                    }
                                    multi
                                    style={{ width: '100%' }}
                                    value={ensureType2Value}
                                    items={ensureType2Items}
                                    onChange={this.handleEnsure2Select}
                                />
                            </div>
                            <div className="form-control">
                                <span className="label">
                                    Вид обеспечения по классификатору (3 уровень):
                                </span>
                                <Select
                                    disable={disableEnsure3}
                                    style={{ width: '100%' }}
                                    value={ensureType3Value}
                                    items={ensureType3Items}
                                    onChange={this.handleEnsure3Select}
                                />
                            </div>
                            <div
                                style={{
                                    textAlign: 'center',
                                    position: 'relative',
                                    zIndex: 0,
                                }}
                            >
                                <RoundedButton
                                    onClick={this.resetForm}
                                    label="Сбросить фильтр"
                                />
                            </div>
                        </div>}
                </CSSTransitionGroup>
                <LayersList
                    showOffices={map.showOffices}
                    showHomeAddress={map.showHomeAddress}
                    setShowOffices={setShowOffices}
                    setShowHomeAddress={setShowHomeAddress}
                    objectsDataFilter={map.objectsDataFilter.toJS()}
                    onChangeItem={setObjectsDataFilter}
                />
            </MapControl>
        );
    }
}

const mapProps = ({ map, domains }) => ({
    map,
    domains,
});

const mapActions = {
    setObjectsDataFilter,
    setShowOffices,
    setShowHomeAddress,
    setDomainsFilter,
};

export default connect(mapProps, mapActions)(LayerList);
