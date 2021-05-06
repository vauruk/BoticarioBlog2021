import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { FormState, SetFieldPayload } from './types';
import { Field } from '../common/types';

const initialFieldState: Field = {
    value: undefined,
    error: undefined,
    isValid: false,
};

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    fields: {
        name: initialFieldState,
        email: initialFieldState,
        password: initialFieldState,
    },
};

export const register = createAsyncThunk(
    'registerForm/register',
    async (args = undefined, thunkAPI) => {
        const {
            registerForm: { fields },
        } = thunkAPI.getState() as RootState;
        const { name, email, password } = fields;
        console.log('Register', name, password, email);
        try {
            setTimeout(() => {
                console.log('object return payload');
            }, 5000);
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);

export const registerFormSlice = createSlice({
    name: 'registerForm',
    initialState,
    reducers: {
        setField(state, action: PayloadAction<SetFieldPayload>) {
            const { fieldName, value } = action.payload;
            const field = state.fields[fieldName];
            field.value = value;
        },
        logout(state) {
            const newState = { ...state };
            //  newState.hasCredentials = 'dsad';
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(register.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(register.fulfilled, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = false;
        });
        builder.addCase(register.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
        });
    },
});

export const { setField, logout } = registerFormSlice.actions;

export default registerFormSlice.reducer;
