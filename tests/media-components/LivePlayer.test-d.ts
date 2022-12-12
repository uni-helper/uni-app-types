import { describe, expectTypeOf } from 'vitest';
import type {
  LivePlayerMode,
  LivePlayerOrientation,
  LivePlayerObjectFit,
  LivePlayerSoundMode,
  LivePlayerPictureInPictureMode,
  LivePlayerCode,
  LivePlayerInfo,
  LivePlayerOnStatechangeDetail,
  LivePlayerOnStatechange,
  LivePlayerOnNetstatusDetail,
  LivePlayerOnNetstatus,
  LivePlayerOnFullscreenchangeDetail,
  LivePlayerOnFullscreenchange,
  LivePlayerOnAudiovolumenotify,
  LivePlayerOnEnterpictureinpicture,
  LivePlayerOnLeavepictureinpicture,
  LivePlayerProps,
  LivePlayer,
} from '@/media-components/LivePlayer';

describe('LivePlayer', () => {
  expectTypeOf<LivePlayerMode>().toBeString();
  expectTypeOf<LivePlayerMode>().toEqualTypeOf<UniHelper.LivePlayerMode>();

  expectTypeOf<LivePlayerOrientation>().toBeString();
  expectTypeOf<LivePlayerOrientation>().toEqualTypeOf<UniHelper.LivePlayerOrientation>();

  expectTypeOf<LivePlayerObjectFit>().toBeString();
  expectTypeOf<LivePlayerObjectFit>().toEqualTypeOf<UniHelper.LivePlayerObjectFit>();

  expectTypeOf<LivePlayerSoundMode>().toBeString();
  expectTypeOf<LivePlayerSoundMode>().toEqualTypeOf<UniHelper.LivePlayerSoundMode>();

  expectTypeOf<LivePlayerPictureInPictureMode>().toBeString();
  expectTypeOf<LivePlayerPictureInPictureMode>().toEqualTypeOf<UniHelper.LivePlayerPictureInPictureMode>();

  expectTypeOf<LivePlayerCode>().toBeNumber();
  expectTypeOf<LivePlayerCode>().toEqualTypeOf<UniHelper.LivePlayerCode>();

  expectTypeOf<LivePlayerInfo>().toBeObject();
  expectTypeOf<LivePlayerInfo>().toEqualTypeOf<UniHelper.LivePlayerInfo>();

  expectTypeOf<LivePlayerOnStatechangeDetail>().toBeObject();
  expectTypeOf<LivePlayerOnStatechangeDetail>().toEqualTypeOf<UniHelper.LivePlayerOnStatechangeDetail>();

  expectTypeOf<LivePlayerOnStatechange>().toBeFunction();
  expectTypeOf<LivePlayerOnStatechange>().toEqualTypeOf<UniHelper.LivePlayerOnStatechange>();

  expectTypeOf<LivePlayerOnNetstatusDetail>().toBeObject();
  expectTypeOf<LivePlayerOnNetstatusDetail>().toEqualTypeOf<UniHelper.LivePlayerOnNetstatusDetail>();

  expectTypeOf<LivePlayerOnNetstatus>().toBeFunction();
  expectTypeOf<LivePlayerOnNetstatus>().toEqualTypeOf<UniHelper.LivePlayerOnNetstatus>();

  expectTypeOf<LivePlayerOnFullscreenchangeDetail>().toBeObject();
  expectTypeOf<LivePlayerOnFullscreenchangeDetail>().toEqualTypeOf<UniHelper.LivePlayerOnFullscreenchangeDetail>();

  expectTypeOf<LivePlayerOnFullscreenchange>().toBeFunction();
  expectTypeOf<LivePlayerOnFullscreenchange>().toEqualTypeOf<UniHelper.LivePlayerOnFullscreenchange>();

  expectTypeOf<LivePlayerOnAudiovolumenotify>().toBeFunction();
  expectTypeOf<LivePlayerOnAudiovolumenotify>().toEqualTypeOf<UniHelper.LivePlayerOnAudiovolumenotify>();

  expectTypeOf<LivePlayerOnEnterpictureinpicture>().toBeFunction();
  expectTypeOf<LivePlayerOnEnterpictureinpicture>().toEqualTypeOf<UniHelper.LivePlayerOnEnterpictureinpicture>();

  expectTypeOf<LivePlayerOnLeavepictureinpicture>().toBeFunction();
  expectTypeOf<LivePlayerOnLeavepictureinpicture>().toEqualTypeOf<UniHelper.LivePlayerOnLeavepictureinpicture>();

  expectTypeOf<LivePlayerProps>().toBeObject();
  expectTypeOf<LivePlayerProps>().toEqualTypeOf<UniHelper.LivePlayerProps>();

  expectTypeOf<LivePlayer>().not.toBeAny();
  expectTypeOf<LivePlayer>().toEqualTypeOf<UniHelper.LivePlayer>();
});
