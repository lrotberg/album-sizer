import { CommonFractions } from '@/CommonFractions.enum';
import { calc } from '@/helperFunctions';
import { Page, Photo } from '@/interfaces';
import words from '@/words';
import { Envelope } from '@classes/Envelope';
import { describe, expect, it } from 'vitest';

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