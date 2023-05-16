import { describe, expectTypeOf } from 'vitest';
import type { MovableAreaProps, MovableArea, MovableAreaInstance } from '@/index';

describe('MovableArea', () => {
  expectTypeOf<MovableAreaProps>().toBeObject();
  expectTypeOf<MovableAreaProps>().toEqualTypeOf<UniHelper.MovableAreaProps>();

  expectTypeOf<MovableArea>().not.toBeAny();
  expectTypeOf<MovableArea>().toEqualTypeOf<UniHelper.MovableArea>();

  expectTypeOf<MovableAreaInstance>().not.toBeAny();
  expectTypeOf<MovableAreaInstance>().toEqualTypeOf<UniHelper.MovableAreaInstance>();
});
