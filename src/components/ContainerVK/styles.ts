import styled from 'styled-components/native';
import { KeyboardAvoidingView, Pressable, Platform } from 'react-native';

const ContainerVK = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
`;

const KeyboardAvoidingViewVK = styled(KeyboardAvoidingView).attrs({
    keyboardVerticalOffset: 64,
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
    flex: 1;
`;

const HandlerContainerVK = styled(Pressable)`
    flex: 1;
`;

export { ContainerVK, KeyboardAvoidingViewVK, HandlerContainerVK };
