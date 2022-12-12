import { describe, expectTypeOf } from 'vitest';
import type {
  LivePusherMode,
  LivePusherOrientation,
  LivePusherAudioQuality,
  LivePusherDevicePosition,
  LivePusherLocalMirror,
  LivePusherAudioReverbType,
  LivePusherAudioVolumeType,
  LivePusherCode,
  LivePusherInfo,
  LiverPusherErrCode,
  LivePusherOnStatechangeDetail,
  LivePusherOnStatechange,
  LivePusherOnNetstatusDetail,
  LivePusherOnNetstatus,
  LivePusherOnErrorDetail,
  LivePusherOnError,
  LivePusherOnBgmstart,
  LivePusherOnBgmprogressDetail,
  LivePusherOnBgmprogress,
  LivePusherOnBgmcomplete,
  LivePusherProps,
  LivePusher,
} from '@/media-components/LivePusher';

describe('LivePusher', () => {
  expectTypeOf<LivePusherMode>().toBeString();
  expectTypeOf<LivePusherMode>().toEqualTypeOf<UniHelper.LivePusherMode>();

  expectTypeOf<LivePusherOrientation>().toBeString();
  expectTypeOf<LivePusherOrientation>().toEqualTypeOf<UniHelper.LivePusherOrientation>();

  expectTypeOf<LivePusherAudioQuality>().toBeString();
  expectTypeOf<LivePusherAudioQuality>().toEqualTypeOf<UniHelper.LivePusherAudioQuality>();

  expectTypeOf<LivePusherDevicePosition>().toBeString();
  expectTypeOf<LivePusherDevicePosition>().toEqualTypeOf<UniHelper.LivePusherDevicePosition>();

  expectTypeOf<LivePusherLocalMirror>().toBeString();
  expectTypeOf<LivePusherLocalMirror>().toEqualTypeOf<UniHelper.LivePusherLocalMirror>();

  expectTypeOf<LivePusherAudioReverbType>().toBeNumber();
  expectTypeOf<LivePusherAudioReverbType>().toEqualTypeOf<UniHelper.LivePusherAudioReverbType>();

  expectTypeOf<LivePusherAudioVolumeType>().toBeString();
  expectTypeOf<LivePusherAudioVolumeType>().toEqualTypeOf<UniHelper.LivePusherAudioVolumeType>();

  expectTypeOf<LivePusherCode>().toBeNumber();
  expectTypeOf<LivePusherCode>().toEqualTypeOf<UniHelper.LivePusherCode>();

  expectTypeOf<LivePusherInfo>().toBeObject();
  expectTypeOf<LivePusherInfo>().toEqualTypeOf<UniHelper.LivePusherInfo>();

  expectTypeOf<LiverPusherErrCode>().toBeNumber();
  expectTypeOf<LiverPusherErrCode>().toEqualTypeOf<UniHelper.LiverPusherErrCode>();

  expectTypeOf<LivePusherOnStatechangeDetail>().toBeObject();
  expectTypeOf<LivePusherOnStatechangeDetail>().toEqualTypeOf<UniHelper.LivePusherOnStatechangeDetail>();

  expectTypeOf<LivePusherOnStatechange>().toBeFunction();
  expectTypeOf<LivePusherOnStatechange>().toEqualTypeOf<UniHelper.LivePusherOnStatechange>();

  expectTypeOf<LivePusherOnNetstatusDetail>().toBeObject();
  expectTypeOf<LivePusherOnNetstatusDetail>().toEqualTypeOf<UniHelper.LivePusherOnNetstatusDetail>();

  expectTypeOf<LivePusherOnNetstatus>().toBeFunction();
  expectTypeOf<LivePusherOnNetstatus>().toEqualTypeOf<UniHelper.LivePusherOnNetstatus>();

  expectTypeOf<LivePusherOnErrorDetail>().toBeObject();
  expectTypeOf<LivePusherOnErrorDetail>().toEqualTypeOf<UniHelper.LivePusherOnErrorDetail>();

  expectTypeOf<LivePusherOnError>().toBeFunction();
  expectTypeOf<LivePusherOnError>().toEqualTypeOf<UniHelper.LivePusherOnError>();

  expectTypeOf<LivePusherOnBgmstart>().toBeFunction();
  expectTypeOf<LivePusherOnBgmstart>().toEqualTypeOf<UniHelper.LivePusherOnBgmstart>();

  expectTypeOf<LivePusherOnBgmprogressDetail>().toBeObject();
  expectTypeOf<LivePusherOnBgmprogressDetail>().toEqualTypeOf<UniHelper.LivePusherOnBgmprogressDetail>();

  expectTypeOf<LivePusherOnBgmprogress>().toBeFunction();
  expectTypeOf<LivePusherOnBgmprogress>().toEqualTypeOf<UniHelper.LivePusherOnBgmprogress>();

  expectTypeOf<LivePusherOnBgmcomplete>().toBeFunction();
  expectTypeOf<LivePusherOnBgmcomplete>().toEqualTypeOf<UniHelper.LivePusherOnBgmcomplete>();

  expectTypeOf<LivePusherProps>().toBeObject();
  expectTypeOf<LivePusherProps>().toEqualTypeOf<UniHelper.LivePusherProps>();

  expectTypeOf<LivePusher>().not.toBeAny();
  expectTypeOf<LivePusher>().toEqualTypeOf<UniHelper.LivePusher>();
});
