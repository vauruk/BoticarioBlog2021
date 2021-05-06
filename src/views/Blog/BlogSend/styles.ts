import styled from 'styled-components/native';
import { RowVK, ColVK } from '../../../components';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { Props } from './types';

const IconSendVK = styled(IconFA).attrs(({ theme, disable }) => ({
    color: !disable ? theme.primaryColor : theme.ligthGrayColor,
}))<Pick<Props, 'disable'>>`
    margin-left: 5px;
    margin-right: 6px;
`;

const Container = styled.View`
    height: 65px;
    margin: 5px;
`;
const Content = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const ContentFooter = styled.View`
    align-content: flex-end;
    align-items: flex-end;
    padding-top: 8px;
`;

const TextFooter = styled.Text`
    color: ${(props: any) => props.theme.smallText.color};
    font-size: ${(props: any) => props.theme.smallText.fontSize}px;
`;

const Row = styled(RowVK)`
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    border-width: 0.8px;
    border-color: ${(props: any) => props.theme.ligthGrayColor};
`;
const ColA = styled(ColVK)`
    align-items: flex-end;
    justify-content: center;
`;
const ColB = styled(ColVK)`
    justify-content: flex-end;
    align-items: flex-end;
`;

const TextInput = styled.TextInput.attrs({})`
    font-size: ${(props: any) => props.theme.blogText.fontSize}px;
    color: ${(props: any) => props.theme.blogText.color};
    width: 100%;
    height: 40px;
`;

const ButtonSend = styled.TouchableOpacity`
    background-color: #ffff;
    padding: 10px;
    border-radius: 20px;
`;

export {
    Container,
    Content,
    ContentFooter,
    TextFooter,
    Row,
    ColA,
    ColB,
    IconSendVK,
    TextInput,
    ButtonSend,
};
