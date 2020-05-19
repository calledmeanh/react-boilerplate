import React from "react";

declare module TickPresenterModule {
  export type Props = {
    color: string;
    size: string;
  };
}

/* phải để thuộc tính fill là currentColor */
/* stroke-width, stroke-linecap */
/* strokeWidth, strokeLinecap */
const TickPresenter: React.FC<TickPresenterModule.Props> = (props) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 10 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.25 5L3.75 7.5L8.75 2.5" stroke={props.color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default TickPresenter;
