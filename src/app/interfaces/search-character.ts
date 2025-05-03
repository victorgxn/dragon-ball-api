import { Gender, Affiliation } from "./characters-response";

export interface CharacterFilter {
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
