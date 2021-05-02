import { Field } from '../common/types';
import { TypeMessage } from '../../components/AlertVK/types';
export interface FormState {
    loading: boolean;
    token: string | undefined;
    submitError: string | undefined;
    typeMessage: TypeMessage;
    fields: {
        username: Field;
        password: Field;
    };
}

export interface SetFieldPayload {
    fieldName: keyof FormState['fields'];
    value: Field['value'];
}

export interface AutorizeResponse {
    name: string;
    token: string;
}
