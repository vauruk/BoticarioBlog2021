import React from 'react';
import { Linking } from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import IconFA from 'react-native-vector-icons/FontAwesome';

import { theme } from '../../theme';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                icon={() => (
                    <IconFA
                        name="question-circle"
                        size={20}
                        color={theme.primaryColor}
                    />
                )}
                label="Help"
                onPress={() => Linking.openURL('https://www.terra.com.br/')}
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;
