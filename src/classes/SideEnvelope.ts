import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class SideEnvelope extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.SideEnvelopeName)
    this.setDimensions({
      part1: {
        height1: this.page.size.height,
        width1: calc(this.photo.size.width, 2, CommonFractions.FiveEights),
        units1: 2
      }
    })
  }
}