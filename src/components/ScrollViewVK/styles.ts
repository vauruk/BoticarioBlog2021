import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

const ScrollViewVk = styled(ScrollView).attrs({
    contentContainerStyle: { justifyContent: 'center', alignItems: 'center' },
})`
    width: 100%;
    height: 100%;
`;

export { ScrollViewVk };
