import { describe, expectTypeOf } from 'vitest';
import type {
  AdRewardedVideoUrlCallback,
  AdRewardedVideoOnLoad,
  AdRewardedVideoOnErrorDetail,
  AdRewardedVideoOnError,
  AdRewardedVideoOnClose,
  AdRewardedVideoProps,
  AdRewardedVideo,
} from '@/ad/AdRewardedVideo';

describe('AdRewardedVideo', () => {
  expectTypeOf<AdRewardedVideoUrlCallback>().toBeObject();
  expectTypeOf<AdRewardedVideoUrlCallback>().toEqualTypeOf<UniHelper.AdRewardedVideoUrlCallback>();

  expectTypeOf<AdRewardedVideoOnLoad>().toBeFunction();
  expectTypeOf<AdRewardedVideoOnLoad>().toEqualTypeOf<UniHelper.AdRewardedVideoOnLoad>();

  expectTypeOf<AdRewardedVideoOnErrorDetail>().toBeObject();
  expectTypeOf<AdRewardedVideoOnErrorDetail>().toEqualTypeOf<UniHelper.AdRewardedVideoOnErrorDetail>();

  expectTypeOf<AdRewardedVideoOnError>().toBeFunction();
  expectTypeOf<AdRewardedVideoOnError>().toEqualTypeOf<UniHelper.AdRewardedVideoOnError>();

  expectTypeOf<AdRewardedVideoOnClose>().toBeFunction();
  expectTypeOf<AdRewardedVideoOnClose>().toEqualTypeOf<UniHelper.AdRewardedVideoOnClose>();

  expectTypeOf<AdRewardedVideoProps>().toBeObject();
  expectTypeOf<AdRewardedVideoProps>().toEqualTypeOf<UniHelper.AdRewardedVideoProps>();

  expectTypeOf<AdRewardedVideo>().not.toBeAny();
  expectTypeOf<AdRewardedVideo>().toEqualTypeOf<UniHelper.AdRewardedVideo>();
});
