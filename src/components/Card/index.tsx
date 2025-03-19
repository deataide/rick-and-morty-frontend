import {
  Container,
  ContentContainer,
  CharacterName,
  CharacterSpecie,
  CharacterImage,
  InfoContainer,
} from "./styles";

interface CardProps {
  characterName: string;
  characterSpecie: string | undefined;
  characterImage: string | undefined;
  characterStatus: string | undefined;
  onClick: () => void;
}

export default function Card({
  characterName,
  characterSpecie,
  characterImage,
  characterStatus,
  onClick,
}: CardProps) {
  return (
    <Container onClick={onClick}>
      <CharacterImage
        src={characterImage}
        alt={characterName}
        $isAlive={characterStatus === "Alive"}
      />
      <ContentContainer>
        <InfoContainer>
          <CharacterName>{characterName}</CharacterName>
          <CharacterSpecie>{characterSpecie}</CharacterSpecie>
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
}
