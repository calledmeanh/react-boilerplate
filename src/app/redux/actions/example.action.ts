/* libs */
import { Dispatch } from 'redux';
import { createActions } from 'redux-actions';
import { AxiosRequestConfig } from 'axios';
/* apps */
import RootState from '../../../models/rootState.model';
import apiUtil from '../../../utils/api.util';

export const loadExampleActions = createActions({
  LOAD_EXAMPLE_START: (loading) => loading,
  LOAD_EXAMPLE_SUCCESS: (data) => data,
  LOAD_EXAMPLE_FAILURE: (error) => error,
});

const loadExample = (input: { url: string; config?: AxiosRequestConfig }) => (
  dispath: Dispatch,
  getState: () => RootState
) => {
  dispath(
    loadExampleActions.loadExampleStart({
      ...getState().example,
      loading: true,
    })
  );
  apiUtil
    .get({ url: input.url, config: input.config })
    .then((res: any) => {
      dispath(
        loadExampleActions.loadExampleSuccess({
          ...getState().example,
          loading: false,
          data: { ...res.data },
        })
      );
    })
    .catch((error) => {
      dispath(
        loadExampleActions.loadExampleFailure({
          ...getState().example,
          loading: false,
          error: error,
        })
      );
    });
};

const ExampleActions = {
  loadExample,
};

export default ExampleActions;
