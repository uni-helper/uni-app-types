import { describe, expectTypeOf } from 'vitest';
import type {
  MovableViewDirection,
  MovableViewSource,
  MovableViewOnChangeDetail,
  MovableViewOnChange,
  MovableViewOnScaleDetail,
  MovableViewOnScale,
  MovableViewProps,
  MovableView,
  MovableViewInstance,
} from '@/view-containers/MovableView';

describe('MovableView', () => {
  expectTypeOf<MovableViewDirection>().toBeString();
  expectTypeOf<MovableViewDirection>().toEqualTypeOf<UniHelper.MovableViewDirection>();

  expectTypeOf<MovableViewSource>().toBeString();
  expectTypeOf<MovableViewSource>().toEqualTypeOf<UniHelper.MovableViewSource>();

  expectTypeOf<MovableViewOnChangeDetail>().toBeObject();
  expectTypeOf<MovableViewOnChangeDetail>().toEqualTypeOf<UniHelper.MovableViewOnChangeDetail>();

  expectTypeOf<MovableViewOnChange>().toBeFunction();
  expectTypeOf<MovableViewOnChange>().toEqualTypeOf<UniHelper.MovableViewOnChange>();

  expectTypeOf<MovableViewOnScaleDetail>().toBeObject();
  expectTypeOf<MovableViewOnScaleDetail>().toEqualTypeOf<UniHelper.MovableViewOnScaleDetail>();

  expectTypeOf<MovableViewOnScale>().toBeFunction();
  expectTypeOf<MovableViewOnScale>().toEqualTypeOf<UniHelper.MovableViewOnScale>();

  expectTypeOf<MovableViewProps>().toBeObject();
  expectTypeOf<MovableViewProps>().toEqualTypeOf<UniHelper.MovableViewProps>();

  expectTypeOf<MovableView>().not.toBeAny();
  expectTypeOf<MovableView>().toEqualTypeOf<UniHelper.MovableView>();

  expectTypeOf<MovableViewInstance>().not.toBeAny();
  expectTypeOf<MovableViewInstance>().toEqualTypeOf<UniHelper.MovableViewInstance>();
});
