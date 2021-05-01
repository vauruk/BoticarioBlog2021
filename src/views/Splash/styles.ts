import styled from 'styled-components/native';
import { ITheme } from '../../theme/types';

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

const Title = styled.Text<ITheme>`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

const Label = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
    padding: 10px;
`;

const Button = styled.TouchableOpacity`
    background-color: #ee4433;
    padding: 10px;
`;
export { Container, Title, Button, Label, Content };
