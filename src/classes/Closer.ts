import { CommonFractions } from "@/CommonFractions.enum"
import { calc } from "@/helperFunctions"
import { Page, Photo } from "@/interfaces"
import words from "@/words"
import Opening from "@classes/Opening"

export class Closer extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.CloserName)
    this.setDimensions(
      {
        part1:
        {
          height1: calc(this.photo.size.height, CommonFractions.Eighth),
          width1: calc(this.photo.size.width, CommonFractions.Eighth),
          units1: 1
        }
      },
    )
  }
}