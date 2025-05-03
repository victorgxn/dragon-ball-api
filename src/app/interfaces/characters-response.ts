export interface PaginatedResponse<T> {
  items: T[];
  meta: Meta;
  links: Links;
}

export type CharactersResponse = PaginatedResponse<CharacterBasic>;

export interface CharacterBasic {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: Gender;
  description: string;
  image: string;
  affiliation: Affiliation;
  deletedAt: null | string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export enum Affiliation {
  ArmyOfFrieza = "Army of Frieza",
  Freelancer = "Freelancer",
  ZFighter = "Z Fighter",
  Villain = "Villain",
  AssistantOfBeerus = "Assistant of Beerus",
  AssistantOfVermoud = "Assistant of Vermoud",
  PrideTroopers = "Pride Troopers",
  Other = "Other",
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
