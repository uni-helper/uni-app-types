import { describe, expectTypeOf } from 'vitest';
import type {
  PickerViewValueElement,
  PickerViewValue,
  PickerViewOnChangeDetail,
  PickerViewOnChangeEvent,
  PickerViewOnChange,
  PickerViewOnPickstartEvent,
  PickerViewOnPickstart,
  PickerViewOnPickendEvent,
  PickerViewOnPickend,
  PickerViewProps,
  PickerView,
  PickerViewInstance,
} from '@/index';

describe('PickerView', () => {
  expectTypeOf<PickerViewValueElement>().toBeNumber();
  expectTypeOf<PickerViewValueElement>().toEqualTypeOf<UniHelper.PickerViewValueElement>();

  expectTypeOf<PickerViewValue>().toBeArray();
  expectTypeOf<PickerViewValue>().toEqualTypeOf<UniHelper.PickerViewValue>();

  expectTypeOf<PickerViewOnChangeDetail>().toBeObject();
  expectTypeOf<PickerViewOnChangeDetail>().toEqualTypeOf<UniHelper.PickerViewOnChangeDetail>();

  expectTypeOf<PickerViewOnChangeEvent>().toBeObject();
  expectTypeOf<PickerViewOnChangeEvent>().toEqualTypeOf<UniHelper.PickerViewOnChangeEvent>();

  expectTypeOf<PickerViewOnChange>().toBeFunction();
  expectTypeOf<PickerViewOnChange>().toEqualTypeOf<UniHelper.PickerViewOnChange>();

  expectTypeOf<PickerViewOnPickstartEvent>().toBeObject();
  expectTypeOf<PickerViewOnPickstartEvent>().toEqualTypeOf<UniHelper.PickerViewOnPickstartEvent>();

  expectTypeOf<PickerViewOnPickstart>().toBeFunction();
  expectTypeOf<PickerViewOnPickstart>().toEqualTypeOf<UniHelper.PickerViewOnPickstart>();

  expectTypeOf<PickerViewOnPickendEvent>().toBeObject();
  expectTypeOf<PickerViewOnPickendEvent>().toEqualTypeOf<UniHelper.PickerViewOnPickendEvent>();

  expectTypeOf<PickerViewOnPickend>().toBeFunction();
  expectTypeOf<PickerViewOnPickend>().toEqualTypeOf<UniHelper.PickerViewOnPickend>();

  expectTypeOf<PickerViewProps>().toBeObject();
  expectTypeOf<PickerViewProps>().toEqualTypeOf<UniHelper.PickerViewProps>();

  expectTypeOf<PickerView>().not.toBeAny();
  expectTypeOf<PickerView>().toEqualTypeOf<UniHelper.PickerView>();

  expectTypeOf<PickerViewInstance>().not.toBeAny();
  expectTypeOf<PickerViewInstance>().toEqualTypeOf<UniHelper.PickerViewInstance>();
});
