import { describe, expectTypeOf } from 'vitest';
import type { SwiperItemProps, SwiperItem, SwiperItemInstance } from '@/index';

describe('SwiperItem', () => {
  expectTypeOf<SwiperItemProps>().toBeObject();
  expectTypeOf<SwiperItemProps>().toEqualTypeOf<UniHelper.SwiperItemProps>();

  expectTypeOf<SwiperItem>().not.toBeAny();
  expectTypeOf<SwiperItem>().toEqualTypeOf<UniHelper.SwiperItem>();

  expectTypeOf<SwiperItemInstance>().not.toBeAny();
  expectTypeOf<SwiperItemInstance>().toEqualTypeOf<UniHelper.SwiperItemInstance>();
});
