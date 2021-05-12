import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    name: string;
    source: string;
}
