import React from 'react';
import { Props } from './types';
import { ContentVK, ImageStyledVK } from './styles';

const ImageVK: React.FC<Props> = ({
    testID,
    source,
    style,
    width = 200,
    height = 200,
}: Props) => {
    return (
        <>
            <ContentVK testID={testID}>
                <ImageStyledVK
                    style={style}
                    source={source}
                    width={width}
                    height={height}
                />
            </ContentVK>
        </>
    );
};

export default ImageVK;
