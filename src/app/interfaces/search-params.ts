export interface SearchParams {
  page?: string;
  name?: string;
}

export interface CharactersPageProps {
  searchParams: Promise<SearchParams>;
}
