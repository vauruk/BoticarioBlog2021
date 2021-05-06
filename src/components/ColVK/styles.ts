import styled from 'styled-components/native';
import { Props } from './types';

const ContentVK = styled.View<Pick<Props, 'flex'>>`
    flex: ${({ flex }) => Number(flex)};
    align-items: center;
    align-content: center;
`;

export { ContentVK };
