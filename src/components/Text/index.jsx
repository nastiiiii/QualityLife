import React from "react";

const sizeClasses = {
  txtManropeMedium40: "font-manrope font-medium",
  txtManropeSemiBold20IndigoA700: "font-manrope font-semibold",
  txtManropeMedium20: "font-manrope font-medium",
  txtManropeBold32BlueA700: "font-bold font-manrope",
  txtManropeRegular20: "font-manrope font-normal",
  txtManropeMedium20Black9007f: "font-manrope font-medium",
  txtManropeRegular12: "font-manrope font-normal",
  txtManropeBold32: "font-bold font-manrope",
  txtManropeMedium20WhiteA700: "font-manrope font-medium",
  txtManropeSemiBold24Black90087: "font-manrope font-semibold",
  txtManropeBold30: "font-bold font-manrope",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtManropeBold70: "font-bold font-manrope",
  txtManropeSemiBold20Red600b2: "font-manrope font-semibold",
  txtManropeExtraBold30: "font-extrabold font-manrope",
  txtManropeMedium30: "font-manrope font-medium",
  txtManropeSemiBold28: "font-manrope font-semibold",
  txtManropeMedium32: "font-manrope font-medium",
  txtManropeSemiBold24Gray40001: "font-manrope font-semibold",
  txtManropeBold25: "font-bold font-manrope",
  txtManropeSemiBold24IndigoA700: "font-manrope font-semibold",
  txtManropeSemiBold24: "font-manrope font-semibold",
  txtManropeMedium30Black900: "font-manrope font-medium",
  txtManropeMedium14: "font-manrope font-medium",
  txtManropeMedium14Red600: "font-manrope font-medium",
  txtManropeSemiBold25: "font-manrope font-semibold",
  txtManropeMedium18: "font-manrope font-medium",
  txtManropeBold32IndigoA700: "font-bold font-manrope",
  txtManropeSemiBold25Black900: "font-manrope font-semibold",
  txtManropeSemiBold20WhiteA700: "font-manrope font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
