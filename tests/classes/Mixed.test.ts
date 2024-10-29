import { CommonFractions } from '@/CommonFractions.enum';
import { calc } from '@/helperFunctions';
import { Page, Photo } from '@/interfaces';
import words from '@/words';
import { Mixed } from '@classes/Mixed';
import { describe, expect, it } from 'vitest';

describe('Mixed', () => {
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

    const mixed = new Mixed(page, photo);

    expect(mixed.getName()).toBe(words.MixedName);
    expect(mixed.getDimensions()).toStrictEqual({
      part1: {
        height1: page.size.height,
        width1: calc(photo.size.width, CommonFractions.FiveEights),
        units1: 1,
      },
      part2: {
        height2: calc(page.size.height, CommonFractions.FiveEights),
        width2: calc(photo.size.width, CommonFractions.Eighth),
        units2: 1,
      },
    });
  });
});