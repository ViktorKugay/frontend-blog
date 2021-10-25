import {NextApiRequest, NextApiResponse} from 'next';
import {Method} from './constants';

export type NextApiRouteHandler = (
  req: NextApiRequest,
  res?: NextApiResponse,
) => Promise<any>;

export interface Controller {
  [Method.Get]?: NextApiRouteHandler;
  [Method.Post]?: NextApiRouteHandler;
  [Method.Patch]?: NextApiRouteHandler;
  [Method.Delete]?: NextApiRouteHandler;
}
