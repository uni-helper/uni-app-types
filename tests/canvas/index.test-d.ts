import { describe, expectTypeOf } from 'vitest';
import type {
  CanvasType,
  CanvasOnTouchstart,
  CanvasOnTouchmove,
  CanvasOnTouchend,
  CanvasOnTouchcancel,
  CanvasOnLongtap,
  CanvasOnErrorDetail,
  CanvasOnError,
  CanvasProps,
  Canvas,
} from '@/canvas';

describe('Canvas', () => {
  expectTypeOf<CanvasType>().toBeString();
  expectTypeOf<CanvasType>().toEqualTypeOf<UniHelper.CanvasType>();

  expectTypeOf<CanvasOnTouchstart>().toBeFunction();
  expectTypeOf<CanvasOnTouchstart>().toEqualTypeOf<UniHelper.CanvasOnTouchstart>();

  expectTypeOf<CanvasOnTouchmove>().toBeFunction();
  expectTypeOf<CanvasOnTouchmove>().toEqualTypeOf<UniHelper.CanvasOnTouchmove>();

  expectTypeOf<CanvasOnTouchend>().toBeFunction();
  expectTypeOf<CanvasOnTouchend>().toEqualTypeOf<UniHelper.CanvasOnTouchend>();

  expectTypeOf<CanvasOnTouchcancel>().toBeFunction();
  expectTypeOf<CanvasOnTouchcancel>().toEqualTypeOf<UniHelper.CanvasOnTouchcancel>();

  expectTypeOf<CanvasOnLongtap>().toBeFunction();
  expectTypeOf<CanvasOnLongtap>().toEqualTypeOf<UniHelper.CanvasOnLongtap>();

  expectTypeOf<CanvasOnErrorDetail>().toBeObject();
  expectTypeOf<CanvasOnErrorDetail>().toEqualTypeOf<UniHelper.CanvasOnErrorDetail>();

  expectTypeOf<CanvasOnError>().toBeFunction();
  expectTypeOf<CanvasOnError>().toEqualTypeOf<UniHelper.CanvasOnError>();

  expectTypeOf<CanvasProps>().toBeObject();
  expectTypeOf<CanvasProps>().toEqualTypeOf<UniHelper.CanvasProps>();

  expectTypeOf<Canvas>().not.toBeAny();
  expectTypeOf<Canvas>().toEqualTypeOf<UniHelper.Canvas>();
});
