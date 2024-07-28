import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GeneralTopics from "./GeneralTopics";

describe("GeneralTopics", () => {
  it("renders the left navigation", () => {
    render(<GeneralTopics section="general" />);
    const general = screen.getByText(/General/i);

    expect(general).toBeInTheDocument();
    expect(general.className.trim()).toBe("topic-heading");
  });

  it("toggles `active` class after click", async () => {
    render(<GeneralTopics section="general" />);
    const general = screen.getByText(/General/i);

    fireEvent.click(general);
    await waitFor(() => {
      expect(general.className.trim()).toBe("topic-heading active");
    });

    fireEvent.click(general);
    await waitFor(() => {
      expect(general.className.trim()).toBe("topic-heading");
    });
  });

  it("calls handler function after click", () => {
    const handleSectionHeight = jest.fn();
    render(<p onClick={handleSectionHeight}>General</p>);
    const general = screen.getByText(/General/i);

    fireEvent.click(general);
    expect(handleSectionHeight).toHaveBeenCalledTimes(1);

    fireEvent.click(general);
    expect(handleSectionHeight).toHaveBeenCalledTimes(2);
  });
});
