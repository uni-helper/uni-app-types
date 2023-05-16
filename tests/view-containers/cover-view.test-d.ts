import { describe, expectTypeOf } from 'vitest';
import type { CoverViewProps, CoverView, CoverViewInstance } from '@/index';

describe('CoverView', () => {
  expectTypeOf<CoverViewProps>().toBeObject();
  expectTypeOf<CoverViewProps>().toEqualTypeOf<UniHelper.CoverViewProps>();

  expectTypeOf<CoverView>().not.toBeAny();
  expectTypeOf<CoverView>().toEqualTypeOf<UniHelper.CoverView>();

  expectTypeOf<CoverViewInstance>().not.toBeAny();
  expectTypeOf<CoverViewInstance>().toEqualTypeOf<UniHelper.CoverViewInstance>();
});
