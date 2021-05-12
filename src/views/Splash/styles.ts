import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { RowVK, ColVK } from '../../components';

const Container = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Content = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    padding-top: 15px;
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

const Label = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
    padding: 10px;
`;
const LabelLink = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
    padding: 10px;
    text-decoration-line: underline;
`;

const Button = styled.TouchableOpacity`
    padding: 10px;
`;

const Row = styled(RowVK)`
    padding-left: 10px;
    padding-right: 10px;
`;
const ColA = styled(ColVK)`
    align-items: flex-end;
    justify-content: center;
`;
const ColB = styled(ColVK)`
    align-items: flex-start;
`;

const ActivityIndicatorVK = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.primaryColor,
}))``;
export {
    Container,
    Title,
    Button,
    Label,
    LabelLink,
    Content,
    Row,
    ColA,
    ColB,
    ActivityIndicatorVK,
};
