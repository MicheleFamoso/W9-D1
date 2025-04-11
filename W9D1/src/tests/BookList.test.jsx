import { render, screen } from "@testing-library/react";

import BookList from "../components/BookList";

import { describe, it, expect } from "vitest";
import bookh from "../assets/books/romance.json";

describe("BookList filtering", () => {
  it("monta ", () => {
    render(<BookList book={bookh} />);
    const allimg = screen.getAllByRole("img");
    expect(allimg).toHaveLength(150);
  });
});
