export interface User {
    name: string;
    profile_picture: string;
}
export interface Message {
    content: string;
    created_at: string;
}

export interface News {
    user: User;
    message: Message;
}

export type NewsResponse = News;
