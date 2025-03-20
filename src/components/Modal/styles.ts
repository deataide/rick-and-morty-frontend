import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const CardContainer = styled.div`
  display: flex;
  background: #111;
  border: solid 1px #161616;
  border-radius: 16px;
  border-bottom: none;
  overflow: visible;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: white;
  width: 1034px;
  height: 799px;
  max-width: 95vw;
  max-height: 90vh;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    min-height: 400px;
    flex-direction: column;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export const ImageSection = styled.div`
  width: 30%;
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  border-radius: 16px 0 0 16px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 16px 16px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(30px) brightness(50%);
  overflow: hidden;
  clip-path: inset(0 round 16px 0 0 16px);

  @media (max-width: 768px) {
    width: 100%;
    height: 20%;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CharacterContentImage = styled.div`
  position: absolute;
  border: solid 2px #606060;
  border-radius: 8px;
  transform: translate(-20%, -50%);
  top: 50%;
  z-index: 10;
  height: 75%;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
    left: 10%;
    width: 50%;
    transform: translate(-10%, -10%);
    border: none;
  }
`;
export const CharacterImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  border-radius: 8px 8px 0 0px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: 200px;
    display: block;
  }
`;

export const InfoContainer = styled.div`
  width: 70%;
  z-index: 1;
  padding: 50px 70px 50px 70px;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  border-radius: 0 16px 16px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px 20px 20px;
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 15px;
`;
export const TextWrapper = styled.div`
  background-color: #1a1a1a;
  border-radius: 0px 0px 8px 8px;
  padding: 5px;
  width: 100%;
  max-height: 55px;

  @media (max-width: 768px) {
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  border: solid 3px white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 10000;
`;

export const ColoredTitle = styled.h2`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-bottom: 15px;
  margin-top: 25px;
  color: #c9d636;
`;

export const StyledText = styled.p<{
  fontSize?: string;
  color?: string;
  padding?: Boolean;
}>`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#ccc"};
  padding-top: ${({ padding }) => (padding ? "12px" : 0)};
  line-height: 140%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledImageTitle = styled.h2`
  font-size: 22px;
  color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
    text-overflow: ellipsis;
  }
`;
