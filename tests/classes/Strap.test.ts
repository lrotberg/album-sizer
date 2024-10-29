import { CommonFractions } from '@/CommonFractions.enum';
import { calc } from '@/helperFunctions';
import { Page, Photo } from '@/interfaces';
import words from '@/words';
import { Strap } from '@classes/Strap';
import { describe, expect, it } from 'vitest';

describe('Strap', () => {
  it('should set the name and dimensions correctly in the constructor', () => {
    const page: Page = {
      size: {
        height: 5,
        width: 6.75,
      },
    };
    const photo: Photo = {
      size: {
        height: 5,
        width: 3.5,
      },
    };

    const strap = new Strap(page, photo);

    expect(strap.getName()).toBe(words.StrapName);
    expect(strap.getDimensions()).toStrictEqual({
      part1: {
        height1: calc(page.size.height, 1, CommonFractions.Quarter),
        width1: 2,
        units1: 1,
      },
      part2: {
        height2: calc(photo.size.height, CommonFractions.Eighth),
        width2: calc(photo.size.height, CommonFractions.Eighth),
        units2: 1,
      },
      part3: {
        height3: calc(photo.size.height, CommonFractions.Eighth),
        width3: calc(photo.size.height, CommonFractions.FiveEights),
        units3: 1,
      },
    });
  });
});
