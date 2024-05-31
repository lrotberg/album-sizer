import { Page, Photo } from "../interfaces";

export default abstract class Opening {
  page: Page;
  photo: Photo;
  units: number = 1;
  name: string = "";

  constructor(page: Page, photo: Photo) {
    this.page = page;
    this.photo = photo;
  }

  setName = (name: string) => {
    this.name = name;
  };

  getName = () => this.name;

  abstract getHeight: () => number;

  abstract getWidth: () => number;

  setUnits = (units: number) => {
    this.units = units;
  };
}
