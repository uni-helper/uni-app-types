import { describe, expectTypeOf } from 'vitest';
import type { MovableAreaProps, MovableArea } from '@/view-containers/MovableArea';

describe('MovableArea', () => {
  expectTypeOf<MovableAreaProps>().toBeObject();
  expectTypeOf<MovableAreaProps>().toEqualTypeOf<UniHelper.MovableAreaProps>();

  expectTypeOf<MovableArea>().not.toBeAny();
  expectTypeOf<MovableArea>().toEqualTypeOf<UniHelper.MovableArea>();
});
