import styled from 'styled-components/native';
import { KeyboardAvoidingView, Pressable } from 'react-native';
import { ITheme } from '../../theme/types';
import { ContainerViewVK } from '../../components';

const Container = styled(ContainerViewVK).attrs()``;

const Content = styled.View`
    background-color: #e2e3e2;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
`;

const TextInput = styled.TextInput.attrs({})`
    flex: 1;
    margin-left: 10px;
`;

const InputView = styled.View`
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 20px;
    padding-left: 10;
    margin-bottom: 5px;
    padding-right: 10;
`;

const Title = styled.Text<ITheme>`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

const SubTitle = styled.Text<ITheme>`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

const Button = styled.TouchableOpacity`
    background-color: #909090;
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
const ButtonLink = styled.TouchableOpacity`
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

const ButtonLabel = styled.Text`
    font-size: 15px;
    color: #ffffff;
`;

const LinkLabel = styled.Text`
    font-size: 15px;
    color: #000000;
`;

const WrapperKeyboard = styled(KeyboardAvoidingView).attrs({
    keyboardVerticalOffset: 10,
    behavior: 'padding',
})`
    flex: 1;
`;

const HandlerContainer = styled(Pressable)`
    flex: 1;
`;

export {
    Container,
    Title,
    SubTitle,
    Button,
    Content,
    TextInput,
    InputView,
    LinkLabel,
    ButtonLabel,
    ButtonLink,
    WrapperKeyboard,
    HandlerContainer,
};
