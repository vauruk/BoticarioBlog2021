import { NewsResponse } from '../../store/blog/types';
import HttpClient from '../ApiVK';
class BlogService {
    static listData(): Promise<NewsResponse> {
        return HttpClient.get<NewsResponse>({
            path: '/data.json',
            token: undefined,
        });
    }
}
export default BlogService;
