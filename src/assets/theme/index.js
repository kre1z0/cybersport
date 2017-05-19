import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const darkGrey = '#18191a';
export const silver = '#d9dfe3';
export const lightGrey = '#f3f7ef';
export const paleGrey = '#dce1e6';
export const coolGreyTwo = '#9da3aa';
export const strongSilver = '#81888f';
export const steeGrey = '#7a7f85';
export const steel = '#81878f';
export const macaroniAndCheese = '#f7c134';
export const dustyOrange = '#eb7f2e';
export const softGreen = '#64c76c';
export const limeGreen = '#add54c';
export const mango = '#ffad2b';
export const waterMelon = '#ff4057';
export const coolGreyThree = '#98a1ab';
export const brightLavender = '#df5dff';

export const theme = getMuiTheme({
    fontFamily: 'FedraSans',
    fontSize: '14px',
    appBar: {
        height: 80,
        color: softGreen,
    },
    svgIcon: {
        color: coolGreyTwo,
    },
    palette: {
        primary1Color: softGreen,
        accent1Color: dustyOrange,
    },
    datePicker: {
        selectColor: softGreen,
    },
});
