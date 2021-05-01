import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { Props } from './types';

const ContainerVK = styled.View`
    background-color: ${(props: any) => props.theme.backgroundColor};
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: red;
`;

const ContentVK = styled.View<Pick<Props, 'width' | 'height'>>`
    width: ${({ width }) => Number(width)};
    height: ${({ height }) => Number(height)};
    background-color: red;
`;
const HandlerContainerVK = styled(Pressable)``;

const ImageStyledVK = styled.Image.attrs({ resizeMode: 'stretch' })<
    Pick<Props, 'width' | 'height'>
>`
    width: ${({ width }) => Number(width)}px;
    height: ${({ height }) => Number(height)}px;
`;

export { ContainerVK, ContentVK, ImageStyledVK, HandlerContainerVK };
