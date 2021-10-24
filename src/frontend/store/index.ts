import {MetricsStore} from './metrics/Metrics';
import {PostsStore} from './posts/Posts';
import {metricsService} from '../services';

export const metricsStore = new MetricsStore(metricsService);
export const postsStore = new PostsStore();
