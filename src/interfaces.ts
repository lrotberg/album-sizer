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
export type PageOrientation = "horizontal" | "vertical";
