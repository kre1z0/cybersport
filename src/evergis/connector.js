import sGis from '../assets/sgis';

let connector;
const getConnector = (url, authUrl, opts) => {
    if (connector) return connector;

    connector = new sGis.sp.Connector(url, authUrl, opts);
    return connector;
};

export default getConnector;
