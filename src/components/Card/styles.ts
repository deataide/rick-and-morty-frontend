import styled from "styled-components";

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  filter: grayscale(100%);
  transition: transform 0.2s ease, box-shadow 0.1s ease;
`;

export const Container = styled.li`
  width: 224px;
  height: 224px;
  position: relative;
  display: flex;
  align-items: flex-end;
  background-color: #1e1e1e;
  cursor: pointer;
  border-radius: 8px;
  border: solid 2px gray;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.1s ease;

  &:hover {
    box-shadow: 0 0 0.2rem #fff, 0 0 0.1rem #fff, 0 0 1rem #c9d636,
      0 0 0.1rem #c9d636, 0 0 0.1rem #c9d636, inset 0 0 1rem #c9d636;
    outline: solid 0.3rem #c9d636;
    border: solid 2px #c9d636;

    ${CharacterImage} {
      filter: grayscale(0);
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;

  background: (to top, rgb(0, 0, 0), transparent);
  position: relative;
  z-index: 1;
`;

export const CharacterName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  display: block;
  white-space: nowrap;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CharacterSpecie = styled.span`
  font-size: 0.9rem;
  display: block;
  text-align: left;
  white-space: nowrap;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.7);
`;
