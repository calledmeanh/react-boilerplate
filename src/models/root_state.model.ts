/* apps */
import ErrorModel from './error.model';
import ExampleModel from './example.model';

export declare module AppState {
  export type BaseState<T> = {
    data: T;
    loading: boolean;
    error: ErrorModel;
  };
}

type RootState = {
  example: AppState.BaseState<ExampleModel>;
  /* other modules */
};

export default RootState;
