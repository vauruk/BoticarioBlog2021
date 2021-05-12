import styled, { css } from 'styled-components/native';
import { RowVK, ColVK, ImageVK } from '../index';

const ContentVK = styled.View`
    width: 100%;
    border-width: 0.5px;
    border-color: ${(props: any) => props.theme.ligthGrayColor};
    background-color: ${(props: any) => props.theme.white};
`;

const ImageItemVK = styled(ImageVK)``;
const Row = styled(RowVK)`
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
`;
const ColA = styled(ColVK)``;
const NameUser = styled.Text`
    color: ${(props: any) => props.theme.text.color};
    font-size: ${(props: any) => props.theme.text.fontSize}px;
    padding: 10px;
    text-align: center;
`;

export { ContentVK, Row, ColA, NameUser, ImageItemVK };
