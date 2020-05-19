import React from "react";
import FlashDealsMobilePresenter from "./FlashDeals.presenter_m";
import FlashDealsWebPresenter from "./FlashDeals.presenter_w";

declare module FlashDealsContainerModule {
  export type Props = {};
  export type State = {};
}

export default class FlashDealsContainer extends React.Component<
  FlashDealsContainerModule.Props,
  FlashDealsContainerModule.State
> {
  render() {
    return (
      <>
        <FlashDealsMobilePresenter />
        <FlashDealsWebPresenter />
      </>
    );
  }
}
