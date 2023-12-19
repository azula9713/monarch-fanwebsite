interface IBaseTitan {
  id: string;
  name: string;
  classification: string;
  species: string;
  height: string;
  tail: string | null;
  wingspan: string | null;
  outpostId: string;
  behavior: string;
  images: string[];
}

interface ITitan extends IBaseTitan {
  altnames: string[];
  nature: string;
  range: string;
}

export type { IBaseTitan, ITitan };
