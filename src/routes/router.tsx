import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './Root';

const RouterNavigation: React.FC = () => {
  const token = '';
  return (
    <NavigationContainer>
      <RootNavigator token={token} />
    </NavigationContainer>
  );
};

export default RouterNavigation;
