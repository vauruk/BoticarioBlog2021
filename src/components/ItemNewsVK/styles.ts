import styled from 'styled-components/native';
import { RowVK, ColVK, ImageVK } from '../index';

const ContentVK = styled.View`
    width: 100%;
    border-width: 0.5px;
    border-color: ${(props: any) => props.theme.ligthGrayColor};
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
    padding-top: 10px;
    padding-right: 10px;
    align-items: flex-end;
`;
const NameUser = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
    padding-left: 10px;
    padding-right: 10px;
`;
const TextBlog = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
`;
const TextCreated = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.smallText.fontSize}px;
`;

export {
    ContentVK,
    Row,
    ColA,
    ColB,
    NameUser,
    TextBlog,
    TextCreated,
    ColDate,
    ImageItemVK,
};
