import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(KeyboardAvoidingView).attrs({
  keyboardVerticalOffset: 64,
  behavior: 'padding',
});
export { Wrapper };
