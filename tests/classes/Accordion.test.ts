import { Accordion } from "../../src/classes/Accordion";
import { CommonFractions } from '../../src/CommonFractions.enum';
import { calc } from '../../src/helperFunctions';
import { Page, Photo } from "../../src/interfaces";
import words from "../../src/words";

describe("Accordion", () => {
  it("should set the name and dimensions correctly in the constructor", () => {
    const page: Page = {
      size: {
        height: 5,
        width: 6.75
      }
    };
    const photo: Photo = {
      size: {
        height: 5,
        width: 3.5
      }
    };

    const accordion = new Accordion(page, photo);

    expect(accordion.getName()).toBe(words.AccordionName);
    expect(accordion.getDimensions()).toStrictEqual({
      part1: {
        height1: page.size.height,
        width1: calc(photo.size.width + CommonFractions.FiveEights),
        units1: 2
      }
    });
  });
});