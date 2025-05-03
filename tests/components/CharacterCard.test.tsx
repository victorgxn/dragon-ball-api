import { render, screen } from "@testing-library/react";
import CharacterCard from "@/components/characters/character-card";

describe("CharacterCard", () => {
  const mockProps = {
    id: "1",
    name: "Goku",
    race: "Saiyan",
    baseKi: "10000",
    totalKi: "50000",
    affiliation: "Z Fighters",
    imageUrl: "/goku.jpg",
  };

  it("renders character information correctly", () => {
    render(<CharacterCard {...mockProps} />);
    expect(screen.getByText("Goku")).toBeInTheDocument();
    expect(screen.getByText("Saiyan")).toBeInTheDocument();
    expect(screen.getByText("10,000")).toBeInTheDocument();
    expect(screen.getByText("50,000")).toBeInTheDocument();
    expect(screen.getByText("Z Fighters")).toBeInTheDocument();
    expect(screen.getByAltText("Goku")).toBeInTheDocument();
  });

  it("handles unknown ki values correctly", () => {
    const propsWithUnknownKi = {
      ...mockProps,
      baseKi: "unknown",
      totalKi: "unknown",
    };

    render(<CharacterCard {...propsWithUnknownKi} />);

    const unknownElements = screen.getAllByText("Desconocido");
    expect(unknownElements).toHaveLength(2);
  });

  it("formats numeric ki values correctly", () => {
    const propsWithLargeNumbers = {
      ...mockProps,
      baseKi: 1000000,
      totalKi: "2000000",
    };

    render(<CharacterCard {...propsWithLargeNumbers} />);

    expect(screen.getByText("1,000,000")).toBeInTheDocument();
    expect(screen.getByText("2,000,000")).toBeInTheDocument();
  });
});
