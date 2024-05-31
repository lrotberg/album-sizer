import { CommonFractions } from "../CommonFractions.enum";
import { calc } from "../helperFunctions";
import words from "../words";
import Opening from "./Opening";
export class Book extends Opening {
  getName = () => words.BookName;

  getHeight = () => calc(this.page.size.width, CommonFractions.FiveEights)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}