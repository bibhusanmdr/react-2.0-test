import React from "react";
import { render } from "@testing-library/react";
import BoxContainer from "./BoxContainer";

test("renders How it Works text", () => {
  const { getByText } = render(<BoxContainer />);
  const containerElement = getByText(/How It Works/i);
  expect(containerElement).toBeInTheDocument();
});
