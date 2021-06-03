import { ITheme } from './types';

const color = {
    primary: '#ec771a',
    secondary: '#ffee44',
    bgButton: '#909090',
    gray: '#334455',
    gray2: '#e2e3e2',
    ligthGray: '#d2d2d2',
    white: '#fffeff',
    black: '#000000',
    blue: '#1A3668',
    error: '#AF4141',
    red: '#ee4433',
    success: '#82BA91',
    warning: '#F7AB00',
};

const theme: ITheme = {
    primaryColor: color.primary,
    secondaryColor: color.secondary,
    backgroundColor: color.white,
    white: color.white,
    black: color.black,
    blue: color.blue,
    gray2: color.gray2,
    red: color.red,
    bgButtonColor: color.bgButton,
    errorColor: color.error,
    warningColor: color.warning,
    successColor: color.success,
    ligthGrayColor: color.ligthGray,
    title: {
        fontSize: 30,
        color: color.gray,
    },
    text: {
        fontSize: 18,
        color: color.gray,
    },
    blogText: {
        fontSize: 14,
        color: color.gray,
    },
    smallText: {
        fontSize: 15,
        color: color.gray,
    },
    titleHeader: {
        fontSize: 40,
        color: color.primary,
    },
    inputError: {
        fontSize: 13,
        color: color.error,
    },
};

export { theme, color };
