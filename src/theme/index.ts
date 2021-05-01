import { ITheme } from './types';

const color = {
    primary: '#0178a3',
    secondary: '#ffee44',
    white: '#334455',
    colorBg: '#fffeff',
};

const theme: ITheme = {
    primaryColor: color.primary,
    secondaryColor: color.secondary,
    backgroundColor: color.colorBg,
    title: {
        fontSize: 30,
        color: color.white,
    },
    text: {
        fontSize: 20,
        color: color.white,
    },
    titleHeader: {
        fontSize: 40,
        color: color.primary,
    },
};

export { theme, color };
