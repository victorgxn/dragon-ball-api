import { render, screen } from "@testing-library/react";
import PaginationControls from "@/components/characters/pagination-controls";

describe("PaginationControls", () => {
  it("renders pagination controls with correct current page and total pages", () => {
    render(<PaginationControls currentPage={2} totalPages={5} />);

    expect(screen.getByText("Página 2 de 5")).toBeInTheDocument();
  });

  it("disables first and previous buttons on first page", () => {
    render(<PaginationControls currentPage={1} totalPages={5} />);

    const buttons = screen.getAllByRole("button");
    const [firstPageButton, prevPageButton] = buttons;

    expect(firstPageButton).toBeDisabled();
    expect(prevPageButton).toBeDisabled();
    expect(firstPageButton.closest("a")).toHaveClass(
      "pointer-events-none opacity-50"
    );
    expect(prevPageButton.closest("a")).toHaveClass(
      "pointer-events-none opacity-50"
    );
  });

  it("disables next and last buttons on last page", () => {
    render(<PaginationControls currentPage={5} totalPages={5} />);

    const buttons = screen.getAllByRole("button");
    const [, , nextPageButton, lastPageButton] = buttons;

    expect(nextPageButton).toBeDisabled();
    expect(lastPageButton).toBeDisabled();
    expect(nextPageButton.closest("a")).toHaveClass(
      "pointer-events-none opacity-50"
    );
    expect(lastPageButton.closest("a")).toHaveClass(
      "pointer-events-none opacity-50"
    );
  });

  it("enables all navigation buttons on middle pages", () => {
    render(<PaginationControls currentPage={3} totalPages={5} />);

    const buttons = screen.getAllByRole("button");
    const [firstPageButton, prevPageButton, nextPageButton, lastPageButton] =
      buttons;

    expect(firstPageButton).not.toBeDisabled();
    expect(prevPageButton).not.toBeDisabled();
    expect(nextPageButton).not.toBeDisabled();
    expect(lastPageButton).not.toBeDisabled();
  });

  it("has correct navigation links", () => {
    render(<PaginationControls currentPage={3} totalPages={5} />);

    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveAttribute("href", "/characters?page=1"); // First page
    expect(links[1]).toHaveAttribute("href", "/characters?page=2"); // Previous page
    expect(links[2]).toHaveAttribute("href", "/characters?page=4"); // Next page
    expect(links[3]).toHaveAttribute("href", "/characters?page=5"); // Last page
  });
});
