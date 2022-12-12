import { describe, expectTypeOf } from 'vitest';
import type {
  SwitchChecked,
  SwitchType,
  SwitchOnChangeDetail,
  SwitchOnChange,
  SwitchProps,
  Switch,
} from '@/form-components/Switch';

describe('Switch', () => {
  expectTypeOf<SwitchChecked>().toBeBoolean();
  expectTypeOf<SwitchChecked>().toEqualTypeOf<UniHelper.SwitchChecked>();

  expectTypeOf<SwitchType>().toBeString();
  expectTypeOf<SwitchType>().toEqualTypeOf<UniHelper.SwitchType>();

  expectTypeOf<SwitchOnChangeDetail>().toBeObject();
  expectTypeOf<SwitchOnChangeDetail>().toEqualTypeOf<UniHelper.SwitchOnChangeDetail>();

  expectTypeOf<SwitchOnChange>().toBeFunction();
  expectTypeOf<SwitchOnChange>().toEqualTypeOf<UniHelper.SwitchOnChange>();

  expectTypeOf<SwitchProps>().toBeObject();
  expectTypeOf<SwitchProps>().toEqualTypeOf<UniHelper.SwitchProps>();

  expectTypeOf<Switch>().not.toBeAny();
  expectTypeOf<Switch>().toEqualTypeOf<UniHelper.Switch>();
});
