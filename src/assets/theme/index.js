import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const darkGrey = '#18191a';
export const strongSilver = '#81888f';
export const silver = '#d9dfe3';
export const softGreen = '#64c76c';
export const lightGray = '#f3f7ef';

export const theme = getMuiTheme({
    fontFamily: 'FedraSans',
    appBar: {
        height: 80,
        color: softGreen
    },
    svgIcon: {
        color: silver
    }
});
