import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { FormState, SetFieldPayload } from './types';
import { initialFieldState } from '../common/types';

export const initialState: FormState = {
    loading: false,
    hasCredentials: 'unset',
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
            newState.hasCredentials = 'dsad';
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(authorize.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(authorize.fulfilled, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = false;
        });
        builder.addCase(authorize.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
        });
    },
});

export const { setField, logout } = loginFormSlice.actions;

export default loginFormSlice.reducer;
