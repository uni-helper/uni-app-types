import { describe, expectTypeOf } from 'vitest';
import type {
  EventTarget,
  BaseEvent,
  CustomEvent,
  TouchDetail,
  TouchCanvasDetail,
  BaseTouchEvent,
  TouchEvent,
  TouchCanvasEvent,
} from '@/events';

describe('Events', () => {
  expectTypeOf<EventTarget>().toBeObject();
  expectTypeOf<EventTarget>().toEqualTypeOf<UniHelper.EventTarget>();

  expectTypeOf<BaseEvent>().toBeObject();
  expectTypeOf<BaseEvent>().toEqualTypeOf<UniHelper.BaseEvent>();

  expectTypeOf<CustomEvent>().toBeObject();
  expectTypeOf<CustomEvent>().toEqualTypeOf<UniHelper.CustomEvent>();

  expectTypeOf<TouchDetail>().toBeObject();
  expectTypeOf<TouchDetail>().toEqualTypeOf<UniHelper.TouchDetail>();

  expectTypeOf<TouchCanvasDetail>().toBeObject();
  expectTypeOf<TouchCanvasDetail>().toEqualTypeOf<UniHelper.TouchCanvasDetail>();

  expectTypeOf<BaseTouchEvent>().toBeObject();
  expectTypeOf<BaseTouchEvent>().toEqualTypeOf<UniHelper.BaseTouchEvent>();

  expectTypeOf<TouchEvent>().toBeObject();
  expectTypeOf<TouchEvent>().toEqualTypeOf<UniHelper.TouchEvent>();

  expectTypeOf<TouchCanvasEvent>().toBeObject();
  expectTypeOf<TouchCanvasEvent>().toEqualTypeOf<UniHelper.TouchCanvasEvent>();
});
