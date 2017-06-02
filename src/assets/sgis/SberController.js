import sGis from './index';
class SberController extends sGis.sp.controllers.Controller {
    constructor(connector, properties) {
        super('sber', connector, properties);
    }

    geocodeNewObjects() {
        return this.operation('geocodeNewObjects', {});
    }

    geocodeEmployeeHomes() {
        return this.operation('geocodeEmployeeHomes', {});
    }

    processEmployeeOffices() {
        return this.operation('processEmployeeOffices', {});
    }

    setObjectCheckingTime() {
        return this.operation('setObjectCheckingTime', {});
    }

    setObjectEmployees() {
        return this.operation('setObjectEmployees', {});
    }

    makeAuditPlan({ startDate, endDate, employeeIds }) {
        return this.operation('makeAuditPlan', {
            startDate,
            endDate,
            employeeIds,
        });
    }

    registerEmployeeAccounts() {
        return this.operation('registerEmployeeAccounts', {});
    }

    setObjectStatuses() {
        return this.operation('setObjectStatuses', {});
    }
}

export default SberController;
