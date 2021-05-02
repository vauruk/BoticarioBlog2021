import React from 'react';
import { Props, TypeMessage } from './types';
import {
    ContentVK,
    Row,
    ColA,
    ColB,
    IconError,
    IconSuccess,
    IconWarning,
    MessageLabel,
} from './styles';

const AlertVK: React.FC<Props> = ({
    testID,
    style,
    message,
    type = TypeMessage.success,
}: Props) => {
    const renderIcon = () => {
        if (type === TypeMessage.error) {
            return <IconError name="exclamation-circle" size={20} />;
        } else if (type === TypeMessage.success) {
            return <IconSuccess name="check-circle" size={20} />;
        } else if (type === TypeMessage.warning) {
            return <IconWarning name="exclamation-triangle" size={20} />;
        }
    };
    return (
        <>
            <ContentVK testID={testID} style={style} type={type}>
                <Row>
                    <ColA flex={0.1}>{renderIcon()}</ColA>
                    <ColB flex={0.9}>
                        <MessageLabel>{message}</MessageLabel>
                    </ColB>
                </Row>
            </ContentVK>
        </>
    );
};

export default AlertVK;
