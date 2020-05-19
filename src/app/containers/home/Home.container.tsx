import React from "react";
import HomeMobilePresenter from "./Home.presenter_m";
import HomeWebPresenter from "./Home.presenter_w";

declare module HomeContainerModule {
  export type Props = {};
  export type State = {};
}

export default class HomeContainer extends React.Component<
  HomeContainerModule.Props,
  HomeContainerModule.State
> {
  render() {
    return (
      <>
        <HomeMobilePresenter />
        <HomeWebPresenter />
      </>
    );
  }
}
