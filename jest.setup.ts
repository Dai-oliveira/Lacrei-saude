import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    React.createElement("img", { ...props, alt: props.alt ?? "" })
}));
