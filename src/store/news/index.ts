import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducers';
import { FormState, NewsResponse } from './types';
import { NewsService } from '../../services';

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    newsList: undefined,
};

export const fetchNewsList = createAsyncThunk(
    'newsForm/list',
    async (args = undefined, thunkAPI) => {
        const {
            newsForm: { newsList },
        } = thunkAPI.getState() as RootState;

        try {
            const dataReturn = NewsService.listData();
            return dataReturn;
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);

export const newsFormSlice = createSlice({
    name: 'newsForm',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchNewsList.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(
            fetchNewsList.fulfilled,
            (state: FormState, action: PayloadAction<NewsResponse>) => {
                const newstate = { ...state };
                const { news } = action.payload;
                newstate.submitError = undefined;
                newstate.newsList = news;

                newstate.loading = false;
                return newstate;
            },
        );
        builder.addCase(fetchNewsList.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
        });
    },
});

export default newsFormSlice.reducer;
