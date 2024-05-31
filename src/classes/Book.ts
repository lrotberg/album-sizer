import { CommonFractions } from "../CommonFractions.enum";
import { calc } from "../helperFunctions";
import { Page, Photo } from "../interfaces";
import words from "../words";
import Opening from "./Opening";
export class Book extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.BookName)
  }

  getHeight = () => calc(this.page.size.width, CommonFractions.FiveEights)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}