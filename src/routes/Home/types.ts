export enum HomeRoutes {
  index = '/home',
  HomeLogged = '/home/logged',
  ListOrder = '/list/order',
}

export type HomeDrawerParamsList = {
  [HomeRoutes.HomeLogged]: undefined;
  [HomeRoutes.index]: undefined;
  [HomeRoutes.ListOrder]: undefined;
};
