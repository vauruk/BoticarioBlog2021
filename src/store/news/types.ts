export interface User {
    name: string;
    profile_picture: string;
}
export interface Message {
    content: string;
    created_at: string;
}

export interface NewsResponse {
    news: [News];
}
export interface News {
    user: User;
    message: Message;
}

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    newsList: [News] | undefined;
}
export type SetPayloadMessage = Message;
