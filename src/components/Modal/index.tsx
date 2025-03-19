import { Character } from "../../types/character.type";
import {
  BackgroundImage,
  CardContainer,
  CharacterContentImage,
  CharacterImage,
  CloseButton,
  ColoredTitle,
  ImageSection,
  ImageWrapper,
  InfoContainer,
  InfoSection,
  ModalWrapper,
  StyledImageTitle,
  StyledText,
  TextWrapper,
} from "./styles";
import { FaPeopleGroup } from "react-icons/fa6";

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  return (
    <ModalWrapper>
      <CardContainer>
        <ImageSection>
          <CloseButton onClick={onClose}>Close</CloseButton>
          <ImageWrapper>
            <BackgroundImage src={character?.image} alt={character?.name} />
          </ImageWrapper>
          <CharacterContentImage>
            <CharacterImage src={character?.image} alt={character?.name} />
            <TextWrapper>
              <StyledText>
                <StyledImageTitle>{character?.name}</StyledImageTitle>
                {character?.species}
              </StyledText>
            </TextWrapper>
          </CharacterContentImage>
        </ImageSection>
        <InfoContainer>
          <InfoSection>
            <ColoredTitle>About</ColoredTitle>
            <StyledText padding={false} fontSize="16px" color="#D3D3D3">
              {character?.name} is a {character?.gender} {character?.species}.{" "}
              {character?.gender === "Female" ? "She" : "He"} is{" "}
              {character?.status}{" "}
              {character?.status === "Alive" ? "and well" : "and sad"}. Last
              seen in {character?.last_episode?.air_date}.
            </StyledText>
          </InfoSection>
          <InfoSection>
            <ColoredTitle>Origin</ColoredTitle>
            <StyledText padding={true} fontSize="14px" color="#8C8C8C">
              {character?.origin?.type || "Tipo Desconhecido"}
            </StyledText>
            <StyledText padding={false} fontSize="28px" color="#fff">
              {character?.origin?.name || "Lugar Desconhecido"}
            </StyledText>
            <StyledText padding={false} fontSize="18px" color="#D3D3D3">
              {character?.origin?.dimension || "Dimensão Desconhecida"}
            </StyledText>
            <StyledText fontSize="14px" color="#8C8C8C" padding={true}>
              <FaPeopleGroup /> {character?.origin?.residents_count || 0}{" "}
              residents
            </StyledText>
          </InfoSection>

          <InfoSection>
            <ColoredTitle>Location</ColoredTitle>
            <StyledText padding={true} fontSize="14px" color="#8C8C8C">
              {character?.location?.type || "Tipo Desconhecido"}
            </StyledText>
            <StyledText fontSize="28px" color="#fff">
              {character?.location?.name || "Lugar Desconhecido"}
            </StyledText>
            <StyledText fontSize="18px" color="#D3D3D3">
              {character?.location?.dimension || "Dimensão Desconhecida"}
            </StyledText>
            <StyledText fontSize="14px" color="#8C8C8C" padding={true}>
              <FaPeopleGroup /> {character?.location?.residents_count || 0}{" "}
              residents
            </StyledText>
          </InfoSection>
        </InfoContainer>
      </CardContainer>
    </ModalWrapper>
  );
};

export default CharacterModal;
