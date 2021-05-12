import styled, { css } from 'styled-components/native';
import { RowVK, ColVK, ImageVK } from '../index';
import { Props } from './types';
import IconFA from 'react-native-vector-icons/FontAwesome';

const meNoColor = css`
    ${({ theme }) => theme.gray2}
`;
const meColor = css`
    ${({ theme }) => theme.white}
`;
const colorSelector = (me: boolean) => {
    if (me) {
        return meNoColor;
    } else {
        return meColor;
    }
};

const ContentVK = styled.View<Pick<Props, 'isMe'>>`
    width: 100%;
    border-width: 0.5px;
    border-color: ${(props: any) => props.theme.ligthGrayColor};
    background-color: ${({ isMe }) => colorSelector(isMe)};
`;

const ImageItemVK = styled(ImageVK)``;
const Row = styled(RowVK)`
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
`;
const ColA = styled(ColVK)``;
const ColB = styled(ColVK)`
    align-items: flex-start;
`;
const ColDate = styled(ColVK)`
    padding-left: 10px;
    align-items: flex-start;
    justify-content: center;
`;
const ColAction = styled(ColVK)`
    align-content: flex-end;
    align-items: flex-end;
    justify-content: center;
`;
const NameUser = styled.Text<Pick<Props, 'me'>>`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
    padding: 10px;
    ${({ me }) =>
        !me &&
        `
     text-align: right;
  `}
`;
const TextBlog = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
`;
const TextCreated = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.smallText.fontSize}px;
`;

const ButtonIcon = styled.TouchableOpacity`
    padding: 2px;
    border-radius: 20px;
`;

const IconVK = styled(IconFA).attrs(({ theme }) => ({
    color: theme.primaryColor,
}))`
    margin-left: 5px;
    margin-right: 6px;
`;

const ColIcon = styled(ColVK)``;
const RowIcon = styled(RowVK)`
    align-content: center;
    align-items: flex-end;
`;

export {
    ContentVK,
    IconVK,
    ButtonIcon,
    Row,
    ColA,
    ColB,
    NameUser,
    TextBlog,
    TextCreated,
    ColDate,
    ColIcon,
    ColAction,
    RowIcon,
    ImageItemVK,
};
