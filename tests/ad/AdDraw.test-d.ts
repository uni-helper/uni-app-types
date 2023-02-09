import { describe, expectTypeOf } from 'vitest';
import type {
  AdDrawOnLoad,
  AdDrawOnErrorDetail,
  AdDrawOnError,
  AdDrawProps,
  AdDraw,
  AdDrawInstance,
} from '@/ad/AdDraw';

describe('AdDraw', () => {
  expectTypeOf<AdDrawOnLoad>().toBeFunction();
  expectTypeOf<AdDrawOnLoad>().toEqualTypeOf<UniHelper.AdDrawOnLoad>();

  expectTypeOf<AdDrawOnErrorDetail>().toBeObject();
  expectTypeOf<AdDrawOnErrorDetail>().toEqualTypeOf<UniHelper.AdDrawOnErrorDetail>();

  expectTypeOf<AdDrawOnError>().toBeFunction();
  expectTypeOf<AdDrawOnError>().toEqualTypeOf<UniHelper.AdDrawOnError>();

  expectTypeOf<AdDrawProps>().toBeObject();
  expectTypeOf<AdDrawProps>().toEqualTypeOf<UniHelper.AdDrawProps>();

  expectTypeOf<AdDraw>().not.toBeAny();
  expectTypeOf<AdDraw>().toEqualTypeOf<UniHelper.AdDraw>();

  expectTypeOf<AdDrawInstance>().not.toBeAny();
  expectTypeOf<AdDrawInstance>().toEqualTypeOf<UniHelper.AdDrawInstance>();
});
