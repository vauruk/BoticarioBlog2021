import styled from 'styled-components/native';
import IconFA from 'react-native-vector-icons/FontAwesome';

const IconVK = styled(IconFA).attrs(({ theme }) => ({
    color: theme.primaryColor,
}))``;

const InputError = styled.Text`
    color: ${(props: any) => props.theme.inputError.color};
    font-size: ${(props: any) => props.theme.inputError.fontSize}px;
    height: 20px;
    margin-left: 15px;
    flex-direction: row;
`;

export { IconVK, InputError };
