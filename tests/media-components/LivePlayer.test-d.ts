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
  LivePlayerOnStatechangeEvent,
  LivePlayerOnStatechange,
  LivePlayerOnNetstatusDetail,
  LivePlayerOnNetstatusEvent,
  LivePlayerOnNetstatus,
  LivePlayerOnFullscreenchangeDetail,
  LivePlayerOnFullscreenchangeEvent,
  LivePlayerOnFullscreenchange,
  LivePlayerOnAudiovolumenotifyEvent,
  LivePlayerOnAudiovolumenotify,
  LivePlayerOnEnterpictureinpictureEvent,
  LivePlayerOnEnterpictureinpicture,
  LivePlayerOnLeavepictureinpictureEvent,
  LivePlayerOnLeavepictureinpicture,
  LivePlayerProps,
  LivePlayer,
  LivePlayerInstance,
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

  expectTypeOf<LivePlayerOnStatechangeEvent>().toBeObject();
  expectTypeOf<LivePlayerOnStatechangeEvent>().toEqualTypeOf<UniHelper.LivePlayerOnStatechangeEvent>();

  expectTypeOf<LivePlayerOnStatechange>().toBeFunction();
  expectTypeOf<LivePlayerOnStatechange>().toEqualTypeOf<UniHelper.LivePlayerOnStatechange>();

  expectTypeOf<LivePlayerOnNetstatusDetail>().toBeObject();
  expectTypeOf<LivePlayerOnNetstatusDetail>().toEqualTypeOf<UniHelper.LivePlayerOnNetstatusDetail>();

  expectTypeOf<LivePlayerOnNetstatusEvent>().toBeObject();
  expectTypeOf<LivePlayerOnNetstatusEvent>().toEqualTypeOf<UniHelper.LivePlayerOnNetstatusEvent>();

  expectTypeOf<LivePlayerOnNetstatus>().toBeFunction();
  expectTypeOf<LivePlayerOnNetstatus>().toEqualTypeOf<UniHelper.LivePlayerOnNetstatus>();

  expectTypeOf<LivePlayerOnFullscreenchangeDetail>().toBeObject();
  expectTypeOf<LivePlayerOnFullscreenchangeDetail>().toEqualTypeOf<UniHelper.LivePlayerOnFullscreenchangeDetail>();

  expectTypeOf<LivePlayerOnFullscreenchangeEvent>().toBeObject();
  expectTypeOf<LivePlayerOnFullscreenchangeEvent>().toEqualTypeOf<UniHelper.LivePlayerOnFullscreenchangeEvent>();

  expectTypeOf<LivePlayerOnFullscreenchange>().toBeFunction();
  expectTypeOf<LivePlayerOnFullscreenchange>().toEqualTypeOf<UniHelper.LivePlayerOnFullscreenchange>();

  expectTypeOf<LivePlayerOnAudiovolumenotifyEvent>().toBeObject();
  expectTypeOf<LivePlayerOnAudiovolumenotifyEvent>().toEqualTypeOf<UniHelper.LivePlayerOnAudiovolumenotifyEvent>();

  expectTypeOf<LivePlayerOnAudiovolumenotify>().toBeFunction();
  expectTypeOf<LivePlayerOnAudiovolumenotify>().toEqualTypeOf<UniHelper.LivePlayerOnAudiovolumenotify>();

  expectTypeOf<LivePlayerOnEnterpictureinpictureEvent>().toBeObject();
  expectTypeOf<LivePlayerOnEnterpictureinpictureEvent>().toEqualTypeOf<UniHelper.LivePlayerOnEnterpictureinpictureEvent>();

  expectTypeOf<LivePlayerOnEnterpictureinpicture>().toBeFunction();
  expectTypeOf<LivePlayerOnEnterpictureinpicture>().toEqualTypeOf<UniHelper.LivePlayerOnEnterpictureinpicture>();

  expectTypeOf<LivePlayerOnLeavepictureinpictureEvent>().toBeObject();
  expectTypeOf<LivePlayerOnLeavepictureinpictureEvent>().toEqualTypeOf<UniHelper.LivePlayerOnLeavepictureinpictureEvent>();

  expectTypeOf<LivePlayerOnLeavepictureinpicture>().toBeFunction();
  expectTypeOf<LivePlayerOnLeavepictureinpicture>().toEqualTypeOf<UniHelper.LivePlayerOnLeavepictureinpicture>();

  expectTypeOf<LivePlayerProps>().toBeObject();
  expectTypeOf<LivePlayerProps>().toEqualTypeOf<UniHelper.LivePlayerProps>();

  expectTypeOf<LivePlayer>().not.toBeAny();
  expectTypeOf<LivePlayer>().toEqualTypeOf<UniHelper.LivePlayer>();

  expectTypeOf<LivePlayerInstance>().not.toBeAny();
  expectTypeOf<LivePlayerInstance>().toEqualTypeOf<UniHelper.LivePlayerInstance>();
});
