import { describe, expectTypeOf } from 'vitest';
import type {
  AdOnLoadEvent,
  AdOnLoad,
  AdOnErrorDetail,
  AdOnErrorEvent,
  AdOnError,
  AdOnCloseEvent,
  AdOnClose,
  AdProps,
  Ad,
  AdInstance,
} from '@/ad/Ad';

describe('Ad', () => {
  expectTypeOf<AdOnLoadEvent>().toBeObject();
  expectTypeOf<AdOnLoadEvent>().toEqualTypeOf<UniHelper.AdOnLoadEvent>();

  expectTypeOf<AdOnLoad>().toBeFunction();
  expectTypeOf<AdOnLoad>().toEqualTypeOf<UniHelper.AdOnLoad>();

  expectTypeOf<AdOnErrorDetail>().toBeObject();
  expectTypeOf<AdOnErrorDetail>().toEqualTypeOf<UniHelper.AdOnErrorDetail>();

  expectTypeOf<AdOnErrorEvent>().toBeObject();
  expectTypeOf<AdOnErrorEvent>().toEqualTypeOf<UniHelper.AdOnErrorEvent>();

  expectTypeOf<AdOnError>().toBeFunction();
  expectTypeOf<AdOnError>().toEqualTypeOf<UniHelper.AdOnError>();

  expectTypeOf<AdOnCloseEvent>().toBeObject();
  expectTypeOf<AdOnCloseEvent>().toEqualTypeOf<UniHelper.AdOnCloseEvent>();

  expectTypeOf<AdOnClose>().toBeFunction();
  expectTypeOf<AdOnClose>().toEqualTypeOf<UniHelper.AdOnClose>();

  expectTypeOf<AdProps>().toBeObject();
  expectTypeOf<AdProps>().toEqualTypeOf<UniHelper.AdProps>();

  expectTypeOf<Ad>().not.toBeAny();
  expectTypeOf<Ad>().toEqualTypeOf<UniHelper.Ad>();

  expectTypeOf<AdInstance>().not.toBeAny();
  expectTypeOf<AdInstance>().toEqualTypeOf<UniHelper.AdInstance>();
});
