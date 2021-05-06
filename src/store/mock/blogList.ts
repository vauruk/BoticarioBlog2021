import { Blog, User, Message } from '../blog/types';
import { uuid } from 'uuidv4';

const user1: User = {
    name: 'Jorge Silva',
    profile_picture:
        'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
};
const user2: User = {
    name: 'Maria Eduarda Vauruk',
    profile_picture:
        'https://i.pinimg.com/originals/7d/42/da/7d42da84f5caae39615dab296badc057.jpg',
};

const message: Message = {
    uuid: Math.floor(Math.random() * 10000),
    content: 'Ola pesoal tudo de bom ',
    created_at: '2021-02-02T15:10:33Z',
};
const message2: Message = {
    uuid: Math.floor(Math.random() * 10000),
    content: 'Boa noite  ',
    created_at: '2021-03-02T15:10:33Z',
};

const blogList: [Blog] = [
    {
        user: user1,
        message: message,
    },
    {
        user: user2,
        message: message2,
    },
];
export { blogList };
