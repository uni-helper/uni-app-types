import { describe, expectTypeOf } from 'vitest';
import type { ViewProps, View, ViewInstance } from '@/view-containers/View';

describe('View', () => {
  expectTypeOf<ViewProps>().toBeObject();
  expectTypeOf<ViewProps>().toEqualTypeOf<UniHelper.ViewProps>();

  expectTypeOf<View>().not.toBeAny();
  expectTypeOf<View>().toEqualTypeOf<UniHelper.View>();

  expectTypeOf<ViewInstance>().not.toBeAny();
  expectTypeOf<ViewInstance>().toEqualTypeOf<UniHelper.ViewInstance>();
});
