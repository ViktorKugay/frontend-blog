import {NextApiRequest, NextApiResponse} from 'next';
import {Controller} from './types';
import {Method} from './constants';

export function successReply<T>(res: NextApiResponse, data: T): void {
  res.status(200).json(data);
}

export function extractMethodFromRequest(req: NextApiRequest): Method {
  return req.method as Method;
}

export function extractQueryFromRequest(
  req: NextApiRequest,
  key: string,
): string | undefined {
  return req.query[key] as string | undefined;
}

export function controller(handlers: Controller) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const method = extractMethodFromRequest(req);

    const handler = handlers[method];

    if (typeof handler === 'function') {
      return successReply(res, await handler(req, res));
    }
  };
}
