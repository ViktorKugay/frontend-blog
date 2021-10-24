import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';

export function useNextQuery(key: string): string;
export function useNextQuery(key: undefined): ParsedUrlQuery;

export function useNextQuery(key: string | undefined): string | ParsedUrlQuery {
  const router = useRouter();

  if (!key) {
    return router.query;
  }

  return router.query[key] as string;
}
