import React from 'react';
import { Props } from './types';
import {
    ContentVK,
    Row,
    ColA,
    ColB,
    NameUser,
    TextBlog,
    TextCreated,
    ColDate,
    ImageItemVK,
} from './styles';

import moment from 'moment-timezone';
import { Config } from '../../config';

const ItemNewsVK: React.FC<Props> = ({ testID, style, news }: Props) => {
    const renderMessage = (message: string) => {
        const numChar = Number(Config.numChar);
        let msg = message;
        if (message.length > numChar) {
            msg += msg.substring(0, numChar);
            msg += ' ...';
        }
        return msg;
    };

    return (
        <>
            <ContentVK testID={testID} style={style}>
                <NameUser>{news?.user?.name}</NameUser>
                <Row>
                    <ColA flex={0.3}>
                        <ImageItemVK
                            source={{ uri: news?.user?.profile_picture }}
                            width={80}
                            height={80}
                        />
                    </ColA>
                    <ColB flex={0.7}>
                        <TextBlog>
                            {renderMessage(news?.message?.content)}
                        </TextBlog>
                    </ColB>
                </Row>
                <Row>
                    <ColDate flex={1}>
                        <TextCreated>
                            {' '}
                            Postado{' '}
                            {moment(news?.message?.created_at).fromNow()}
                        </TextCreated>
                    </ColDate>
                </Row>
            </ContentVK>
        </>
    );
};

export default ItemNewsVK;
