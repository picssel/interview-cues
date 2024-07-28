import { fireEvent, render, screen } from "@testing-library/react";
import GeneralTopicList from "./GeneralTopicList";
import { Topic } from "src/types.ts";

const topic: Topic = {
  section: "ACME",
  name: "whyHireYou",
  displayName: "why should I hire you",
  heading: "Why should I hire you",
  contents: "Lorem ipsum",
};
describe("GeneralTopicList", () => {
  it("renders the selected topic", () => {
    render(<GeneralTopicList {...topic} />);
    const displayed = screen.getByText(/why should I hire you/i);

    expect(displayed).toBeInTheDocument();
  });

  it("calls the handleTopicSelection function", async () => {
    const handleTopicSelection = jest.fn();
    render(
      <li onClick={handleTopicSelection}>
        <span className="description">why should I hire you</span>
      </li>
    );
    const displayed = screen.getByText(/why should I hire you/i);

    fireEvent.click(displayed);
    expect(handleTopicSelection).toHaveBeenCalledTimes(1);
  });
});
