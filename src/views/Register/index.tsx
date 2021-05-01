import React from 'react';

import { ColVK, RowVK } from '../../components';
import {
    Container,
    TextInput,
    Content,
    InputView,
    Button,
    Title,
    ButtonLabel,
} from './styles';
import { theme } from '../../theme';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { useAppDispatch, useTypedSelector } from '../../store';
import { setField } from '../../store/register';

const Register = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const username = useTypedSelector(state => state.registerForm.fields.name);

    console.log('Username', username);
    const hideKeyboard = () => {
        Keyboard.dismiss();
    };

    const onChangeText = (text: string, fieldName: any) => {
        dispatch(setField({ fieldName: fieldName, value: text }));
    };
    const navBack = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <Title>Register Blog</Title>
            <Content>
                <InputView>
                    <IconFA name="user" size={20} color={theme.primaryColor} />
                    <TextInput
                        placeholder="Nome"
                        keyboardType="default"
                        onChangeText={(text: string) =>
                            onChangeText(text, 'name')
                        }
                    />
                </InputView>
                <InputView>
                    <IconFA name="at" size={20} color={theme.primaryColor} />
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(text: string) =>
                            onChangeText(text, 'email')
                        }
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
                <InputView>
                    <IconFA name="key" size={20} color={theme.primaryColor} />
                    <TextInput
                        autoCapitalize="none"
                        placeholder="********"
                        secureTextEntry
                        autoCompleteType="password"
                    />
                </InputView>
                <RowVK style={{ marginTop: 10 }}>
                    <ColVK
                        flex={0.5}
                        style={{
                            paddingRight: 10,
                        }}>
                        <Button onPress={() => console.log('button clicado')}>
                            <ButtonLabel>Cadastrar</ButtonLabel>
                        </Button>
                    </ColVK>
                    <ColVK
                        flex={0.5}
                        style={{
                            paddingLeft: 10,
                        }}>
                        <Button onPress={navBack}>
                            <ButtonLabel>Cancelar</ButtonLabel>
                        </Button>
                    </ColVK>
                </RowVK>
            </Content>
        </Container>
    );
};

export default Register;
