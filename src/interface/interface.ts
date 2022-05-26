export interface iComponent {
  template: string;
  createTemplate(): string;
}

export interface iSerie {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}
