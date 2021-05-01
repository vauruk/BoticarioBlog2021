import React from 'react';
import { StackRoute } from 'routes/types';
import { SignInRoutes } from './types';
import { SignIn, Splash, Register } from '../../views';
import { Text } from 'react-native';

const routes: StackRoute[] = [
    {
        name: SignInRoutes.Splash,
        component: () => <Splash />,
        options: {
            animationEnabled: false,
            headerTransparent: true,
        },
    },
    {
        name: SignInRoutes.Login,
        component: () => <SignIn />,
        options: {
            animationEnabled: false,
            headerTransparent: true,
        },
    },
    {
        name: SignInRoutes.Register,
        component: () => <Register />,
        options: {
            animationEnabled: false,
            headerTransparent: true,
            headerTitle: () => <Text>a</Text>,
            headerLeft: () => <Text>a</Text>,
        },
    },
];

export { routes };
