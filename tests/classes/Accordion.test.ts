import { CommonFractions } from '@/CommonFractions.enum';
import { calc } from '@/helperFunctions';
import { Page, Photo } from "@/interfaces";
import words from "@/words";
import { Accordion } from "@classes/Accordion";

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