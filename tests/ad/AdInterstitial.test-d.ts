import { describe, expectTypeOf } from 'vitest';
import type {
  AdInterstitialOnLoadEvent,
  AdInterstitialOnLoad,
  AdInterstitialOnErrorDetail,
  AdInterstitialOnErrorEvent,
  AdInterstitialOnError,
  AdInterstitialOnCloseEvent,
  AdInterstitialOnClose,
  AdInterstitialProps,
  AdInterstitial,
  AdInterstitialInstance,
} from '@/ad/AdInterstitial';

describe('AdInterstitial', () => {
  expectTypeOf<AdInterstitialOnLoadEvent>().toBeObject();
  expectTypeOf<AdInterstitialOnLoadEvent>().toEqualTypeOf<UniHelper.AdInterstitialOnLoadEvent>();

  expectTypeOf<AdInterstitialOnLoad>().toBeFunction();
  expectTypeOf<AdInterstitialOnLoad>().toEqualTypeOf<UniHelper.AdInterstitialOnLoad>();

  expectTypeOf<AdInterstitialOnErrorDetail>().toBeObject();
  expectTypeOf<AdInterstitialOnErrorDetail>().toEqualTypeOf<UniHelper.AdInterstitialOnErrorDetail>();

  expectTypeOf<AdInterstitialOnErrorEvent>().toBeObject();
  expectTypeOf<AdInterstitialOnErrorEvent>().toEqualTypeOf<UniHelper.AdInterstitialOnErrorEvent>();

  expectTypeOf<AdInterstitialOnError>().toBeFunction();
  expectTypeOf<AdInterstitialOnError>().toEqualTypeOf<UniHelper.AdInterstitialOnError>();

  expectTypeOf<AdInterstitialOnCloseEvent>().toBeObject();
  expectTypeOf<AdInterstitialOnCloseEvent>().toEqualTypeOf<UniHelper.AdInterstitialOnCloseEvent>();

  expectTypeOf<AdInterstitialOnClose>().toBeFunction();
  expectTypeOf<AdInterstitialOnClose>().toEqualTypeOf<UniHelper.AdInterstitialOnClose>();

  expectTypeOf<AdInterstitialProps>().toBeObject();
  expectTypeOf<AdInterstitialProps>().toEqualTypeOf<UniHelper.AdInterstitialProps>();

  expectTypeOf<AdInterstitial>().not.toBeAny();
  expectTypeOf<AdInterstitial>().toEqualTypeOf<UniHelper.AdInterstitial>();

  expectTypeOf<AdInterstitialInstance>().not.toBeAny();
  expectTypeOf<AdInterstitialInstance>().toEqualTypeOf<UniHelper.AdInterstitialInstance>();
});
