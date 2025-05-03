import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/characters/search-bar";
import { useRouter, useSearchParams } from "next/navigation";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("SearchBar", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders search input and button", () => {
    render(<SearchBar />);

    expect(
      screen.getByPlaceholderText("Buscar personajes por nombre...")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Buscar" })).toBeInTheDocument();
  });

  it("updates search query on input change", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      "Buscar personajes por nombre..."
    );
    fireEvent.change(input, { target: { value: "Goku" } });

    expect(input).toHaveValue("Goku");
  });

  it("shows clear button when search query exists", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      "Buscar personajes por nombre..."
    );
    fireEvent.change(input, { target: { value: "Goku" } });

    expect(screen.getByRole("button", { name: "" })).toBeInTheDocument(); // Clear button (X icon)
  });

  it("clears search query when clear button is clicked", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      "Buscar personajes por nombre..."
    );
    fireEvent.change(input, { target: { value: "Goku" } });

    const clearButton = screen.getByRole("button", { name: "" });
    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
  });

  it("submits search form with correct query parameters", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      "Buscar personajes por nombre..."
    );
    const submitButton = screen.getByRole("button", { name: "Buscar" });

    fireEvent.change(input, { target: { value: "Goku" } });
    fireEvent.click(submitButton);

    expect(mockRouter.push).toHaveBeenCalledWith(
      "/characters?page=1&name=Goku"
    );
  });
});
