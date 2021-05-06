import styled, { css } from 'styled-components/native';
import { RowVK, ColVK, ImageVK } from '../index';
import { Props } from './types';

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

const ContentVK = styled.View<Pick<Props, 'me'>>`
    width: 100%;
    border-width: 0.5px;
    border-color: ${(props: any) => props.theme.ligthGrayColor};
    background-color: ${({ me }) => colorSelector(me)};
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
