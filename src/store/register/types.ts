import { Field } from '../common/types';

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    fields: {
        name: Field;
        email: Field;
        password: Field;
    };
}

export interface SetFieldPayload {
    fieldName: keyof FormState['fields'];
    value: Field['value'];
}
