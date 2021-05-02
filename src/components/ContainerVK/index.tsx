import React from 'react';
import { Props } from './types';
import {
    KeyboardAvoidingViewVK,
    HandlerContainerVK,
    ContainerVK,
} from './styles';
import { Platform, Keyboard, SafeAreaView } from 'react-native';

const ContainerViewVK: React.FC<Props> = ({ children, testID }: Props) => {
    const hideKeyboard = () => {
        Keyboard.dismiss();
    };
    return (
        <>
            <SafeAreaView />
            <KeyboardAvoidingViewVK
                testID={testID}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <HandlerContainerVK onPressIn={hideKeyboard}>
                    <ContainerVK>{children}</ContainerVK>
                </HandlerContainerVK>
            </KeyboardAvoidingViewVK>
        </>
    );
};

export default ContainerViewVK;
