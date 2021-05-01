import React from 'react';

import { ImageVK } from '../../components';
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
} from './styles';
import { theme } from '../../theme';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import boticario from '../../assets/gb.png';
import { SignInRoutes } from '../../routes/SignIn/types';
import { useAppDispatch, useTypedSelector } from '../../store';
import { setField } from '../../store/login';

const SignIn = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const username = useTypedSelector(state => state.loginForm.fields.username);

    console.log('Username', username);
    const hideKeyboard = () => {
        Keyboard.dismiss();
    };

    const navRegister = () => {
        navigation.navigate(SignInRoutes.Register);
    };

    const onChangeText = (text: string, fieldName: any) => {
        dispatch(setField({ fieldName: fieldName, value: text }));
    };
    return (
        <Container>
            <ImageVK source={boticario} width={150} height={230} />
            <Title>Boticario Blog</Title>
            <Content>
                <InputView>
                    <IconFA name="at" size={20} color={theme.primaryColor} />
                    <TextInput
                        onChangeText={(text: string) =>
                            onChangeText(text, 'username')
                        }
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        maxLength={100}
                    />
                </InputView>
                <InputView>
                    <IconFA name="key" size={20} color={theme.primaryColor} />
                    <TextInput
                        onChangeText={(text: string) =>
                            onChangeText(text, 'password')
                        }
                        autoCapitalize="none"
                        placeholder="********"
                        secureTextEntry
                        autoCompleteType="password"
                    />
                </InputView>
                <Button onPress={() => console.log('button clicado')}>
                    <ButtonLabel>Login</ButtonLabel>
                </Button>
            </Content>
            <ButtonLink onPress={navRegister}>
                <LinkLabel>Cadastrar Usuário</LinkLabel>
            </ButtonLink>
        </Container>
    );
};

export default SignIn;
