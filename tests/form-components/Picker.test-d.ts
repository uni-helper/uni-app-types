import { describe, expectTypeOf } from 'vitest';
import type {
  SelectorPickerRange,
  SelectorPickerValue,
  SelectorPickerSelectorType,
  SelectorPickerOnChangeDetail,
  SelectorPickerOnChange,
  SelectorPickerOnCancel,
  SelectorPickerProps,
  MultiSelectorPickerRange,
  MultiSelectorPickerValueElement,
  MultiSelectorPickerValue,
  MultiSelectorPickerOnChangeDetail,
  MultiSelectorPickerOnChange,
  MultiSelectorPickerOnColumnchangeDetail,
  MultiSelectorPickerOnColumnchange,
  MultiSelectorPickerOnCancel,
  MultiSelectorPickerProps,
  TimePickerValue,
  TimePickerOnChangeDetail,
  TimePickerOnChange,
  TimePickerOnCancel,
  TimePickerProps,
  DatePickerValue,
  DatePickerFields,
  DatePickerOnChangeDetail,
  DatePickerOnChange,
  DatePickerOnCancel,
  DatePickerProps,
  RegionPickerValueElement,
  RegionPickerValue,
  RegionPickerLevel,
  RegionPickerOnChangeDetail,
  RegionPickerOnChange,
  RegionPickerOnCancel,
  RegionPickerProps,
  PickerValue,
  PickerProps,
  Picker,
  PickerInstance,
} from '@/form-components/Picker';

describe('Picker', () => {
  expectTypeOf<SelectorPickerRange>().toBeArray();
  expectTypeOf<SelectorPickerRange>().toEqualTypeOf<UniHelper.SelectorPickerRange>();

  expectTypeOf<SelectorPickerValue>().toBeNumber();
  expectTypeOf<SelectorPickerValue>().toEqualTypeOf<UniHelper.SelectorPickerValue>();

  expectTypeOf<SelectorPickerSelectorType>().toBeString();
  expectTypeOf<SelectorPickerSelectorType>().toEqualTypeOf<UniHelper.SelectorPickerSelectorType>();

  expectTypeOf<SelectorPickerOnChangeDetail>().toBeObject();
  expectTypeOf<SelectorPickerOnChangeDetail>().toEqualTypeOf<UniHelper.SelectorPickerOnChangeDetail>();

  expectTypeOf<SelectorPickerOnChange>().toBeFunction();
  expectTypeOf<SelectorPickerOnChange>().toEqualTypeOf<UniHelper.SelectorPickerOnChange>();

  expectTypeOf<SelectorPickerOnCancel>().toBeFunction();
  expectTypeOf<SelectorPickerOnCancel>().toEqualTypeOf<UniHelper.SelectorPickerOnCancel>();

  expectTypeOf<SelectorPickerProps>().toBeObject();
  expectTypeOf<SelectorPickerProps>().toEqualTypeOf<UniHelper.SelectorPickerProps>();

  expectTypeOf<MultiSelectorPickerRange>().toBeArray();
  expectTypeOf<MultiSelectorPickerRange>().toEqualTypeOf<UniHelper.MultiSelectorPickerRange>();

  expectTypeOf<MultiSelectorPickerValueElement>().toBeNumber();
  expectTypeOf<MultiSelectorPickerValueElement>().toEqualTypeOf<UniHelper.MultiSelectorPickerValueElement>();

  expectTypeOf<MultiSelectorPickerValue>().toBeArray();
  expectTypeOf<MultiSelectorPickerValue>().toEqualTypeOf<UniHelper.MultiSelectorPickerValue>();

  expectTypeOf<MultiSelectorPickerOnChangeDetail>().toBeObject();
  expectTypeOf<MultiSelectorPickerOnChangeDetail>().toEqualTypeOf<UniHelper.MultiSelectorPickerOnChangeDetail>();

  expectTypeOf<MultiSelectorPickerOnChange>().toBeFunction();
  expectTypeOf<MultiSelectorPickerOnChange>().toEqualTypeOf<UniHelper.MultiSelectorPickerOnChange>();

  expectTypeOf<MultiSelectorPickerOnColumnchangeDetail>().toBeObject();
  expectTypeOf<MultiSelectorPickerOnColumnchangeDetail>().toEqualTypeOf<UniHelper.MultiSelectorPickerOnColumnchangeDetail>();

  expectTypeOf<MultiSelectorPickerOnColumnchange>().toBeFunction();
  expectTypeOf<MultiSelectorPickerOnColumnchange>().toEqualTypeOf<UniHelper.MultiSelectorPickerOnColumnchange>();

  expectTypeOf<MultiSelectorPickerOnCancel>().toBeFunction();
  expectTypeOf<MultiSelectorPickerOnCancel>().toEqualTypeOf<UniHelper.MultiSelectorPickerOnCancel>();

  expectTypeOf<MultiSelectorPickerProps>().toBeObject();
  expectTypeOf<MultiSelectorPickerProps>().toEqualTypeOf<UniHelper.MultiSelectorPickerProps>();

  expectTypeOf<TimePickerValue>().toBeString();
  expectTypeOf<TimePickerValue>().toEqualTypeOf<UniHelper.TimePickerValue>();

  expectTypeOf<TimePickerOnChangeDetail>().toBeObject();
  expectTypeOf<TimePickerOnChangeDetail>().toEqualTypeOf<UniHelper.TimePickerOnChangeDetail>();

  expectTypeOf<TimePickerOnChange>().toBeFunction();
  expectTypeOf<TimePickerOnChange>().toEqualTypeOf<UniHelper.TimePickerOnChange>();

  expectTypeOf<TimePickerOnCancel>().toBeFunction();
  expectTypeOf<TimePickerOnCancel>().toEqualTypeOf<UniHelper.TimePickerOnCancel>();

  expectTypeOf<TimePickerProps>().toBeObject();
  expectTypeOf<TimePickerProps>().toEqualTypeOf<UniHelper.TimePickerProps>();

  expectTypeOf<DatePickerValue>().toBeString();
  expectTypeOf<DatePickerValue>().toEqualTypeOf<UniHelper.DatePickerValue>();

  expectTypeOf<DatePickerFields>().toBeString();
  expectTypeOf<DatePickerFields>().toEqualTypeOf<UniHelper.DatePickerFields>();

  expectTypeOf<DatePickerOnChangeDetail>().toBeObject();
  expectTypeOf<DatePickerOnChangeDetail>().toEqualTypeOf<UniHelper.DatePickerOnChangeDetail>();

  expectTypeOf<DatePickerOnChange>().toBeFunction();
  expectTypeOf<DatePickerOnChange>().toEqualTypeOf<UniHelper.DatePickerOnChange>();

  expectTypeOf<DatePickerOnCancel>().toBeFunction();
  expectTypeOf<DatePickerOnCancel>().toEqualTypeOf<UniHelper.DatePickerOnCancel>();

  expectTypeOf<DatePickerProps>().toBeObject();
  expectTypeOf<DatePickerProps>().toEqualTypeOf<UniHelper.DatePickerProps>();

  expectTypeOf<RegionPickerValueElement>().toBeString();
  expectTypeOf<RegionPickerValueElement>().toEqualTypeOf<UniHelper.RegionPickerValueElement>();

  expectTypeOf<RegionPickerValue>().toBeArray();
  expectTypeOf<RegionPickerValue>().toEqualTypeOf<UniHelper.RegionPickerValue>();

  expectTypeOf<RegionPickerLevel>().toBeString();
  expectTypeOf<RegionPickerLevel>().toEqualTypeOf<UniHelper.RegionPickerLevel>();

  expectTypeOf<RegionPickerOnChangeDetail>().toBeObject();
  expectTypeOf<RegionPickerOnChangeDetail>().toEqualTypeOf<UniHelper.RegionPickerOnChangeDetail>();

  expectTypeOf<RegionPickerOnChange>().toBeFunction();
  expectTypeOf<RegionPickerOnChange>().toEqualTypeOf<UniHelper.RegionPickerOnChange>();

  expectTypeOf<RegionPickerOnCancel>().toBeFunction();
  expectTypeOf<RegionPickerOnCancel>().toEqualTypeOf<UniHelper.RegionPickerOnCancel>();

  expectTypeOf<RegionPickerProps>().toBeObject();
  expectTypeOf<RegionPickerProps>().toEqualTypeOf<UniHelper.RegionPickerProps>();

  expectTypeOf<PickerValue>().not.toBeAny();
  expectTypeOf<PickerValue>().toEqualTypeOf<UniHelper.PickerValue>();

  expectTypeOf<PickerProps>().toBeObject();
  expectTypeOf<PickerProps>().toEqualTypeOf<UniHelper.PickerProps>();

  expectTypeOf<Picker>().not.toBeAny();
  expectTypeOf<Picker>().toEqualTypeOf<UniHelper.Picker>();

  expectTypeOf<PickerInstance>().not.toBeAny();
  expectTypeOf<PickerInstance>().toEqualTypeOf<UniHelper.PickerInstance>();
});
