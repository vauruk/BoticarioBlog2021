import React from 'react';
import {StackRoute} from 'routes/types';
import {SignInRoutes} from './types';
import {SignIn} from '../../views';
import {Text} from 'react-native';

const routes: StackRoute[] = [
  {
    name: SignInRoutes.Login,
    component: () => <SignIn />,
    options: {
      animationEnabled: false,
      headerTransparent: true,
      headerTitle: () => <Text>tedsada</Text>,
      headerLeft: () => <Text>tedsada</Text>,
    },
  },
];

export {routes};
