import React from "react";

const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    {...props}
    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple b--none"
  />
);

export default Button;
