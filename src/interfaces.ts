interface Size {
  height: number,
  width: number
}

export interface Photo {
  size: Size
}

export interface Page {
  size: Size
}
export interface MainFormData {
  imageSize: string;
  pageCount: number;
  height: number;
  width: number;
  orientation: string;
  openings: string[];
}

export type PageOrientation = "horizontal" | "vertical";

export type PhotoSize = "standard" | "small";
