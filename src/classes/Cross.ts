import { CommonFractions } from "@/CommonFractions.enum"
import { calc } from "@/helperFunctions"
import { Page, Photo } from "@/interfaces"
import words from "@/words"
import { Flap } from "@classes/Flap"

export class Cross extends Flap {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.CrossName)
    this.setDimensions(
      {
        part1:
        {
          ...this.getDimensions().part1
        },
        part2:
        {
          height2: calc(this.photo.size.width, CommonFractions.Eighth),
          width2: calc(this.page.size.width, CommonFractions.Half),
          units2: 2
        }
      },
    )
  }
}