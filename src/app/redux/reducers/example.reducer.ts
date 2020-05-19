/* libs */
import { handleActions, combineActions } from 'redux-actions';
/* apps */
import { loadExampleActions } from '../actions/example.action';
import { AppState } from '../../../models/root_state.model';
import ExampleModel from '../../../models/example.model';

let exampleState: AppState.BaseState<ExampleModel> = {
  data: {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  },
  loading: false,
  error: {
    status: 0,
    data: {},
  },
};
const exampleReducer = handleActions(
  {
    [combineActions(
      loadExampleActions.loadExampleStart,
      loadExampleActions.loadExampleSuccess,
      loadExampleActions.loadExampleFailure
    ).toString()]: (state: AppState.BaseState<ExampleModel>, action: any) => {
      return { ...state, ...action.payload };
    },
  },
  exampleState
);
export default exampleReducer;
