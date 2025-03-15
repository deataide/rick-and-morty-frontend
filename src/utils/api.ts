import {  Character, CharactersOutputWrapper } from "../types/character.type";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async <T>(response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data.data as T;
};

export const getCharacter = async (
  characterId: number
): Promise<Character> => {
  const url = `${API_BASE_URL}/characters/${characterId}`;
  const response = await fetch(url);
  return handleResponse<Character>(response);
};

export const searchCharacters = async (
  querySearch: string,
  page?: number
): Promise<CharactersOutputWrapper> => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch ? querySearch : 'rick'}&page=${page ? page : 1}`;
  const response = await fetch(url);
  return handleResponse<CharactersOutputWrapper>(response);
};