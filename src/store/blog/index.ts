import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState, TextPost, Blog, User, Message } from './types';

import moment from 'moment-timezone';
import { blogList } from '../mock/blogList';
import loadGravatar from '../../util/gravatar';

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    blogList: blogList,
    post: undefined,
    blog: undefined,
    textPost: '',
};

const returnIndexObj = (blogList: [Blog], uuid: number) => {
    const indexOf = blogList.findIndex(item => item.message.uuid === uuid);
    return indexOf;
};

export const blogFormSlice = createSlice({
    name: 'blogForm',
    initialState,
    reducers: {
        setPostTextAction(state: FormState, action: PayloadAction<TextPost>) {
            const { value } = action.payload;
            const newstate = { ...state };
            newstate.textPost = value;
            return newstate;
        },
        addPost(state: FormState, action: PayloadAction<TextPost>) {
            const { value, email } = action.payload;
            const user: User = {
                name: email.substring(0, email.indexOf('@')),
                email: email,
                profile_picture: loadGravatar(email),
            };
            const message: Message = {
                uuid: Math.floor(Math.random() * 10000),
                content: value,
                created_at: moment().utc().format(), //'2021-02-02T15:10:33Z'
            };
            const blog: Blog = {
                message,
                user,
            };
            const newstate = { ...state };
            newstate.blog = undefined;
            newstate.blogList.push(blog);
        },
        saveEditPost(state: FormState, action: PayloadAction<TextPost>) {
            const { value } = action.payload;
            const newstate = { ...state };
            const { blog, blogList } = newstate;

            const indexOf = returnIndexObj(blogList, blog?.message.uuid);
            blogList[indexOf].message.content = value;
        },

        deletePost(state: FormState, action: PayloadAction<Blog>) {
            const {
                message: { uuid },
            } = action.payload;
            const newstate = { ...state };
            const indexOf = returnIndexObj(newstate.blogList, uuid);
            newstate.blog = undefined;
            newstate.blogList.splice(indexOf, 1);
        },

        editPost(state: FormState, action: PayloadAction<Blog>) {
            const newstate = { ...state };
            const item = action.payload;
            newstate.blog = item;
            newstate.textPost = item.message.content;
            return newstate;
        },
    },
});

export const {
    setPostTextAction,
    addPost,
    deletePost,
    editPost,
    saveEditPost,
} = blogFormSlice.actions;

export default blogFormSlice.reducer;
