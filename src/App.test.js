import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Get Started", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/GET STARTED/i);
  expect(linkElement).toBeInTheDocument();
});
