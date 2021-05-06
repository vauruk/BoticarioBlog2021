import React from 'react';
import { Container, ScrollViewAppVk } from './styles';
import { useTypedSelector } from '../../../store';
import { ItemBlogVK } from '../../../components';

const BlogList = () => {
    const blogList = useTypedSelector(state => state.blogForm.blogList);
    const username = useTypedSelector(state => state.loginForm.fields.username);

    return (
        <Container>
            <ScrollViewAppVk>
                {blogList &&
                    blogList.map((item, index) => (
                        <ItemBlogVK
                            news={item}
                            key={index}
                            me={username.value === item.user.email}
                        />
                    ))}
            </ScrollViewAppVk>
        </Container>
    );
};

export default BlogList;
