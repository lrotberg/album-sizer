import { CommonFractions } from "@/CommonFractions.enum"
import { calc } from "@/helperFunctions"
import { Page, Photo } from "@/interfaces"
import words from "@/words"
import Opening from "@classes/Opening"

export class Envelope extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.EnvelopeName)
    this.setDimensions({
      part1: {
        height1: calc(this.photo.size.width, 2, CommonFractions.FiveEights),
        width1: calc(this.photo.size.height, CommonFractions.Eighth),
        units1: 2
      }
    })
  }
}