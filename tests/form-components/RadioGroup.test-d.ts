import { describe, expectTypeOf } from 'vitest';
import type {
  RadioGroupOnChangeDetail,
  RadioGroupOnChange,
  RadioGroupProps,
  RadioGroup,
} from '@/form-components/RadioGroup';

describe('RadioGroup', () => {
  expectTypeOf<RadioGroupOnChangeDetail>().toBeObject();
  expectTypeOf<RadioGroupOnChangeDetail>().toEqualTypeOf<UniHelper.RadioGroupOnChangeDetail>();

  expectTypeOf<RadioGroupOnChange>().toBeFunction();
  expectTypeOf<RadioGroupOnChange>().toEqualTypeOf<UniHelper.RadioGroupOnChange>();

  expectTypeOf<RadioGroupProps>().toBeObject();
  expectTypeOf<RadioGroupProps>().toEqualTypeOf<UniHelper.RadioGroupProps>();

  expectTypeOf<RadioGroup>().not.toBeAny();
  expectTypeOf<RadioGroup>().toEqualTypeOf<UniHelper.RadioGroup>();
});
