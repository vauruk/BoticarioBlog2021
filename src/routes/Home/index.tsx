import React from 'react';
import { HomeDrawerParamsList } from './types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from './config';
import CustomDrawerContent from '../SideBar';

const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const HomeNavigator = () => (
    <Drawer.Navigator
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
