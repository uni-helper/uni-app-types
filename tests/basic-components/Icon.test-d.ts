import { describe, expectTypeOf } from 'vitest';
import type { IconProps, Icon, IconInstance } from '@/basic-components/Icon';

describe('Icon', () => {
  expectTypeOf<IconProps>().toBeObject();
  expectTypeOf<IconProps>().toEqualTypeOf<UniHelper.IconProps>();

  expectTypeOf<Icon>().not.toBeAny();
  expectTypeOf<Icon>().toEqualTypeOf<UniHelper.Icon>();

  expectTypeOf<IconInstance>().not.toBeAny();
  expectTypeOf<IconInstance>().toEqualTypeOf<UniHelper.IconInstance>();
});
