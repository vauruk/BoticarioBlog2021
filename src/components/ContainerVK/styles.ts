import styled from 'styled-components/native';
import { KeyboardAvoidingView, Pressable } from 'react-native';

const ContainerVK = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const KeyboardAvoidingViewVK = styled(KeyboardAvoidingView).attrs({
    keyboardVerticalOffset: 10,
    behavior: 'padding',
})`
    flex: 1;
`;

const HandlerContainerVK = styled(Pressable)`
    flex: 1;
`;

export { ContainerVK, KeyboardAvoidingViewVK, HandlerContainerVK };
