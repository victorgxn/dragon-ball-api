import { render as rtlRender } from "@testing-library/react";
import { ReactElement } from "react";

export const mockCharacter = {
  id: "1",
  name: "Goku",
  race: "Saiyan",
  baseKi: "100000",
  totalKi: "150000",
  affiliation: "Z Warriors",
  imageUrl: "http://example.com/goku.jpg",
};

export const mockCharacterResponse = {
  items: [mockCharacter],
  meta: {
    totalItems: 1,
    itemCount: 1,
    itemsPerPage: 10,
    totalPages: 1,
    currentPage: 1,
  },
  links: {
    first: "",
    previous: "",
    next: "",
    last: "",
  },
};

export function render(ui: ReactElement, { ...options } = {}) {
  return rtlRender(ui, { ...options });
}

export * from "@testing-library/react";
