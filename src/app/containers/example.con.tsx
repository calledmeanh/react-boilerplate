/* libs */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
/* apps */
import RootState, { AppState } from '../../models/rootState.model';
import { ExampleActions } from '../redux/actions/index.action';
import ExampleModel from '../../models/example.model';
import ExampleComponent from '../components/example.comp';

declare module ExampleContainerModule {
  export type Props = {
    example?: AppState.BaseState<ExampleModel>;
    actions?: typeof ExampleActions;
  };

  export type State = {};
}
@connect(
  (state: RootState) => {
    return {
      example: state.example,
    };
  },
  (dispatch: Dispatch) => ({
    actions: bindActionCreators(Object.assign(ExampleActions), dispatch),
  })
)
class ExampleContainer extends React.Component<ExampleContainerModule.Props, ExampleContainerModule.State> {
  componentDidMount() {
    this.props.actions!.loadExample({ url: '/todos/1' });
  }

  render() {
    return <ExampleComponent example={this.props.example} />;
  }
}

export default ExampleContainer;
