import { Page, Photo } from "../interfaces";

export default abstract class Opening {
  page: Page;
  photo: Photo;

  constructor(page: Page, photo: Photo) {
    this.page = page;
    this.photo = photo;
  }

  abstract getName: () => string;

  abstract getHeight: () => number;

  abstract getWidth: () => number;

  setPhotoSize = (width: number, height: number) => {
    this.photo.size.height = height;
    this.photo.size.width = width;
  };

  setPageSize = (width: number, height: number) => {
    this.page.size.height = height;
    this.page.size.width = width;
  };
}
