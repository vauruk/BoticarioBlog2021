import React from 'react';
import { Alert } from 'react-native';
import { Container, ScrollViewAppVk } from './styles';
import { ItemBlogVK } from '../../../components';
import { deletePost, editPost } from '../../../store/blog';
import { useAppDispatch, useTypedSelector } from '../../../store';
import { Blog } from '../../../store/blog/types';

const BlogList = () => {
    const dispatch = useAppDispatch();
    const blogList = useTypedSelector(state => state.blogForm.blogList);
    const username = useTypedSelector(state => state.loginForm.fields.username);

    const handleDeletePost = (item: Blog) => {
        Alert.alert(
            'Deletar Mensagem',
            `Apagar a mensagem: ${item.message.content}`,
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Confirmar',
                    onPress: () => dispatch(deletePost(item)),
                },
            ],
        );
    };
    const handleEditPost = (item: Blog) => {
        dispatch(editPost(item));
    };

    return (
        <Container>
            <ScrollViewAppVk>
                {blogList &&
                    blogList.map((item, index) => (
                        <ItemBlogVK
                            blog={item}
                            key={index}
                            isMe={username.value === item.user.email}
                            onDelete={handleDeletePost}
                            onEdit={handleEditPost}
                        />
                    ))}
            </ScrollViewAppVk>
        </Container>
    );
};

export default BlogList;
