import { describe, expectTypeOf } from 'vitest';
import type {
  ImageMode,
  ImageOnErrorEvent,
  ImageOnError,
  ImageOnLoadDetail,
  ImageOnLoadEvent,
  ImageOnLoad,
  ImageProps,
  Image,
  ImageInstance,
} from '@/media-components/Image';

describe('Image', () => {
  expectTypeOf<ImageMode>().toBeString();
  expectTypeOf<ImageMode>().toEqualTypeOf<UniHelper.ImageMode>();

  expectTypeOf<ImageOnErrorEvent>().toBeObject();
  expectTypeOf<ImageOnErrorEvent>().toEqualTypeOf<UniHelper.ImageOnErrorEvent>();

  expectTypeOf<ImageOnError>().toBeFunction();
  expectTypeOf<ImageOnError>().toEqualTypeOf<UniHelper.ImageOnError>();

  expectTypeOf<ImageOnLoadDetail>().toBeObject();
  expectTypeOf<ImageOnLoadDetail>().toEqualTypeOf<UniHelper.ImageOnLoadDetail>();

  expectTypeOf<ImageOnLoadEvent>().toBeObject();
  expectTypeOf<ImageOnLoadEvent>().toEqualTypeOf<UniHelper.ImageOnLoadEvent>();

  expectTypeOf<ImageOnLoad>().toBeFunction();
  expectTypeOf<ImageOnLoad>().toEqualTypeOf<UniHelper.ImageOnLoad>();

  expectTypeOf<ImageProps>().toBeObject();
  expectTypeOf<ImageProps>().toEqualTypeOf<UniHelper.ImageProps>();

  expectTypeOf<Image>().not.toBeAny();
  expectTypeOf<Image>().toEqualTypeOf<UniHelper.Image>();

  expectTypeOf<ImageInstance>().not.toBeAny();
  expectTypeOf<ImageInstance>().toEqualTypeOf<UniHelper.ImageInstance>();
});
