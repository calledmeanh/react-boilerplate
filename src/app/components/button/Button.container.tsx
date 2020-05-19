import React from "./node_modules/react";
import ButtonMobilePresenter from "./Button.m_presenter";
import ButtonWebPresenter from "./Button.w_presenter";

declare module ButtonContainerModule {
  export type Props = {};
  export type State = {};
}

export default class ButtonContainer extends React.Component<
  ButtonContainerModule.Props,
  ButtonContainerModule.State
> {
  render() {
    return (
      <>
        <ButtonMobilePresenter />
        <ButtonWebPresenter />
      </>
    );
  }
}
