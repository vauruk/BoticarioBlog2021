import { StyleProp, ViewStyle } from 'react-native';
import { News } from '../../store/blog/types';

export interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    news?: News;
    me: boolean;
}
