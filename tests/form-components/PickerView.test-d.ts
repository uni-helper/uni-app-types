import { describe, expectTypeOf } from 'vitest';
import type {
  PickerViewValueElement,
  PickerViewValue,
  PickerViewOnChangeDetail,
  PickerViewOnChange,
  PickerViewOnPickstart,
  PickerViewOnPickend,
  PickerViewProps,
  PickerView,
} from '@/form-components/PickerView';

describe('PickerView', () => {
  expectTypeOf<PickerViewValueElement>().toBeNumber();
  expectTypeOf<PickerViewValueElement>().toEqualTypeOf<UniHelper.PickerViewValueElement>();

  expectTypeOf<PickerViewValue>().toBeArray();
  expectTypeOf<PickerViewValue>().toEqualTypeOf<UniHelper.PickerViewValue>();

  expectTypeOf<PickerViewOnChangeDetail>().toBeObject();
  expectTypeOf<PickerViewOnChangeDetail>().toEqualTypeOf<UniHelper.PickerViewOnChangeDetail>();

  expectTypeOf<PickerViewOnChange>().toBeFunction();
  expectTypeOf<PickerViewOnChange>().toEqualTypeOf<UniHelper.PickerViewOnChange>();

  expectTypeOf<PickerViewOnPickstart>().toBeFunction();
  expectTypeOf<PickerViewOnPickstart>().toEqualTypeOf<UniHelper.PickerViewOnPickstart>();

  expectTypeOf<PickerViewOnPickend>().toBeFunction();
  expectTypeOf<PickerViewOnPickend>().toEqualTypeOf<UniHelper.PickerViewOnPickend>();

  expectTypeOf<PickerViewProps>().toBeObject();
  expectTypeOf<PickerViewProps>().toEqualTypeOf<UniHelper.PickerViewProps>();

  expectTypeOf<PickerView>().not.toBeAny();
  expectTypeOf<PickerView>().toEqualTypeOf<UniHelper.PickerView>();
});
