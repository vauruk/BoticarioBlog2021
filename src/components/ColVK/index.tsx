import React from 'react';
import { Props } from './types';
import { ContentVK } from './styles';

const ColVK: React.FC<Props> = ({
    testID,
    style,
    children,
    flex = 1,
}: Props) => {
    return (
        <>
            <ContentVK testID={testID} style={style} flex={flex}>
                {children}
            </ContentVK>
        </>
    );
};

export default ColVK;
