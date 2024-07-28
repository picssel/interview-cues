import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("interview cues app", () => {
  it("renders default topic on page load", () => {
    render(<App />);
    const defaultTopic = screen.getByText(/Tell me about yourself/i);
    expect(defaultTopic).toBeInTheDocument();
  });

  it("test cross-component functionality", () => {
    render(<App />);

    const prioritiesSelector = screen.getByText(/conflicting priorities/i);
    const difficultSelector = screen.getByText(/difficult person/i);

    expect(prioritiesSelector).toBeInTheDocument();
    expect(difficultSelector).toBeInTheDocument();
    expect(
      screen.queryByText(
        /Tell me about a time you had to manage conflicting priorities/i
      )
    ).not.toBeInTheDocument();

    // navigate to `conflicting priorities` section
    fireEvent.click(prioritiesSelector);
    expect(
      screen.getByText(
        /Tell me about a time you had to manage conflicting priorities/i
      )
    ).toBeInTheDocument();

    // navigate to `difficult person` section
    fireEvent.click(difficultSelector);
    expect(
      screen.queryByText(
        /Tell me about a time you had to manage conflicting priorities/i
      )
    ).not.toBeInTheDocument();

    expect(
      screen.getByText(
        /Tell me about a time you worked with a difficult person/i
      )
    ).toBeInTheDocument();
  });
});
