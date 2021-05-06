import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { FormState, TextPost, Blog, User, Message } from './types';
import md5 from 'crypto-js/md5';
import moment from 'moment-timezone';
import { blogList } from '../mock/blogList';

const loadGravatar = (email: string) => {
    const gravatarUrl = 'https://www.gravatar.com/avatar/';
    // let hashGravatar = crypto.createHash('md5').update(email).digest("hex");
    let hashGravatar = md5(email);
    let url = gravatarUrl + hashGravatar + '?d=mp&s=50';
    return url;
};

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    blogList: blogList,
    post: undefined,
    textPost: '',
};

export const fetchBlogList = createAsyncThunk(
    'blogForm/list',
    async (args = undefined, thunkAPI) => {
        const {
            blogListForm: { blogList },
        } = thunkAPI.getState() as RootState;

        try {
            /**
             * Aqui seria o ponto que se conecta com os serviços se necessario
             */
            // const dataReturn = BlogService.listData();
            // return dataReturn;
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);

export const blogFormSlice = createSlice({
    name: 'blogForm',
    initialState,
    reducers: {
        setPostTextAction(state, action: PayloadAction<TextPost>) {
            const { value } = action.payload;
            const newstate = { ...state };
            newstate.textPost = value;
            return newstate;
        },
        addPost(state, action: PayloadAction<TextPost>) {
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
            console.log('addPost', blog);
            const newstate = { ...state };
            newstate.blogList.push(blog);
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(fetchBlogList.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(
            fetchBlogList.fulfilled,
            (state: FormState, action: PayloadAction<NewsResponse>) => {
                const newstate = { ...state };
                const { news } = action.payload;
                console.log('authorize.fulfilled', news);
                newstate.submitError = undefined;
                newstate.blogList = news;

                newstate.loading = false;
                return newstate;
            },
        );
        builder.addCase(fetchBlogList.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
        });
    },
});

export const { setPostTextAction, addPost } = blogFormSlice.actions;

export default blogFormSlice.reducer;
