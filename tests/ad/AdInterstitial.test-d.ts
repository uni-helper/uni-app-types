import { describe, expectTypeOf } from 'vitest';
import type {
  AdInterstitialOnLoad,
  AdInterstitialOnErrorDetail,
  AdInterstitialOnError,
  AdInterstitialOnClose,
  AdInterstitialProps,
  AdInterstitial,
} from '@/ad/AdInterstitial';

describe('AdInterstitial', () => {
  expectTypeOf<AdInterstitialOnLoad>().toBeFunction();
  expectTypeOf<AdInterstitialOnLoad>().toEqualTypeOf<UniHelper.AdInterstitialOnLoad>();

  expectTypeOf<AdInterstitialOnErrorDetail>().toBeObject();
  expectTypeOf<AdInterstitialOnErrorDetail>().toEqualTypeOf<UniHelper.AdInterstitialOnErrorDetail>();

  expectTypeOf<AdInterstitialOnError>().toBeFunction();
  expectTypeOf<AdInterstitialOnError>().toEqualTypeOf<UniHelper.AdInterstitialOnError>();

  expectTypeOf<AdInterstitialOnClose>().toBeFunction();
  expectTypeOf<AdInterstitialOnClose>().toEqualTypeOf<UniHelper.AdInterstitialOnClose>();

  expectTypeOf<AdInterstitialProps>().toBeObject();
  expectTypeOf<AdInterstitialProps>().toEqualTypeOf<UniHelper.AdInterstitialProps>();

  expectTypeOf<AdInterstitial>().not.toBeAny();
  expectTypeOf<AdInterstitial>().toEqualTypeOf<UniHelper.AdInterstitial>();
});
