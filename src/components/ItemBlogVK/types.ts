import { StyleProp, ViewStyle } from 'react-native';
import { Blog } from '../../store/blog/types';

export interface Props {
    testID?: string;
    style?: StyleProp<ViewStyle>;
    blog: Blog;
    isMe: boolean;
    onEdit?: (item: Blog) => void;
    onDelete?: (item: Blog) => void;
}
