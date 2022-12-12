import { describe, expectTypeOf } from 'vitest';
import type {
  MatchMediaOrientation,
  MatchMediaProps,
  MatchMedia,
} from '@/view-containers/MatchMedia';

describe('MatchMedia', () => {
  expectTypeOf<MatchMediaOrientation>().toBeString();
  expectTypeOf<MatchMediaOrientation>().toEqualTypeOf<UniHelper.MatchMediaOrientation>();

  expectTypeOf<MatchMediaProps>().toBeObject();
  expectTypeOf<MatchMediaProps>().toEqualTypeOf<UniHelper.MatchMediaProps>();

  expectTypeOf<MatchMedia>().not.toBeAny();
  expectTypeOf<MatchMedia>().toEqualTypeOf<UniHelper.MatchMedia>();
});
