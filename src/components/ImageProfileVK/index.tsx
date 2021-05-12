import React from 'react';
import { Props } from './types';
import { ContentVK, Row, ColA, NameUser, ImageItemVK } from './styles';

const ImageProfileVK: React.FC<Props> = ({
    testID,
    style,
    source,
    name,
}: Props) => {
    return (
        <>
            <ContentVK testID={testID} style={style}>
                <NameUser>{name}</NameUser>
                <Row>
                    <ColA flex={0.3}>
                        <ImageItemVK
                            source={{ uri: source }}
                            width={80}
                            height={80}
                        />
                    </ColA>
                </Row>
            </ContentVK>
        </>
    );
};

export default ImageProfileVK;
