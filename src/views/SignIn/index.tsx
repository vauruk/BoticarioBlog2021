import React from 'react';

import {
  Container,
  TextInput,
  Content,
  InputView,
  Button,
  Title,
  LabelButton,
} from './styles';
import {theme} from '../../theme';
import {Keyboard} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';

const SignIn = () => {
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <Container>
      <Title>BoticarioBlog</Title>
      <Content>
        <InputView>
          <IconFA name="at" size={20} color={theme.primaryColor} />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
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
        <Button>
          <LabelButton>Button</LabelButton>
        </Button>
      </Content>
    </Container>
  );
};

export default SignIn;
