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

export type Dimensions = {
  part1: {
    height1: number;
    width1: number;
    units1: number;
  };
  part2?: {
    height2?: number;
    width2?: number;
    units2?: number;
  };
  part3?: {
    height3?: number;
    width3?: number;
    units3?: number;
  };
};
