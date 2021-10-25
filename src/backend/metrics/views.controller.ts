import {NextApiRequest} from 'next';
import {Method} from '../constants';
import {Controller} from '../types';
import {extractQueryFromRequest} from '../utils';
import {metricsService} from './metrics.service';

export interface UpdateViewsByPostIdResponse {
  status: 'ok' | 'error';
}

export class ViewsController implements Controller {
  public [Method.Patch] = async (
    req: NextApiRequest,
  ): Promise<UpdateViewsByPostIdResponse> => {
    const postId = extractQueryFromRequest(req, 'postId');
    if (!postId) {
      return {status: 'error'};
    }

    await metricsService.updateViewsByPostId(postId);

    return {status: 'ok'};
  };
}

export const viewsController = new ViewsController();
