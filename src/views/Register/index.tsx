import React, { useEffect } from 'react';

import {
    Container,
    TextInput,
    Content,
    InputView,
    Button,
    Title,
    Row,
    ColA,
    ColB,
    ButtonLabel,
    ScrollViewAppVk,
} from './styles';
import { SignInRoutes } from '../../routes/SignIn/types';
import { IconVK, InputError } from '../common/styles';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useTypedSelector } from '../../store';
import {
    setField,
    validateField,
    register,
    cleanState,
} from '../../store/register';
import { authorize, setField as setFieldLogin } from '../../store/login';

const Register = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const registerOk = useTypedSelector(state => state.registerForm.registerOk);
    const name = useTypedSelector(state => state.registerForm.fields.name);
    const email = useTypedSelector(state => state.registerForm.fields.email);
    const password = useTypedSelector(
        state => state.registerForm.fields.password,
    );
    const retryPassword = useTypedSelector(
        state => state.registerForm.fields.retryPassword,
    );
    const hideKeyboard = () => {
        Keyboard.dismiss();
    };

    const onChangeText = (text: string, fieldName: any) => {
        dispatch(setField({ fieldName: fieldName, value: text }));
    };

    const handleSaveUser = () => {
        dispatch(register());
    };
    const navBack = () => {
        navigation.goBack();
    };

    useEffect(() => {
        if (email.value) {
            dispatch(
                validateField({
                    fieldName: 'email',
                    value: email.value,
                }),
            );
        }
    }, [email.value]);

    useEffect(() => {
        // console.log('object', name.value);
        if (name.value) {
            dispatch(
                validateField({
                    fieldName: 'name',
                    value: name.value,
                }),
            );
        }
    }, [name.value]);

    useEffect(() => {
        if (password.value) {
            dispatch(
                validateField({
                    fieldName: 'password',
                    value: password.value,
                }),
            );
        }
    }, [password.value]);

    useEffect(() => {
        if (retryPassword.value) {
            dispatch(
                validateField({
                    fieldName: 'retryPassword',
                    value: retryPassword.value,
                }),
            );
        }
    }, [retryPassword.value]);

    useEffect(() => {
        console.log('useEffect registerOk', registerOk, registerOk === 2000);
        if (registerOk === 2000) {
            console.log('useEffect registerOk', registerOk);
            dispatch(
                setFieldLogin({ fieldName: 'password', value: password.value }),
            );
            dispatch(
                setFieldLogin({ fieldName: 'username', value: email.value }),
            );
            dispatch(cleanState());
            navigation.navigate(SignInRoutes.Login);

            // dispatch(authorize());
        }
    }, [registerOk]);

    return (
        <Container>
            <ScrollViewAppVk>
                <Title>Register Blog</Title>
                <Content>
                    <InputView>
                        <IconVK name="user" size={20} />
                        <TextInput
                            placeholder="Nome"
                            keyboardType="default"
                            onChangeText={(text: string) =>
                                onChangeText(text, 'name')
                            }
                        />
                    </InputView>
                    <InputError>{name.error}</InputError>
                    <InputView>
                        <IconVK name="at" size={20} />
                        <TextInput
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(text: string) =>
                                onChangeText(text, 'email')
                            }
                        />
                    </InputView>
                    <InputError>{email.error}</InputError>
                    <InputView>
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
                    <InputError>{password.error}</InputError>
                    <InputView>
                        <IconVK name="key" size={20} />
                        <TextInput
                            onChangeText={(text: string) =>
                                onChangeText(text, 'retryPassword')
                            }
                            autoCapitalize="none"
                            placeholder="Repita Senha"
                            secureTextEntry
                            autoCompleteType="password"
                        />
                    </InputView>
                    <InputError>{retryPassword.error}</InputError>
                    <Row>
                        <ColA flex={0.5}>
                            <Button onPress={handleSaveUser}>
                                <ButtonLabel>Cadastrar</ButtonLabel>
                            </Button>
                        </ColA>
                        <ColB flex={0.5}>
                            <Button onPress={navBack}>
                                <ButtonLabel>Cancelar</ButtonLabel>
                            </Button>
                        </ColB>
                    </Row>
                </Content>
            </ScrollViewAppVk>
        </Container>
    );
};

export default Register;
