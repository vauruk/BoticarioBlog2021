import React from 'react';
import { Props } from './types';
import { ScrollViewVk } from './styles';

const ScrollViewVK: React.FC<Props> = ({ testID, style, children }: Props) => {
    return (
        <>
            <ScrollViewVk testID={testID} style={style}>
                {children}
            </ScrollViewVk>
        </>
    );
};

export default ScrollViewVK;
