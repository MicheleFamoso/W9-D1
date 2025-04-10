import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookList from "../components/BookList";
import "@testing-library/jest-dom";

describe("BookList filtering", () => {
  test("shows all books when search is empty", () => {
    render(<BookList book={mockBooks} />);
    const bookCards = screen.getAllByTestId("single-book");
    expect(bookCards).toHaveLength(mockBooks.length);
  });

  test("filters books based on input", async () => {
    render(<BookList book={mockBooks} />);
    const input = screen.getByPlaceholderText("Search");
    await userEvent.type(input, "Harry");
    const bookCards = screen.getAllByTestId("single-book");
    expect(bookCards).toHaveLength(1);
    expect(bookCards[0]).toHaveTextContent("Harry Potter");
  });

  test("shows no books if search does not match", async () => {
    render(<BookList book={mockBooks} />);
    const input = screen.getByPlaceholderText("Search");
    await userEvent.type(input, "Nonexistent Title");
    const bookCards = screen.queryAllByTestId("single-book");
    expect(bookCards).toHaveLength(0);
  });
});
