import {Method} from '../constants';
import {Controller} from '../types';
import {Metrics} from './metrics.entity';
import {metricsService} from './metrics.service';

export interface GetMetricsResponse {
  status: 'ok';
  payload: Metrics[];
}

class MetricsController implements Controller {
  public [Method.Get] = async (): Promise<GetMetricsResponse> => {
    const payload = await metricsService.findAllMetrics();

    return {status: 'ok', payload};
  };
}

export const metricsController = new MetricsController();
