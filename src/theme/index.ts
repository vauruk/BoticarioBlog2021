import { ITheme } from './types';

const color = {
    primary: '#ec771a',
    secondary: '#ffee44',
    gray: '#334455',
    white: '#fffeff',
    black: '#000000',
    blue: '#1A3668',
    error: '#AF4141',
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
    errorColor: color.error,
    warningColor: color.warning,
    successColor: color.success,
    title: {
        fontSize: 30,
        color: color.gray,
    },
    text: {
        fontSize: 20,
        color: color.gray,
    },
    titleHeader: {
        fontSize: 40,
        color: color.primary,
    },
};

export { theme, color };
