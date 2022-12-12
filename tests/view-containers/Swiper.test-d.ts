import { describe, expectTypeOf } from 'vitest';
import type {
  SwiperSource,
  SwiperEasingFunction,
  SwiperOnChangeDetail,
  SwiperOnChange,
  SwiperOnTransitionDetail,
  SwiperOnTransition,
  SwiperOnAnimationfinishDetail,
  SwiperOnAnimationfinish,
  SwiperProps,
  Swiper,
} from '@/view-containers/Swiper';

describe('Swiper', () => {
  expectTypeOf<SwiperSource>().toBeString();
  expectTypeOf<SwiperSource>().toEqualTypeOf<UniHelper.SwiperSource>();

  expectTypeOf<SwiperEasingFunction>().toBeString();
  expectTypeOf<SwiperEasingFunction>().toEqualTypeOf<UniHelper.SwiperEasingFunction>();

  expectTypeOf<SwiperOnChangeDetail>().toBeObject();
  expectTypeOf<SwiperOnChangeDetail>().toEqualTypeOf<UniHelper.SwiperOnChangeDetail>();

  expectTypeOf<SwiperOnChange>().toBeFunction();
  expectTypeOf<SwiperOnChange>().toEqualTypeOf<UniHelper.SwiperOnChange>();

  expectTypeOf<SwiperOnTransitionDetail>().toBeObject();
  expectTypeOf<SwiperOnTransitionDetail>().toEqualTypeOf<UniHelper.SwiperOnTransitionDetail>();

  expectTypeOf<SwiperOnTransition>().toBeFunction();
  expectTypeOf<SwiperOnTransition>().toEqualTypeOf<UniHelper.SwiperOnTransition>();

  expectTypeOf<SwiperOnAnimationfinishDetail>().toBeObject();
  expectTypeOf<SwiperOnAnimationfinishDetail>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinishDetail>();

  expectTypeOf<SwiperOnAnimationfinish>().toBeFunction();
  expectTypeOf<SwiperOnAnimationfinish>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinish>();

  expectTypeOf<SwiperProps>().toBeObject();
  expectTypeOf<SwiperProps>().toEqualTypeOf<UniHelper.SwiperProps>();

  expectTypeOf<Swiper>().not.toBeAny();
  expectTypeOf<Swiper>().toEqualTypeOf<UniHelper.Swiper>();
});
