/* libs */
import React from 'react';
/* apps */
import useExample from '../hooks/useExample.hook';
import ExampleModel from '../../models/example.model';
import { AppState } from '../../models/rootState.model';

declare module ExampleComponentModule {
  export type Props = {
    example: AppState.BaseState<ExampleModel> | undefined;
  };
}

const ExampleComponent: React.FC<ExampleComponentModule.Props> = (props) => {
  let time = useExample({ time: 100 });
  return (
    <div>
      <div>{time}</div>
      <div>{JSON.stringify(props.example)}</div>
    </div>
  );
};

export default ExampleComponent;
