export enum SignInRoutes {
    index = '/signin',
    Login = '/signin/login',
    Splash = '/signin/splash',
    Register = '/signin/register',
}

export type SignInStackParamsList = {
    [SignInRoutes.Login]: undefined;
    [SignInRoutes.Splash]: undefined;
    [SignInRoutes.Register]: undefined;
};
