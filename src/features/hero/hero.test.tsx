// test file, e.g., Heropage.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Heropage from "./hero";

describe("Heropage Component", () => {
  it("renders Heropage heading", () => {
    render(<Heropage />);
    const heading = screen.getByText(/Heropage/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders a Button with correct text", () => {
    render(<Heropage />);
    const button = screen.getByRole("button", { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });
});
