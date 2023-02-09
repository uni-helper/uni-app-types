import { describe, expectTypeOf } from 'vitest';
import type {
  AdOnLoad,
  AdOnErrorDetail,
  AdOnError,
  AdOnClose,
  AdProps,
  Ad,
  AdInstance,
} from '@/ad/Ad';

describe('Ad', () => {
  expectTypeOf<AdOnLoad>().toBeFunction();
  expectTypeOf<AdOnLoad>().toEqualTypeOf<UniHelper.AdOnLoad>();

  expectTypeOf<AdOnErrorDetail>().toBeObject();
  expectTypeOf<AdOnErrorDetail>().toEqualTypeOf<UniHelper.AdOnErrorDetail>();

  expectTypeOf<AdOnError>().toBeFunction();
  expectTypeOf<AdOnError>().toEqualTypeOf<UniHelper.AdOnError>();

  expectTypeOf<AdOnClose>().toBeFunction();
  expectTypeOf<AdOnClose>().toEqualTypeOf<UniHelper.AdOnClose>();

  expectTypeOf<AdProps>().toBeObject();
  expectTypeOf<AdProps>().toEqualTypeOf<UniHelper.AdProps>();

  expectTypeOf<Ad>().not.toBeAny();
  expectTypeOf<Ad>().toEqualTypeOf<UniHelper.Ad>();

  expectTypeOf<AdInstance>().not.toBeAny();
  expectTypeOf<AdInstance>().toEqualTypeOf<UniHelper.AdInstance>();
});
