import { Dimensions, Page, Photo } from "@/interfaces";

export default abstract class Opening {
  page: Page;
  photo: Photo;
  name: string;
  dimensions: Dimensions;

  constructor(page: Page, photo: Photo) {
    this.page = page;
    this.photo = photo;
    this.name = "";
    this.dimensions = {
      part1: {
        height1: 0,
        width1: 0,
        units1: 0
      }
    };
  }

  setName = (name: string) => {
    this.name = name;
  };

  getName = () => this.name;

  setDimensions = (dimensions: Dimensions) => {
    this.dimensions = dimensions
  };

  getDimensions = () => this.dimensions;
}
