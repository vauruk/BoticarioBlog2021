import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { Props } from './types';

const ContainerVK = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ContentVK = styled.View<Pick<Props, 'width' | 'height'>>`
    ${({ width }) =>
        width &&
        `
     width: ${width}px;
  `}
    ${({ height }) =>
        height &&
        `
     height: ${height}px;
  `}
`;

const HandlerContainerVK = styled(Pressable)``;

const ImageStyledVK = styled.Image.attrs({ resizeMode: 'stretch' })<
    Pick<Props, 'width' | 'height'>
>`
    ${({ width }) =>
        width &&
        `
     width: ${width}px;
  `}
    ${({ height }) =>
        height &&
        `
     height: ${height}px;
  `}
`;

export { ContainerVK, ContentVK, ImageStyledVK, HandlerContainerVK };
