export interface Pokemon {

  id : number;
  name : string;
  description ?: string;
  category : string;
  types : string[];
  height ?: number; // peut être null
  weight ?: number; // peut être null
}
