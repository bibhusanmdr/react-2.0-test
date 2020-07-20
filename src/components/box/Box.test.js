import "@testing-library/jest-dom";

import React from "react";
import { render, cleanup } from "@testing-library/react";

import Box from "./Box";

afterEach(cleanup);

function Boxes(props) {
  if (!props.list || !props.list.length) {
    return <div>No content</div>;
  }
  return (
    <div>
      {props.list.map(({ id, stepNumber, versionContent }) => (
        <Box key={id} step={stepNumber} versionContent={versionContent} />
      ))}
    </div>
  );
}

test('renders "no content" when there are no content', () => {
  const { getByText } = render(<Boxes />);
  expect(getByText(/no content/i)).toBeInTheDocument();
});

test("renders boxes", () => {
  const fakeContents = [
    {
      id: "d11b10ba-1cd8-48f8-93eb-454b716fd5a0",
      stepNumber: "2",
      versionContent: [
        {
          title: "Request A Delivery",
          body:
            "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
          effectiveDate: "2019-05-04T03:04:05.000Z",
        },
        {
          title: "We Deliver",
          body:
            "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
          effectiveDate: "2019-04-04T05:04:05.000Z",
        },
      ],
    },
    {
      id: "dce2554e-00dc-45c1-99c1-93a554d7eba7",
      stepNumber: "4",
      versionContent: [
        {
          title: "Request Another Delivery",
          body:
            "Get your next gaming fix by updating your profile then initiating your next shipment.",
          effectiveDate: "2019-05-20T03:04:05.000Z",
        },
      ],
    },
  ];
  const { getAllByTestId } = render(<Boxes list={fakeContents} />);
  const steps = getAllByTestId("box").map((li) => li.children[0].textContent);
  const fakeDataSteps = fakeContents.map((c) => c.stepNumber);
  expect(steps).toEqual(fakeDataSteps);
});
