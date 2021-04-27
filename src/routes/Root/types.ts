import { SignInRoutes } from '../SignIn';

export enum RootRoutes {
  index = '/',
}

export type RootStackParamsList = {
  [RootRoutes.index]: undefined;
  [SignInRoutes.index]: undefined;
};

export interface Props {
  token?: string;
}
