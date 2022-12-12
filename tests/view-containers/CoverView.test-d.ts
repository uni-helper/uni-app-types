import { describe, expectTypeOf } from 'vitest';
import type { CoverViewProps, CoverView } from '@/view-containers/CoverView';

describe('CoverView', () => {
  expectTypeOf<CoverViewProps>().toBeObject();
  expectTypeOf<CoverViewProps>().toEqualTypeOf<UniHelper.CoverViewProps>();

  expectTypeOf<CoverView>().not.toBeAny();
  expectTypeOf<CoverView>().toEqualTypeOf<UniHelper.CoverView>();
});
