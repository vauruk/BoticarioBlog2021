export enum HomeRoutes {
    index = '/home',
    HomeLogged = '/home/logged',
    NewsList = '/list/news',
}

export type HomeDrawerParamsList = {
    [HomeRoutes.HomeLogged]: undefined;
    [HomeRoutes.index]: undefined;
    [HomeRoutes.NewsList]: undefined;
};
