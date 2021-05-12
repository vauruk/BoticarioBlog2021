import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducers';
import { FormState, SetFieldPayload, RegisterResponse, User } from './types';
import { Field } from '../common/types';
import { UserService } from '../../services';

const initialFieldState: Field = {
    value: undefined,
    error: undefined,
    isValid: false,
};

const fields = {
    name: initialFieldState,
    email: initialFieldState,
    password: initialFieldState,
    retryPassword: initialFieldState,
};

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    registerOk: undefined,
    fields: fields,
};

export const register = createAsyncThunk(
    'registerForm/register',
    async (args = undefined, thunkAPI) => {
        const {
            registerForm: { fields },
        } = thunkAPI.getState() as RootState;
        const { name, email, password } = fields;
        const user: User = {
            name: name.value,
            email: email.value,
            password: password.value,
        };
        try {
            const userAdd = await UserService.addUser(user);
            if (userAdd) {
                return {
                    value: 'Cadastrado com Sucesso',
                    code: 2000,
                    user: userAdd,
                } as RegisterResponse;
            }
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
        setField(state: FormState, action: PayloadAction<SetFieldPayload>) {
            const { fieldName, value } = action.payload;
            const field = state.fields[fieldName];
            field.value = value;
        },
        cleanState(state: FormState) {
            const newstate = { ...state };
            newstate.registerOk = undefined;
            newstate.fields = fields;
            return newstate;
        },
        validateField(
            state: FormState,
            action: PayloadAction<SetFieldPayload>,
        ) {
            const { fieldName, value } = action.payload;
            const field = state.fields[fieldName];
            switch (fieldName) {
                case 'name':
                    const nameEr = new RegExp(/(\w.+\s).+/);
                    if (!nameEr.test(value)) {
                        field.error = 'Nome inválido.';
                        field.isValid = false;
                    } else {
                        field.error = undefined;
                        field.isValid = true;
                    }
                    break;
                case 'email':
                    const nameErEmail = new RegExp(/\S+@\S+\.\S+/);
                    if (!value?.match(nameErEmail)) {
                        field.error = 'Email inválido.';
                        field.isValid = false;
                    } else {
                        field.error = undefined;
                        field.isValid = true;
                    }
                    break;
                case 'password':
                    if (value?.length <= 5) {
                        field.isValid = false;
                        field.error = 'Senha deve no minimo 6 digitos.';
                    } else {
                        field.error = undefined;
                        field.isValid = true;
                    }
                    break;
                case 'retryPassword':
                    const fieldPassword = state.fields['password'];
                    if (value !== fieldPassword.value) {
                        field.error = 'Senhas não conferem.';
                        field.isValid = false;
                    } else {
                        field.error = undefined;
                        field.isValid = true;
                    }
                    break;
            }
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(register.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(
            register.fulfilled,
            (state: FormState, action: PayloadAction<RegisterResponse>) => {
                const newstate = { ...state };
                const { value, code } = action.payload;
                newstate.submitError = undefined;
                newstate.loading = false;
                newstate.registerOk = code;
                return newstate;
            },
        );
        builder.addCase(register.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer';
            newstate.loading = false;
        });
    },
});

export const {
    setField,
    validateField,
    cleanState,
} = registerFormSlice.actions;

export default registerFormSlice.reducer;
