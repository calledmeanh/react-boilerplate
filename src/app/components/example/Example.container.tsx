import React from "react";
import ExampleMobilePresenter from "./Example.presenter_m";
import ExampleWebPresenter from "./Example.presenter_w";

declare module ExampleContainerModule {
  export type Props = {};
  export type State = {};
}

export default class ExampleContainer extends React.Component<
  ExampleContainerModule.Props,
  ExampleContainerModule.State
> {
  render() {
    return (
      <>
        <ExampleMobilePresenter />
        <ExampleWebPresenter />
      </>
    );
  }
}
