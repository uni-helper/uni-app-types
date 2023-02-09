import { describe, expectTypeOf } from 'vitest';
import type {
  CameraMode,
  CameraResolution,
  CameraDevicePosition,
  CameraFlash,
  CameraFrameSize,
  CameraOnStop,
  CameraOnError,
  CameraOnInitdoneDetail,
  CameraOnInitdone,
  CameraOnScancode,
  CameraProps,
  Camera,
  CameraInstance,
} from '@/media-components/Camera';

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

  expectTypeOf<CameraOnStop>().toBeFunction();
  expectTypeOf<CameraOnStop>().toEqualTypeOf<UniHelper.CameraOnStop>();

  expectTypeOf<CameraOnError>().toBeFunction();
  expectTypeOf<CameraOnError>().toEqualTypeOf<UniHelper.CameraOnError>();

  expectTypeOf<CameraOnInitdoneDetail>().toBeObject();
  expectTypeOf<CameraOnInitdoneDetail>().toEqualTypeOf<UniHelper.CameraOnInitdoneDetail>();

  expectTypeOf<CameraOnInitdone>().toBeFunction();
  expectTypeOf<CameraOnInitdone>().toEqualTypeOf<UniHelper.CameraOnInitdone>();

  expectTypeOf<CameraOnScancode>().toBeFunction();
  expectTypeOf<CameraOnScancode>().toEqualTypeOf<UniHelper.CameraOnScancode>();

  expectTypeOf<CameraProps>().toBeObject();
  expectTypeOf<CameraProps>().toEqualTypeOf<UniHelper.CameraProps>();

  expectTypeOf<Camera>().not.toBeAny();
  expectTypeOf<Camera>().toEqualTypeOf<UniHelper.Camera>();

  expectTypeOf<CameraInstance>().not.toBeAny();
  expectTypeOf<CameraInstance>().toEqualTypeOf<UniHelper.CameraInstance>();
});
