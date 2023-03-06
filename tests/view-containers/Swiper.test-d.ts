import { describe, expectTypeOf } from 'vitest';
import type {
  SwiperSource,
  SwiperEasingFunction,
  SwiperOnChangeDetail,
  SwiperOnChangeEvent,
  SwiperOnChange,
  SwiperOnTransitionDetail,
  SwiperOnTransitionEvent,
  SwiperOnTransition,
  SwiperOnAnimationfinishDetail,
  SwiperOnAnimationfinishEvent,
  SwiperOnAnimationfinish,
  SwiperProps,
  Swiper,
  SwiperInstance,
} from '@/view-containers/Swiper';

describe('Swiper', () => {
  expectTypeOf<SwiperSource>().toBeString();
  expectTypeOf<SwiperSource>().toEqualTypeOf<UniHelper.SwiperSource>();

  expectTypeOf<SwiperEasingFunction>().toBeString();
  expectTypeOf<SwiperEasingFunction>().toEqualTypeOf<UniHelper.SwiperEasingFunction>();

  expectTypeOf<SwiperOnChangeDetail>().toBeObject();
  expectTypeOf<SwiperOnChangeDetail>().toEqualTypeOf<UniHelper.SwiperOnChangeDetail>();

  expectTypeOf<SwiperOnChangeEvent>().toBeObject();
  expectTypeOf<SwiperOnChangeEvent>().toEqualTypeOf<UniHelper.SwiperOnChangeEvent>();

  expectTypeOf<SwiperOnChange>().toBeFunction();
  expectTypeOf<SwiperOnChange>().toEqualTypeOf<UniHelper.SwiperOnChange>();

  expectTypeOf<SwiperOnTransitionDetail>().toBeObject();
  expectTypeOf<SwiperOnTransitionDetail>().toEqualTypeOf<UniHelper.SwiperOnTransitionDetail>();

  expectTypeOf<SwiperOnTransitionEvent>().toBeObject();
  expectTypeOf<SwiperOnTransitionEvent>().toEqualTypeOf<UniHelper.SwiperOnTransitionEvent>();

  expectTypeOf<SwiperOnTransition>().toBeFunction();
  expectTypeOf<SwiperOnTransition>().toEqualTypeOf<UniHelper.SwiperOnTransition>();

  expectTypeOf<SwiperOnAnimationfinishDetail>().toBeObject();
  expectTypeOf<SwiperOnAnimationfinishDetail>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinishDetail>();

  expectTypeOf<SwiperOnAnimationfinishEvent>().toBeObject();
  expectTypeOf<SwiperOnAnimationfinishEvent>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinishEvent>();

  expectTypeOf<SwiperOnAnimationfinish>().toBeFunction();
  expectTypeOf<SwiperOnAnimationfinish>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinish>();

  expectTypeOf<SwiperProps>().toBeObject();
  expectTypeOf<SwiperProps>().toEqualTypeOf<UniHelper.SwiperProps>();

  expectTypeOf<Swiper>().not.toBeAny();
  expectTypeOf<Swiper>().toEqualTypeOf<UniHelper.Swiper>();

  expectTypeOf<SwiperInstance>().not.toBeAny();
  expectTypeOf<SwiperInstance>().toEqualTypeOf<UniHelper.SwiperInstance>();
});
