import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { FormState, SetFieldPayload, AutorizeResponse } from './types';
import { initialFieldState, Field } from '../common/types';
import { TypeMessage } from '../../components/AlertVK/types';

export const initialState: FormState = {
    loading: false,
    token: undefined,
    submitError: undefined,
    fields: {
        username: initialFieldState,
        password: initialFieldState,
    },
};
const userAdmin = 'admin@admin.com';
const userPassword = 'admin';
export const authorize = createAsyncThunk(
    'loginForm/authorize',
    async (args = undefined, thunkAPI) => {
        const {
            loginForm: { fields },
        } = thunkAPI.getState() as RootState;
        const { username, password } = fields;
        try {
            if (
                username.value === userAdmin &&
                password.value === userPassword
            ) {
                return {
                    name: 'vanderson',
                    token: 'asdsaioaioidsaoidyuyu8787',
                } as AutorizeResponse;
            } else {
                throw { data: { error: 'Usuário ou senha estão incorretos.' } };
            }
        } catch (error) {
            console.log('Error: ', error);
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
        setField(state: FormState, action: PayloadAction<SetFieldPayload>) {
            const { fieldName, value } = action.payload;
            const field = state.fields[fieldName];
            field.value = value;
        },
        logout(state: FormState) {
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
        builder.addCase(
            authorize.rejected,
            (state: FormState, action: PayloadAction<any>) => {
                const newstate = { ...state };
                const { error } = action;
                console.log('authorize.rejected', error);
                newstate.submitError = 'Usuário ou senha estão incorretos.';
                newstate.typeMessage = TypeMessage.error;
                newstate.loading = false;
                return newstate;
            },
        );
    },
});

export const { setField, logout } = loginFormSlice.actions;

export default loginFormSlice.reducer;
