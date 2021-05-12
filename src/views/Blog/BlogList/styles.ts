import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { ScrollViewVK } from '../../../components';
//const windowHeight = Dimensions.get('window').height * 0.78;

const Container = styled.View`
    height: 87%;
`;

const ScrollViewAppVk = styled(ScrollViewVK).attrs({})`
    padding-top: 13px;
    padding-bottom: 20px;
    margin-bottom: 12px;
`;

const Title = styled.Text`
    color: ${(props: any) => props.theme.title.color};
    font-size: ${(props: any) => props.theme.title.fontSize}px;
`;

export { Container, ScrollViewAppVk, Title };
