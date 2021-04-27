export enum SignInRoutes {
  index = '/signin',
  Login = '/signin/login',
}

export type SignInStackParamsList = {
  [SignInRoutes.Login]: undefined;
};
