import { describe, expectTypeOf } from 'vitest';
import type { SwiperItemProps, SwiperItem } from '@/view-containers/SwiperItem';

describe('SwiperItem', () => {
  expectTypeOf<SwiperItemProps>().toBeObject();
  expectTypeOf<SwiperItemProps>().toEqualTypeOf<UniHelper.SwiperItemProps>();

  expectTypeOf<SwiperItem>().not.toBeAny();
  expectTypeOf<SwiperItem>().toEqualTypeOf<UniHelper.SwiperItem>();
});
