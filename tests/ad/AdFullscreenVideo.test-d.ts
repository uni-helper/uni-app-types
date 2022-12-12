import { describe, expectTypeOf } from 'vitest';
import type {
  AdFullscreenVideoOnLoad,
  AdFullscreenVideoOnErrorDetail,
  AdFullscreenVideoOnError,
  AdFullscreenVideoOnClose,
  AdFullscreenVideoProps,
  AdFullscreenVideo,
} from '@/ad/AdFullscreenVideo';

describe('AdFullscreenVideo', () => {
  expectTypeOf<AdFullscreenVideoOnLoad>().toBeFunction();
  expectTypeOf<AdFullscreenVideoOnLoad>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnLoad>();

  expectTypeOf<AdFullscreenVideoOnErrorDetail>().toBeObject();
  expectTypeOf<AdFullscreenVideoOnErrorDetail>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnErrorDetail>();

  expectTypeOf<AdFullscreenVideoOnError>().toBeFunction();
  expectTypeOf<AdFullscreenVideoOnError>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnError>();

  expectTypeOf<AdFullscreenVideoOnClose>().toBeFunction();
  expectTypeOf<AdFullscreenVideoOnClose>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnClose>();

  expectTypeOf<AdFullscreenVideoProps>().toBeObject();
  expectTypeOf<AdFullscreenVideoProps>().toEqualTypeOf<UniHelper.AdFullscreenVideoProps>();

  expectTypeOf<AdFullscreenVideo>().not.toBeAny();
  expectTypeOf<AdFullscreenVideo>().toEqualTypeOf<UniHelper.AdFullscreenVideo>();
});
