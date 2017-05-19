import sGis from '../assets/sgis';

let dataAccessService;
const getDataAccessService = connector => {
    if (dataAccessService) return dataAccessService;

    dataAccessService = new sGis.sp.controllers.DataAccessService(
        connector,
        {},
    );
    return dataAccessService;
};

export default getDataAccessService;
