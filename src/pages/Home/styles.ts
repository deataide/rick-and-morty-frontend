import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
  width: 100vw;
  font-size: 62.5%;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-color: #1e1e1e;
  scrollbar-color: dark;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SupportContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const RickAndMortyImage = styled.img`
  width: 502px;
  height: 214px;
  margin-bottom: 30px;
`;

export const CharacterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 80%;
`;
