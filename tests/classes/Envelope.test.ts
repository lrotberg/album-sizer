import { describe, expect, it } from 'vitest';
import { Envelope } from '../../src/classes/Envelope';
import { CommonFractions } from '../../src/CommonFractions.enum';
import { calc } from '../../src/helperFunctions';
import { Page, Photo } from '../../src/interfaces';
import words from '../../src/words';

describe('Envelope', () => {
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

    const envelope = new Envelope(page, photo);

    expect(envelope.getName()).toBe(words.EnvelopeName);
    expect(envelope.getDimensions()).toStrictEqual({
      part1: {
        height1: calc(photo.size.width, 2, CommonFractions.FiveEights),
        width1: calc(photo.size.height, CommonFractions.Eighth),
        units1: 2,
      },
    });
  });
});