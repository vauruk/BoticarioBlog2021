import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducers';
import { FormState, SetFieldPayload, AutorizeResponse } from './types';
import { initialFieldState } from '../common/types';
import { TypeMessage } from '../../components/AlertVK/types';
import { UserService } from '../../services';
import md5 from 'crypto-js/md5';

export const initialState: FormState = {
    loading: false,
    user: undefined,
    token: undefined,
    submitError: undefined,
    typeMessage: TypeMessage.success,
    fields: {
        username: initialFieldState,
        password: initialFieldState,
    },
};

/**
 * metodo de autenticacao
 * entradas Login e Password
 */
export const authenticate = createAsyncThunk(
    'loginForm/authorize',
    async (args = undefined, thunkAPI) => {
        const {
            loginForm: { fields },
        } = thunkAPI.getState() as RootState;
        const { username, password } = fields;
        try {
            const userReturn = await UserService.authenticate(
                username.value,
                password.value,
            );

            console.log('userReturn', userReturn);
            if (userReturn) {
                const token: string = md5(username.value).toString();
                return {
                    token,
                    user: userReturn,
                } as AutorizeResponse;
            } else {
                throw { data: { error: 'Usuário ou senha estão incorretos.' } };
            }
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);
/**
 *
 * Metodo criar o usuario administrador
 */
export const startAdmin = createAsyncThunk(
    'loginForm/createUserAdmin',
    async (args = undefined, thunkAPI) => {
        try {
            const dataReturn = UserService.startAdmin();
            return dataReturn;
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
            return newState;
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(authenticate.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(
            authenticate.fulfilled,
            (state: FormState, action: PayloadAction<AutorizeResponse>) => {
                const newstate = { ...state };
                const { token, user } = action.payload;
                newstate.submitError = undefined;
                newstate.loading = false;
                newstate.token = token;
                newstate.user = user;
                return newstate;
            },
        );
        builder.addCase(
            authenticate.rejected,
            (state: FormState, action: PayloadAction<any>) => {
                const newstate = { ...state };
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
