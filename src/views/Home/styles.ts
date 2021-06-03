import styled from 'styled-components/native';
import { ITheme } from '../../theme/types';
import { ScrollViewVK } from '../../components';

const Container = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
`;

const Title = styled.Text<ITheme>`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
    background-color: yellow;
`;

const Label = styled.Text`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

const Button = styled.TouchableOpacity`
    background-color: ${(props: any) => props.theme.red};
    padding: 10px;
`;

const ScrollViewAppVk = styled(ScrollViewVK).attrs({})``;
export { Container, Title, Button, Label, ScrollViewAppVk };
