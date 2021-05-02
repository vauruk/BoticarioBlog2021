import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { FormState, SetFieldPayload, AutorizeResponse } from './types';
import { initialFieldState } from '../common/types';

export const initialState: FormState = {
    loading: false,
    token: undefined,
    submitError: undefined,
    fields: {
        username: initialFieldState,
        password: initialFieldState,
    },
};

export const authorize = createAsyncThunk(
    'loginForm/authorize',
    async (args = undefined, thunkAPI) => {
        const {
            loginForm: { fields },
        } = thunkAPI.getState() as RootState;
        const { username, password } = fields;
        console.log('Login', username, password);
        try {
            return {
                name: 'vanderson',
                token: 'asdsaioaioidsaoidyuyu8787',
            } as AutorizeResponse;
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);

export const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setField(state, action: PayloadAction<SetFieldPayload>) {
            const { fieldName, value } = action.payload;
            console.log(fieldName, value);
            const field = state.fields[fieldName];
            field.value = value;
        },
        logout(state) {
            const newState = { ...state };
            newState.token = undefined;
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(authorize.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(
            authorize.fulfilled,
            (state: FormState, action: PayloadAction<AutorizeResponse>) => {
                const newstate = { ...state };
                const { name, token } = action.payload;
                console.log('authorize.fulfilled', newstate, name, token);
                newstate.submitError = undefined;
                newstate.loading = false;
                newstate.token = token;
                return newstate;
            },
        );
        builder.addCase(authorize.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
        });
    },
});

export const { setField, logout } = loginFormSlice.actions;

export default loginFormSlice.reducer;
