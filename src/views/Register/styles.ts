import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { ContainerVK, ColVK, RowVK, ScrollViewVK } from '../../components';

const Container = styled(ContainerVK).attrs({})``;

const Content = styled.View`
    background-color: ${(props: any) => props.theme.gray2};
    padding: 30px;
    border-radius: 10px;
    width: 90%;
`;

const TextInput = styled.TextInput`
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
    margin-top: 20px;
`;

const Button = styled.TouchableOpacity.attrs(({ disabled }) => ({
    disabled: disabled,
}))`
    background-color: ${({ theme, disabled }) =>
        disabled ? theme.ligthGrayColor : theme.bgButtonColor};
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    width: 110%;
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
    color: ${(props: any) => props.theme.white};
`;

const LinkLabel = styled.Text`
    font-size: 15px;
    color: ${(props: any) => props.theme.black};
`;

const HandlerContainer = styled(Pressable)`
    flex: 1;
`;
const Row = styled(RowVK)`
    margin-top: 10px;
`;
const ColA = styled(ColVK)`
    padding-right: 10px;
    padding-left: 7px;
`;
const ColB = styled(ColVK)`
    padding-left: 10px;
`;

const ScrollViewAppVk = styled(ScrollViewVK).attrs({})``;
export {
    Container,
    Title,
    ScrollViewAppVk,
    Button,
    Content,
    TextInput,
    InputView,
    LinkLabel,
    ButtonLabel,
    ButtonLink,
    Row,
    ColA,
    ColB,
    HandlerContainer,
};
