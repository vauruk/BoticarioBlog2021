import { NewsResponse } from '../../../store/blog/types';
import HttpClient from '../../ApiVK';

interface NewsParameter {}
class NewsService {
    static listData(): Promise<NewsResponse> {
        return HttpClient.get<NewsParameter, NewsResponse>({
            path: '/data.json',
            token: undefined,
        });
    }
}
export default NewsService;
