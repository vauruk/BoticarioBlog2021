import { Field } from '../common/types';

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    registerOk: number | undefined;
    fields: {
        name: Field;
        email: Field;
        password: Field;
        retryPassword: Field;
    };
}

export interface SetFieldPayload {
    fieldName: keyof FormState['fields'];
    value: Field['value'];
}
export interface User {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
}
export interface RegisterResponse {
    value: string;
    code: number;
    user: User;
}
