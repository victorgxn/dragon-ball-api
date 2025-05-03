import { CharactersPageProps } from "@/app/interfaces";
import {
  PaginatedResponse,
  CharacterBasic,
} from "@/app/interfaces/characters-response";
import {
  HeaderSection,
  CharacterGrid,
  PaginationControls,
  SearchBar,
} from "@/components/characters";

type CharacterResponse = PaginatedResponse<CharacterBasic>;

const EMPTY_RESPONSE: CharacterResponse = {
  items: [],
  meta: {
    totalItems: 0,
    itemCount: 0,
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

async function fetchPaginatedCharacters(page = 1): Promise<CharacterResponse> {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: "10",
    });

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_DRAGON_BALL_API_URL
      }/characters?${params.toString()}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching paginated characters:", error);
    return EMPTY_RESPONSE;
  }
}

async function searchCharactersByName(
  name: string
): Promise<CharacterResponse> {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_DRAGON_BALL_API_URL
      }/characters?name=${encodeURIComponent(name)}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const characters = await response.json();
    const filteredCharacters = Array.isArray(characters) ? characters : [];

    return {
      items: filteredCharacters,
      meta: {
        totalItems: filteredCharacters.length,
        itemCount: filteredCharacters.length,
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
  } catch (error) {
    console.error("Error searching characters by name:", error);
    return EMPTY_RESPONSE;
  }
}

export default async function CharactersPage({
  searchParams,
}: CharactersPageProps) {
  const params = await searchParams;
  const currentPage = params?.page ? Math.max(1, parseInt(params.page, 10)) : 1;
  const searchQuery = params?.name?.trim() || "";

  const characterData = searchQuery
    ? await searchCharactersByName(searchQuery)
    : await fetchPaginatedCharacters(currentPage);

  const hasNoResults = characterData.items.length === 0;

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <HeaderSection />
        <SearchBar />
        {hasNoResults ? (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No se encontraron personajes
              {searchQuery && ` que coincidan con "${searchQuery}"`}.
            </p>
          </div>
        ) : (
          <CharacterGrid characters={characterData.items} />
        )}
        <PaginationControls
          currentPage={characterData.meta.currentPage}
          totalPages={characterData.meta.totalPages}
        />
      </div>
    </main>
  );
}
