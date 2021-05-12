import React from 'react';
import { HomeDrawerParamsList } from './types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from './config';
import CustomDrawerContent from '../SideBar';
import { theme } from '../../theme';

const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const HomeNavigator = () => (
    <Drawer.Navigator
        drawerLabel={'teste'}
        drawerContentOptions={{
            activeTintColor: theme.ligthGrayColor,
            // itemStyle: { marginVertical: 30 },
        }}
        drawerStyle={{}}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {routes.map(route => (
            <Drawer.Screen
                key={route.name}
                name={route.name as any}
                options={route.options}>
                {route.component}
            </Drawer.Screen>
        ))}
    </Drawer.Navigator>
);

export default HomeNavigator;
