import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = (props: Props) => {
  return <button className="button" {...props} />;
};
