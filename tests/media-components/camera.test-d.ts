import { describe, expectTypeOf } from 'vitest';
import type {
  CameraMode,
  CameraResolution,
  CameraDevicePosition,
  CameraFlash,
  CameraFrameSize,
  CameraOnStopEvent,
  CameraOnStop,
  CameraOnErrorEvent,
  CameraOnError,
  CameraOnInitdoneDetail,
  CameraOnInitdoneEvent,
  CameraOnInitdone,
  CameraOnScancodeEvent,
  CameraOnScancode,
  CameraProps,
  Camera,
  CameraInstance,
} from '@/index';

describe('Camera', () => {
  expectTypeOf<CameraMode>().toBeString();
  expectTypeOf<CameraMode>().toEqualTypeOf<UniHelper.CameraMode>();

  expectTypeOf<CameraResolution>().toBeString();
  expectTypeOf<CameraResolution>().toEqualTypeOf<UniHelper.CameraResolution>();

  expectTypeOf<CameraDevicePosition>().toBeString();
  expectTypeOf<CameraDevicePosition>().toEqualTypeOf<UniHelper.CameraDevicePosition>();

  expectTypeOf<CameraFlash>().toBeString();
  expectTypeOf<CameraFlash>().toEqualTypeOf<UniHelper.CameraFlash>();

  expectTypeOf<CameraFrameSize>().toBeString();
  expectTypeOf<CameraFrameSize>().toEqualTypeOf<UniHelper.CameraFrameSize>();

  expectTypeOf<CameraOnStopEvent>().toBeObject();
  expectTypeOf<CameraOnStopEvent>().toEqualTypeOf<UniHelper.CameraOnStopEvent>();

  expectTypeOf<CameraOnStop>().toBeFunction();
  expectTypeOf<CameraOnStop>().toEqualTypeOf<UniHelper.CameraOnStop>();

  expectTypeOf<CameraOnErrorEvent>().toBeObject();
  expectTypeOf<CameraOnErrorEvent>().toEqualTypeOf<UniHelper.CameraOnErrorEvent>();

  expectTypeOf<CameraOnError>().toBeFunction();
  expectTypeOf<CameraOnError>().toEqualTypeOf<UniHelper.CameraOnError>();

  expectTypeOf<CameraOnInitdoneDetail>().toBeObject();
  expectTypeOf<CameraOnInitdoneDetail>().toEqualTypeOf<UniHelper.CameraOnInitdoneDetail>();

  expectTypeOf<CameraOnInitdoneEvent>().toBeObject();
  expectTypeOf<CameraOnInitdoneEvent>().toEqualTypeOf<UniHelper.CameraOnInitdoneEvent>();

  expectTypeOf<CameraOnInitdone>().toBeFunction();
  expectTypeOf<CameraOnInitdone>().toEqualTypeOf<UniHelper.CameraOnInitdone>();

  expectTypeOf<CameraOnScancodeEvent>().toBeObject();
  expectTypeOf<CameraOnScancodeEvent>().toEqualTypeOf<UniHelper.CameraOnScancodeEvent>();

  expectTypeOf<CameraOnScancode>().toBeFunction();
  expectTypeOf<CameraOnScancode>().toEqualTypeOf<UniHelper.CameraOnScancode>();

  expectTypeOf<CameraProps>().toBeObject();
  expectTypeOf<CameraProps>().toEqualTypeOf<UniHelper.CameraProps>();

  expectTypeOf<Camera>().not.toBeAny();
  expectTypeOf<Camera>().toEqualTypeOf<UniHelper.Camera>();

  expectTypeOf<CameraInstance>().not.toBeAny();
  expectTypeOf<CameraInstance>().toEqualTypeOf<UniHelper.CameraInstance>();
});
