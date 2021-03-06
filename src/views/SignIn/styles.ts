import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { ContainerVK, ImageVK, ScrollViewVK } from '../../components';

const Container = styled(ContainerVK).attrs({})``;
const ImageSignVK = styled(ImageVK).attrs({})`
    margin-top: 20px;
`;

const Content = styled.View`
    background-color: ${(props: any) => props.theme.gray2};
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    flex: 1;
    flex-direction: column;
    justify-content: center;
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
    background-color: ${(props: any) => props.theme.white};
    border-radius: 20px;
    padding-left: 10px;
    margin-bottom: 5px;
    padding-right: 10px;
`;

const Title = styled.Text`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

const SubTitle = styled.Text`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

const Button = styled.TouchableOpacity`
    background-color: ${(props: any) => props.theme.bgButtonColor};
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`;
const ButtonLink = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 20px;
    justify-content: flex-end;
    align-items: flex-start;
`;

const ButtonLabel = styled.Text`
    font-size: 15px;
    color: ${(props: any) => props.theme.white};
`;

const LinkLabel = styled.Text`
    font-size: 15px;
    color: ${(props: any) => props.theme.primaryColor};
`;

const HandlerContainer = styled(Pressable)`
    flex: 1;
`;

const ScrollViewAppVk = styled(ScrollViewVK).attrs({})``;

export {
    Container,
    Title,
    ImageSignVK,
    ScrollViewAppVk,
    SubTitle,
    Button,
    Content,
    TextInput,
    InputView,
    LinkLabel,
    ButtonLabel,
    ButtonLink,
    HandlerContainer,
};
