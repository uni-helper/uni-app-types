import { describe, expectTypeOf } from 'vitest';
import type {
  ImageMode,
  ImageOnError,
  ImageOnLoadDetail,
  ImageOnLoad,
  ImageProps,
  Image,
} from '@/media-components/Image';

describe('Image', () => {
  expectTypeOf<ImageMode>().toBeString();
  expectTypeOf<ImageMode>().toEqualTypeOf<UniHelper.ImageMode>();

  expectTypeOf<ImageOnError>().toBeFunction();
  expectTypeOf<ImageOnError>().toEqualTypeOf<UniHelper.ImageOnError>();

  expectTypeOf<ImageOnLoadDetail>().toBeObject();
  expectTypeOf<ImageOnLoadDetail>().toEqualTypeOf<UniHelper.ImageOnLoadDetail>();

  expectTypeOf<ImageOnLoad>().toBeFunction();
  expectTypeOf<ImageOnLoad>().toEqualTypeOf<UniHelper.ImageOnLoad>();

  expectTypeOf<ImageProps>().toBeObject();
  expectTypeOf<ImageProps>().toEqualTypeOf<UniHelper.ImageProps>();

  expectTypeOf<Image>().not.toBeAny();
  expectTypeOf<Image>().toEqualTypeOf<UniHelper.Image>();
});
