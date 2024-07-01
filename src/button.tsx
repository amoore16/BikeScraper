import React from "react";

type Props = {
  text: String;
};

export const Button = (props: Props) => {
  const { text } = props;
  return <button className="button-md">{text}</button>;
};
