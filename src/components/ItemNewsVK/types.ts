import { StyleProp, ViewStyle } from 'react-native';
import { News } from '../../store/news/types';

export interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    news?: News;
}
