import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[21px]" };
const variants = {
  fill: {
    blue_A700_7f: "bg-blue-A700_7f text-white-A700",
    blue_A700: "bg-blue-A700 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    indigo_A700: "bg-indigo-A700 text-white-A700",
    pink_50: "bg-pink-50",
  },
};
const sizes = { xs: "p-[9px]", sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_A700_7f",
    "blue_A700",
    "white_A700",
    "indigo_A700",
    "pink_50",
  ]),
};

export { Button };
