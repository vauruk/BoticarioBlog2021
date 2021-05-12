export interface User {
    name: string;
    profile_picture: string;
    email?: string;
}
export interface Message {
    uuid: number;
    content: string;
    created_at: string;
}

export interface BlogResponse {
    news: [Blog];
}
export interface Blog {
    user: User;
    message: Message;
}

export interface FormState {
    loading: boolean;
    submitError: string | undefined;
    blogList: [Blog];
    post: Message | undefined;
    textPost: string;
    blog: Blog | undefined;
}
export type SetPayloadMessage = Message;

export interface TextPost {
    value: string;
    email?: string | undefined;
}
