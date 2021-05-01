import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
    testID?: string;
    source: string;
    style?: StyleProp<ViewStyle>;
    width?: number;
    height?: number;
}
