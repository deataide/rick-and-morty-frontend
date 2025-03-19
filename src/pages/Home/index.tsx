import { useEffect, useState } from "react";
import { Character } from "../../types/character.type";
import { getCharacter, searchCharacters } from "../../utils/api";
import {
  Container,
  RickAndMortyImage,
  SupportContainer,
  TopContainer,
} from "./styles";
import Logo from "../../assets/logo.png";
import { StyledButton } from "../../components/Button/styles";
import { StyledInput } from "../../components/TextInput/styles";
import Card from "../../components/Card";
import { CharacterList } from "./styles";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import CharacterModal from "../../components/Modal";
export default function SearchCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleSearchCharacters = async (page: number = 1) => {
    setIsLoading(true);
    try {
      const handleResponse = await searchCharacters(searchQuery, page);

      setCharacters(handleResponse.characters);
      setTotalPages(handleResponse.total_pages);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearchCharacters(currentPage);
    }
  }, [currentPage]);

  const selectCharacter = async (id: number) => {
    try {
      const character = await getCharacter(id);
      setSelectedCharacter(character);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Container>
      {isLoading && <Loading />}
      <TopContainer>
        <RickAndMortyImage src={Logo} />
        <SupportContainer>
          <StyledInput
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchCharacters(1);
              }
            }}
            type="text"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Enter character name"
          />
          <StyledButton onClick={() => handleSearchCharacters(1)}>
            Search
          </StyledButton>
        </SupportContainer>
      </TopContainer>

      <CharacterList>
        {characters.map((character) => (
          <Card
            key={character.id}
            characterName={character.name}
            characterImage={character.image}
            characterSpecie={character.species}
            characterStatus={character.status}
            onClick={() => {
              selectCharacter(character.id);
            }}
          />
        ))}
      </CharacterList>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Container>
  );
}
