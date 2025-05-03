import { render as rtlRender } from "@testing-library/react";
import { ReactElement } from "react";

export interface MockCharacter {
  id: string;
  name: string;
  race: string;
  baseKi: string;
  totalKi: string;
  affiliation: string;
  imageUrl: string;
}

export const mockCharacter: MockCharacter = {
  id: "1",
  name: "Goku",
  race: "Saiyan",
  baseKi: "100000",
  totalKi: "150000",
  affiliation: "Z Warriors",
  imageUrl: "http://example.com/goku.jpg",
};

export interface MockCharacterResponse {
  items: MockCharacter[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}

export const mockCharacterResponse: MockCharacterResponse = {
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

interface RenderOptions {
  [key: string]: any;
}

export function render(ui: ReactElement, options: RenderOptions = {}) {
  return rtlRender(ui, { ...options });
}

export * from "@testing-library/react";
