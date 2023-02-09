import { describe, expectTypeOf } from 'vitest';
import type {
  ProgressActiveMode,
  ProgressOnActiveend,
  ProgressProps,
  Progress,
  ProgressInstance,
} from '@/basic-components/Progress';

describe('Progress', () => {
  expectTypeOf<ProgressActiveMode>().toBeString();
  expectTypeOf<ProgressActiveMode>().toEqualTypeOf<UniHelper.ProgressActiveMode>();

  expectTypeOf<ProgressOnActiveend>().toBeFunction();
  expectTypeOf<ProgressOnActiveend>().toEqualTypeOf<UniHelper.ProgressOnActiveend>();

  expectTypeOf<ProgressProps>().toBeObject();
  expectTypeOf<ProgressProps>().toEqualTypeOf<UniHelper.ProgressProps>();

  expectTypeOf<Progress>().not.toBeAny();
  expectTypeOf<Progress>().toEqualTypeOf<UniHelper.Progress>();

  expectTypeOf<ProgressInstance>().not.toBeAny();
  expectTypeOf<ProgressInstance>().toEqualTypeOf<UniHelper.ProgressInstance>();
});
