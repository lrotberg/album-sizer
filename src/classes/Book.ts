import { CommonFractions } from "../CommonFractions.enum";
import { calc } from "../helperFunctions";
import { BookName } from "../words.json";
import Opening from "./Opening";
export class Book extends Opening {
  getName = () => BookName;

  getHeight = () => calc(this.page.size.width, CommonFractions.FiveEights)

  getWidth = () => calc(this.photo.size.width, CommonFractions.Eighth)
}