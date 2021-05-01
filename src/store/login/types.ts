import { Field } from '../common/types';
export interface FormState {
    loading: boolean;
    hasCredentials: string;
    submitError: string | undefined;
    fields: {
        username: Field;
        password: Field;
    };
}

export interface SetFieldPayload {
    fieldName: keyof FormState['fields'];
    value: Field['value'];
}
