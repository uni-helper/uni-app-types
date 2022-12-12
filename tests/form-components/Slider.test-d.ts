import { describe, expectTypeOf } from 'vitest';
import type {
  SliderValue,
  SliderOnChangeDetail,
  SliderOnChange,
  SliderOnChangingDetail,
  SliderOnChanging,
  SliderProps,
  Slider,
} from '@/form-components/Slider';

describe('Slider', () => {
  expectTypeOf<SliderValue>().toBeNumber();
  expectTypeOf<SliderValue>().toEqualTypeOf<UniHelper.SliderValue>();

  expectTypeOf<SliderOnChangeDetail>().toBeObject();
  expectTypeOf<SliderOnChangeDetail>().toEqualTypeOf<UniHelper.SliderOnChangeDetail>();

  expectTypeOf<SliderOnChange>().toBeFunction();
  expectTypeOf<SliderOnChange>().toEqualTypeOf<UniHelper.SliderOnChange>();

  expectTypeOf<SliderOnChangingDetail>().toBeObject();
  expectTypeOf<SliderOnChangingDetail>().toEqualTypeOf<UniHelper.SliderOnChangingDetail>();

  expectTypeOf<SliderOnChanging>().toBeObject();
  expectTypeOf<SliderOnChanging>().toEqualTypeOf<UniHelper.SliderOnChanging>();

  expectTypeOf<SliderProps>().toBeObject();
  expectTypeOf<SliderProps>().toEqualTypeOf<UniHelper.SliderProps>();

  expectTypeOf<Slider>().not.toBeAny();
  expectTypeOf<Slider>().toEqualTypeOf<UniHelper.Slider>();
});
