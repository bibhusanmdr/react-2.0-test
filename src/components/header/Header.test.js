import "@testing-library/jest-dom";

import React from "react";

import { render } from "@testing-library/react";

import logo from "../../img/logo.png";

import Header from "./Header";

test("renders Header", () => {
  const { getByTestId } = render(<Header />);
  const header = getByTestId("header");
  expect("http://localhost/" + logo).toEqual(header.children[0].src);
});
