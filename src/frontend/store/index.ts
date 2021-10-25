import {metricsService} from '@services';

import {MetricsStore} from './metrics/Metrics';
import {PostsStore} from './posts/Posts';

export const metricsStore = new MetricsStore(metricsService);
export const postsStore = new PostsStore();
