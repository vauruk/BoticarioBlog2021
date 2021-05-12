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
    ColAction,
    ImageItemVK,
    ButtonIcon,
    ColIcon,
    RowIcon,
    IconVK,
} from './styles';

import moment from 'moment-timezone';
import { Config } from '../../config';
import { Blog } from '../../store/blog/types';

const ItemBlogVK: React.FC<Props> = ({
    testID,
    style,
    blog,
    isMe,
    onEdit,
    onDelete,
}: Props) => {
    const renderMessage = (message: string) => {
        const numChar = Number(Config.numChar);
        let msg = message;
        if (message.length > numChar) {
            msg += msg.substring(0, numChar);
            msg += ' ...';
        }
        return msg;
    };

    const _onDelete = (item: Blog) => {
        onDelete?.(item);
    };

    const _onEdit = (item: Blog) => {
        onEdit?.(item);
    };

    return (
        <>
            <ContentVK testID={testID} style={style} isMe={isMe}>
                <NameUser me={isMe}>{blog.user?.name}</NameUser>
                <Row>
                    <ColA flex={0.3}>
                        <ImageItemVK
                            source={{ uri: blog.user?.profile_picture }}
                            width={80}
                            height={80}
                        />
                    </ColA>
                    <ColB flex={0.7}>
                        <TextBlog>
                            {renderMessage(blog.message?.content)}
                        </TextBlog>
                    </ColB>
                </Row>
                <Row>
                    <ColDate flex={0.8}>
                        <TextCreated>
                            {' '}
                            {moment(blog.message?.created_at).fromNow()}
                        </TextCreated>
                    </ColDate>
                    <ColAction flex={0.2}>
                        {isMe && (
                            <RowIcon>
                                <ColIcon>
                                    <ButtonIcon
                                        disabled={false}
                                        onPress={() => _onEdit(blog)}>
                                        <IconVK name="pencil" size={18} />
                                    </ButtonIcon>
                                </ColIcon>
                                <ColIcon>
                                    <ButtonIcon
                                        disabled={false}
                                        onPress={() => _onDelete(blog)}>
                                        <IconVK name="trash" size={18} />
                                    </ButtonIcon>
                                </ColIcon>
                            </RowIcon>
                        )}
                    </ColAction>
                </Row>
            </ContentVK>
        </>
    );
};

export default ItemBlogVK;
