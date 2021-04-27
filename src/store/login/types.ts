export interface Field {
  value: number | string | undefined;
  isValid: boolean;
  error: string | undefined;
}

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
