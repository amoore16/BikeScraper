import React from "react";

type Props = {
  text: String;
  onClickHandler: React.MouseEventHandler;
};

export const Button = (props: Props) => {
  const { text, onClickHandler } = props;

  return (
    <button className="button-md" onClick={onClickHandler}>
      {text}
    </button>
  );
};
