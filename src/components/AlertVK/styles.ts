import styled, { css } from 'styled-components/native';
import { Props, TypeMessage } from './types';
import { RowVK, ColVK } from '../../components';
import IconFA from 'react-native-vector-icons/FontAwesome';

const errorColor = css`
    ${({ theme }) => theme.errorColor}
`;
const successColor = css`
    ${({ theme }) => theme.successColor}
`;
const warningColor = css`
    ${({ theme }) => theme.warningColor}
`;
const typeSelector = (type: Props['type']) => {
    switch (type) {
        case TypeMessage.error:
            return errorColor;
        case TypeMessage.success:
            return successColor;
        case TypeMessage.warning:
            return warningColor;
    }
};

const ContentVK = styled.View<Pick<Props, 'type'>>`
    width: 100%;
    padding: 10px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ type }) => typeSelector(type)};
`;

const Row = styled(RowVK)``;
const ColA = styled(ColVK)`
    align-items: center;
    align-content: center;
`;
const ColB = styled(ColVK)`
    align-items: flex-start;
`;

const IconWarning = styled(IconFA).attrs(({ theme }) => ({
    color: theme.white,
}))``;
const IconSuccess = styled(IconFA).attrs(({ theme }) => ({
    color: theme.white,
}))``;
const IconError = styled(IconFA).attrs(({ theme }) => ({
    color: theme.white,
}))``;

const MessageLabel = styled.Text`
    font-size: 15px;
    color: ${(props: any) => props.theme.white};
`;

export {
    ContentVK,
    Row,
    ColA,
    ColB,
    IconWarning,
    IconSuccess,
    IconError,
    MessageLabel,
};
