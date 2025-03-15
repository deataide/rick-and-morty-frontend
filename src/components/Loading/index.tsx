import { Container, CharacterImage } from "./styles";
import background from "../../assets/background.png";

export default function Loading() {
  return (
    <Container>
      <CharacterImage src={background} />
    </Container>
  );
}
