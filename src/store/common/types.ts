export interface Field {
    value: number | string | undefined;
    isValid: boolean;
    error: string | undefined;
}

export const initialFieldState: Field = {
    value: undefined,
    error: undefined,
    isValid: false,
};
