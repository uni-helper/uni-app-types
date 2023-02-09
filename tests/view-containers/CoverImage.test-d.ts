import { describe, expectTypeOf } from 'vitest';
import type {
  CoverImageOnLoad,
  CoverImageOnError,
  CoverImageProps,
  CoverImage,
  CoverImageInstance,
} from '@/view-containers/CoverImage';

describe('CoverImage', () => {
  expectTypeOf<CoverImageOnLoad>().toBeFunction();
  expectTypeOf<CoverImageOnLoad>().toEqualTypeOf<UniHelper.CoverImageOnLoad>();

  expectTypeOf<CoverImageOnError>().toBeFunction();
  expectTypeOf<CoverImageOnError>().toEqualTypeOf<UniHelper.CoverImageOnError>();

  expectTypeOf<CoverImageProps>().toBeObject();
  expectTypeOf<CoverImageProps>().toEqualTypeOf<UniHelper.CoverImageProps>();

  expectTypeOf<CoverImage>().not.toBeAny();
  expectTypeOf<CoverImage>().toEqualTypeOf<UniHelper.CoverImage>();

  expectTypeOf<CoverImageInstance>().not.toBeAny();
  expectTypeOf<CoverImageInstance>().toEqualTypeOf<UniHelper.CoverImageInstance>();
});
