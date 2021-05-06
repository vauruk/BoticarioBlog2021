import React from 'react';
import { DrawerRoute } from 'routes/types';
import { HomeRoutes } from './types';
import { Home, NewsList } from '../../views';
import { Text } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../theme';

const routes: DrawerRoute[] = [
    {
        name: HomeRoutes.HomeLogged,
        component: () => <Home />,
        options: {
            headerShown: true,
            title: 'Inicial',
            headerTintColor: theme.primaryColor,
            drawerIcon: () => (
                <IconFA name="home" size={20} color={theme.primaryColor} />
            ),
            headerTitle: () => <Text>News</Text>,
        },
    },
    {
        name: HomeRoutes.NewsList,
        component: () => <NewsList />,
        options: {
            headerShown: true,
            title: 'Noticias',
            headerTintColor: theme.primaryColor,
            drawerIcon: () => (
                <IconFA name="file" size={20} color={theme.primaryColor} />
            ),
            headerTitle: () => <Text>Noticias</Text>,
        },
    },
];

export { routes };
