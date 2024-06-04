import { CommonFractions } from "../CommonFractions.enum"
import { calc } from "../helperFunctions"
import { Page, Photo } from "../interfaces"
import words from "../words"
import Opening from "./Opening"

export class SideWaterfall extends Opening {
  constructor(page: Page, photo: Photo) {
    super(page, photo)
    this.setName(words.SideWaterfallName)
    this.setDimensions({
      part1: {
        height1: this.page.size.height,
        width1: calc(this.photo.size.width, 1, CommonFractions.Eighth),
        units1: 1
      }
    })
  }

  setUnits = (units: number) => {
    this.dimensions.part1.units1 = units
  }
}