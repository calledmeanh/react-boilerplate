/* libs */
import React from 'react';
// import {spring} from 'react-motion'

declare module ExampleMotionModule {
  export type Props = {};
  export type State = {};
}

class ExampleMotion extends React.Component<ExampleMotionModule.Props, ExampleMotionModule.State> {
  render() {
    return <div></div>;
  }
}

export default ExampleMotion;
