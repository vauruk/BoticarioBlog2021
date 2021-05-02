import React from 'react';
import { Props } from '../../components/AlertVK/types';
import { AlertVK } from '../../components';

const useAlertVK = (props: Props) => {
    const { type, message, style, testID } = props;
    if (message) {
        return (
            <>
                <AlertVK
                    testID={testID}
                    type={type}
                    message={message}
                    style={style}
                />
            </>
        );
    }
    return <></>;
};

export default useAlertVK;
