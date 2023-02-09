import { describe, expectTypeOf } from 'vitest';
import type {
  AdInteractiveOnLoad,
  AdInteractiveOnErrorDetail,
  AdInteractiveOnError,
  AdInteractiveProps,
  AdInteractive,
  AdInteractiveInstance,
} from '@/ad/AdInteractive';

describe('AdInteractive', () => {
  expectTypeOf<AdInteractiveOnLoad>().toBeFunction();
  expectTypeOf<AdInteractiveOnLoad>().toEqualTypeOf<UniHelper.AdInteractiveOnLoad>();

  expectTypeOf<AdInteractiveOnErrorDetail>().toBeObject();
  expectTypeOf<AdInteractiveOnErrorDetail>().toEqualTypeOf<UniHelper.AdInteractiveOnErrorDetail>();

  expectTypeOf<AdInteractiveOnError>().toBeFunction();
  expectTypeOf<AdInteractiveOnError>().toEqualTypeOf<UniHelper.AdInteractiveOnError>();

  expectTypeOf<AdInteractiveProps>().toBeObject();
  expectTypeOf<AdInteractiveProps>().toEqualTypeOf<UniHelper.AdInteractiveProps>();

  expectTypeOf<AdInteractive>().not.toBeAny();
  expectTypeOf<AdInteractive>().toEqualTypeOf<UniHelper.AdInteractive>();

  expectTypeOf<AdInteractiveInstance>().not.toBeAny();
  expectTypeOf<AdInteractiveInstance>().toEqualTypeOf<UniHelper.AdInteractiveInstance>();
});
