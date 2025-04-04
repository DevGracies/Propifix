"use client";
import React from "react";

export const Text = ({ style, children, clickFunc, as }) => {
  const Component = ({ as, style, clickFunc, children }) => {
    const Element = as ? as : "div";
    return React.createElement(
      Element,
      { className: style, onClick: clickFunc },
      children
    );
  };
  if (as) {
    return (
      <Component style={style} clickFunc={clickFunc} as={as}>
        {children}
      </Component>
    );
  } else {
    return (
      <h6 className={style} onClick={clickFunc}>
        {children}
      </h6>
    );
  }
};
