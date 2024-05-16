import { Page, Photo } from "../interfaces";

export default abstract class Opening {
  constructor(readonly page: Page, readonly photo: Photo) { }
  abstract getHeight: () => number;
  abstract getWidth: () => number;
}
