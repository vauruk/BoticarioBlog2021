import React from 'react';
import { Linking, View } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
//import { ImageProfileVK } from '../../components';
import IconFA from 'react-native-vector-icons/FontAwesome';

import { theme } from '../../theme';
import { useAppDispatch, useTypedSelector } from '../../store';
import { logout } from '../../store/login';
//import loadGravatar from '../../util/gravatar';
const CustomDrawerContent = props => {
    //function CustomDrawerContent(props) {
    const dispatch = useAppDispatch();
    const username = useTypedSelector(state => state.loginForm.fields.username);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    icon={() => (
                        <IconFA
                            name="git"
                            size={20}
                            color={theme.primaryColor}
                        />
                    )}
                    label="Git Vauruk"
                    onPress={() =>
                        Linking.openURL(
                            'https://github.com/vauruk/BoticarioBlog2021',
                        )
                    }
                />
                <DrawerItem
                    icon={() => (
                        <IconFA
                            name="sign-out"
                            size={20}
                            color={theme.primaryColor}
                        />
                    )}
                    label="Sair"
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>
        </>
    );
};

export default CustomDrawerContent;
