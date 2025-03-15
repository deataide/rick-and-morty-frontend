import styled from "styled-components";

export const CharacterImage = styled.img`
  border: 5px solid #606060;
  border-radius: 10px;
  width: 184px;
  height: 184px;
  object-fit: cover;
  cursor: not-allowed;
  transition: transform 0.2s ease, box-shadow 0.1s ease;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  backdrop-filter: blur(20px);
`;
