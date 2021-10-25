import {useFetchAllMetrics} from '@hooks/metrics/useFetchAllMetrics';
import {MainPage} from '@atomic/templates/MainPage/MainPage';
import {MainHead} from '@atomic/templates/MainPage/MainHead';

export default function MainRoute(): JSX.Element {
  useFetchAllMetrics();

  return (
    <>
      <MainHead />
      <MainPage />
    </>
  );
}
