import React from 'react';

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
import { IconVK } from '../common/styles';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useTypedSelector } from '../../store';
import { setField } from '../../store/register';

const Register = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

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
                    <InputView>
                        <IconVK name="key" size={20} />
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
                        <IconVK name="key" size={20} c />
                        <TextInput
                            autoCapitalize="none"
                            placeholder="********"
                            secureTextEntry
                            autoCompleteType="password"
                        />
                    </InputView>
                    <Row>
                        <ColA flex={0.5}>
                            <Button
                                onPress={() => console.log('button clicado')}>
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
