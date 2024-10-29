import { CommonFractions } from '@/CommonFractions.enum';
import { calc } from '@/helperFunctions';
import { Page, Photo } from '@/interfaces';
import words from '@/words';
import { Cross } from '@classes/Cross';
import { describe, expect, it } from 'vitest';

describe('Cross', () => {
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

    const cross = new Cross(page, photo);

    expect(cross.getName()).toBe(words.CrossName);
    expect(cross.getDimensions()).toStrictEqual({
      part1: {
        height1: page.size.height,
        width1: calc(photo.size.width, CommonFractions.FiveEights),
        units1: 1,
      },
      part2: {
        height2: calc(photo.size.width, CommonFractions.Eighth),
        width2: calc(page.size.width, CommonFractions.Half),
        units2: 2,
      },
    });
  });
});