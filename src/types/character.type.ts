export interface CharactersOutputWrapper{
characters: Character[]
total_pages: number
}

export interface CharacterOutputWrapper{
character: Character
}
  
  export interface Character {
    id: number;
    name: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    image?: string;
    origin: Location;
    location: Location;
    episodes?: Episode[];
    last_episode?: Episode;
  }
  
  export interface Location {
    id: number;
    name?: string;
    residents_count?: number;
    type?: string;
    dimension?: string;
  }
  
  export interface Episode {
    id: number;
    name: string;
    air_date?: string;
    episode?: string;
  }
  
  export interface BaseCharacterOutput {
    id: number;
    name: string;
    image?: string;
    species?: string;
  }
  
  export interface OneCharacterOutput extends BaseCharacterOutput {
    status?: string;
    gender?: string;
    origin?: Location;
    location?: Location;
    last_episode?: Episode;
  }
  

