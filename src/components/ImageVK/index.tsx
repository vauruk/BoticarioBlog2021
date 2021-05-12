import React from 'react';
import { Props } from './types';
import { ContentVK, ImageStyledVK } from './styles';
import empty from '../../assets/empty.png';

const ImageVK: React.FC<Props> = ({
    testID,
    source,
    width = 200,
    height = 200,
}: Props) => {
    return (
        <>
            <ContentVK testID={testID}>
                <ImageStyledVK
                    source={source}
                    width={width}
                    height={height}
                    defaultSource={empty}
                />
            </ContentVK>
        </>
    );
};

export default ImageVK;
