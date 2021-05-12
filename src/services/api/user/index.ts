import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../../store/register/types';
export const storageUserApp = '@ListUsersAppAsync';

class UserService {
    static authenticate = async (email: string, password: string) => {
        try {
            const value = await AsyncStorage.getItem(storageUserApp);
            if (value !== null) {
                const listUsers = JSON.parse(value);
                const user: User = listUsers.find(
                    (item: User) =>
                        item.password === password && item.email === email,
                );
                return user;
            }
        } catch (e) {
            console.log('Erro ao validar Usuário', e);
        }
        return undefined;
    };

    static addUser = async (user: User) => {
        try {
            const value = await AsyncStorage.getItem(storageUserApp);
            if (value !== null) {
                const listUsers = JSON.parse(value);
                listUsers.push(user);
                const jsonValue = JSON.stringify(listUsers);
                await AsyncStorage.setItem(storageUserApp, jsonValue);
                return user;
            } else {
                return undefined;
            }
        } catch (e) {
            console.log('Error:', e);
        }
    };

    static startAdmin = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem(storageUserApp);
            const listUsers: Array<User> = [];
            if (jsonValue === null) {
                const userAdmin: User = {
                    email: 'admin@admin.com',
                    name: 'Administrador',
                    password: 'admin',
                };
                listUsers.push(userAdmin);
                jsonValue = JSON.stringify(listUsers);
                await AsyncStorage.setItem(storageUserApp, jsonValue);
            }
        } catch (e) {
            // save error
        }
    };
}
export default UserService;
