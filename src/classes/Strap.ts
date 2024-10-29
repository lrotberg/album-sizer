import { CommonFractions } from "@/CommonFractions.enum"
import { calc } from "@/helperFunctions"
import { Page, Photo } from "@/interfaces"
import words from "@/words"
import Opening from "@classes/Opening"

export class Strap extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.StrapName)
    this.setDimensions({
      part1: {
        height1: calc(this.page.size.height, 1, CommonFractions.Quarter),
        width1: 2,
        units1: 1
      },
      part2: {
        height2: calc(this.photo.size.height, CommonFractions.Eighth),
        width2: calc(this.photo.size.height, CommonFractions.Eighth),
        units2: 1
      },
      part3: {
        height3: calc(this.photo.size.height, CommonFractions.Eighth),
        width3: calc(this.photo.size.height, CommonFractions.FiveEights),
        units3: 1
      }
    })
  }
}