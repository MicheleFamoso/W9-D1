import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

import "@testing-library/jest-dom";

describe("CommentArea component", () => {
  test("renders without crashing and shows child components", () => {
    render(<CommentArea asin="12345" />);
    expect(screen.getByTestId("add-comment")).toBeInTheDocument();
    expect(screen.getByTestId("comment-list")).toBeInTheDocument();
  });
});

test("calls fetch when asin is provided", async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );

  render(<CommentArea asin="abc123" />);
  expect(global.fetch).toHaveBeenCalledWith(
    expect.stringContaining("abc123"),
    expect.objectContaining({
      headers: expect.objectContaining({
        Authorization: expect.any(String),
      }),
    })
  );
});
