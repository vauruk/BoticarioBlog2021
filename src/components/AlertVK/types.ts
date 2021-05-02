import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    message?: string;
    type: TypeMessage; //'success' | 'warning' | 'error';
}

export enum TypeMessage {
    success,
    warning,
    error,
}
