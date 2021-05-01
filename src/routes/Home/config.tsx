import React from 'react';
import { DrawerRoute } from 'routes/types';
import { HomeRoutes } from './types';
import { Home, ListOrder } from '../../views';
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
            labelStyle: { marginLeft: 240 },
            drawerIcon: () => (
                <IconFA name="home" size={20} color={theme.primaryColor} />
            ),
            headerTitle: () => <Text>HomeLogado</Text>,
        },
    },
    {
        name: HomeRoutes.ListOrder,
        component: () => <ListOrder />,
        options: {
            headerShown: true,
            title: 'Listar Pedidos',
            drawerIcon: () => (
                <IconFA name="list-alt" size={20} color={theme.primaryColor} />
            ),
            headerTitle: () => <Text>Listar Pedido</Text>,
        },
    },
];

export { routes };
