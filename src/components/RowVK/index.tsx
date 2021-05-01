import React from 'react';
import { Props } from './types';
import { ContentVK } from './styles';

const RowVK: React.FC<Props> = ({ testID, style, children }: Props) => {
    return (
        <>
            <ContentVK testID={testID} style={style}>
                {children}
            </ContentVK>
        </>
    );
};

export default RowVK;
