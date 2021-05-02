import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Root';
import { useTypedSelector } from '../store';

const RouterNavigation: React.FC = () => {
    const token = useTypedSelector(state => state.loginForm.token);
    return (
        <NavigationContainer>
            <RootNavigator token={token} />
        </NavigationContainer>
    );
};

export default RouterNavigation;
