import styled from 'styled-components/native';
import { ITheme } from '../../theme/types';
import { ScrollViewVK } from '../../components';

const Container = styled.View`
    background-color: ${(props: any) => props.theme.white};
`;

const ScrollViewAppVk = styled(ScrollViewVK).attrs({})`
    padding-top: 10px;
    height: 89%;
`;

const Title = styled.Text`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

export { Container, ScrollViewAppVk, Title };
