import React, { useEffect } from 'react';

import {
    Container,
    TextInput,
    Content,
    InputView,
    Button,
    Title,
    ButtonLabel,
    ButtonLink,
    LinkLabel,
    ImageSignVK,
    ScrollViewAppVk,
} from './styles';

import { IconVK, InputError } from '../common/styles';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import boticario from '../../assets/gb.png';
import { SignInRoutes } from '../../routes/SignIn/types';
import { useAppDispatch, useTypedSelector } from '../../store';
import { authenticate, setField, startAdmin } from '../../store/login';
import { userAlertVK } from '../../hooks';

const SignIn = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const username = useTypedSelector(state => state.loginForm.fields.username);
    const loading = useTypedSelector(state => state.loginForm.loading);
    // const token = useTypedSelector(state => state.loginForm.token);
    const submitError = useTypedSelector(state => state.loginForm.submitError);
    const typeMessage = useTypedSelector(state => state.loginForm.typeMessage);
    const alert = userAlertVK({
        type: typeMessage,
        message: submitError,
    });

    const hideKeyboard = () => {
        Keyboard.dismiss();
    };

    const navRegister = () => {
        navigation.navigate(SignInRoutes.Register);
    };

    const onChangeText = (text: string, fieldName: any) => {
        dispatch(setField({ fieldName: fieldName, value: text }));
    };
    const onAutorize = () => {
        dispatch(authenticate());
    };

    useEffect(() => {
        dispatch(startAdmin());
    });

    return (
        <Container>
            {alert}
            <ScrollViewAppVk>
                <ImageSignVK
                    testID="testId12"
                    source={boticario}
                    width={130}
                    height={180}
                />
                <Title testID="testId13">Boticario Blog</Title>
                <Content>
                    <InputView>
                        <IconVK name="at" size={20} />
                        <TextInput
                            testID="testId15"
                            onChangeText={(text: string) =>
                                onChangeText(text, 'username')
                            }
                            value={username.value}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            maxLength={100}
                        />
                    </InputView>
                    <InputError>{}</InputError>
                    <InputView testID="testId16">
                        <IconVK name="key" size={20} />
                        <TextInput
                            onChangeText={(text: string) =>
                                onChangeText(text, 'password')
                            }
                            autoCapitalize="none"
                            placeholder="Senha"
                            secureTextEntry
                            autoCompleteType="password"
                        />
                    </InputView>
                    <InputError>{}</InputError>

                    <Button testID="testId16" onPress={onAutorize}>
                        <ButtonLabel>Login</ButtonLabel>
                    </Button>
                    <ButtonLink testID="testId17" onPress={navRegister}>
                        <LinkLabel>Cadastrar</LinkLabel>
                    </ButtonLink>
                </Content>
            </ScrollViewAppVk>
        </Container>
    );
};

export default SignIn;
