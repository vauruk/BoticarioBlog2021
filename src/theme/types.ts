export interface ITheme {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    white: string;
    black: string;
    blue: string;
    gray2: string;
    ligthGrayColor: string;
    errorColor: string;
    successColor: string;
    warningColor: string;
    titleHeader: TitleText;
    title: TitleText;
}

export interface TitleText {
    color: string;
    fontSize: number;
}
