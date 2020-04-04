/* libs */
import React from 'react';

declare module ExampleCommonModule {
  export type Props = {};

  export type State = {};
}

class ExampleCommon extends React.Component<ExampleCommonModule.Props, ExampleCommonModule.State> {
  render() {
    return <div></div>;
  }
}

export default ExampleCommon;
