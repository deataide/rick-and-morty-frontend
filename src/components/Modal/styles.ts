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
  border: solid 1px #606060;
  overflow: visible;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: white;
  max-width: 900px;
  width: 900px;
  height: 550px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    margin-top: 20%;
    margin-bottom: 20%;
  }
`;

export const ImageSection = styled.div`
  width: 35%;
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  @media (max-width: 768px) {
    width: 100%;
    height: 10rem;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(20px) brightness(50%);
  overflow: hidden;

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
  border: solid 1px #606060;
  border-radius: 8px;
  left: -100px;
  margin-top: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    top: 40%;
    margin: 1rem auto;
  }
`;

export const CharacterImage = styled.img`
  position: relative;
  width: 20rem;
  height: 25rem;
  border-radius: 8px 8px 0 0px;

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const InfoContainer = styled.div`
  width: 65%;
  padding: 2rem 5rem 2rem 5rem;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2rem 2rem 2rem;
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 15px;
`;
export const TextWrapper = styled.div`
  background-color: #1a1a1a;
  border-radius: 0px 0px 8px 8px;
  padding: 0.5rem;
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
  border-radius: 10px;
  cursor: pointer;
  z-index: 10000;
`;

export const ColoredTitle = styled.h2`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.8rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: #c9d636;
`;

export const StyledText = styled.p<{
  fontSize?: string;
  color?: string;
  padding?: Boolean;
}>`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#ccc"};
  padding-top: ${({ padding }) => (padding ? "8px" : 0)};
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
