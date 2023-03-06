import { describe, expectTypeOf } from 'vitest';
import type {
  AudioOnErrorDetail,
  AudioOnErrorEvent,
  AudioOnError,
  AudioOnPlayEvent,
  AudioOnPlay,
  AudioOnPauseEvent,
  AudioOnPause,
  AudioOnTimeupdateDetail,
  AudioOnTimeupdateEvent,
  AudioOnTimeupdate,
  AudioOnEndedEvent,
  AudioOnEnded,
  AudioProps,
  Audio,
  AudioInstance,
} from '@/media-components/Audio';

describe('Audio', () => {
  expectTypeOf<AudioOnErrorDetail>().toBeObject();
  expectTypeOf<AudioOnErrorDetail>().toEqualTypeOf<UniHelper.AudioOnErrorDetail>();

  expectTypeOf<AudioOnErrorEvent>().toBeObject();
  expectTypeOf<AudioOnErrorEvent>().toEqualTypeOf<UniHelper.AudioOnErrorEvent>();

  expectTypeOf<AudioOnError>().toBeFunction();
  expectTypeOf<AudioOnError>().toEqualTypeOf<UniHelper.AudioOnError>();

  expectTypeOf<AudioOnPlayEvent>().toBeObject();
  expectTypeOf<AudioOnPlayEvent>().toEqualTypeOf<UniHelper.AudioOnPlayEvent>();

  expectTypeOf<AudioOnPlay>().toBeFunction();
  expectTypeOf<AudioOnPlay>().toEqualTypeOf<UniHelper.AudioOnPlay>();

  expectTypeOf<AudioOnPauseEvent>().toBeObject();
  expectTypeOf<AudioOnPauseEvent>().toEqualTypeOf<UniHelper.AudioOnPauseEvent>();

  expectTypeOf<AudioOnPause>().toBeFunction();
  expectTypeOf<AudioOnPause>().toEqualTypeOf<UniHelper.AudioOnPause>();

  expectTypeOf<AudioOnTimeupdateDetail>().toBeObject();
  expectTypeOf<AudioOnTimeupdateDetail>().toEqualTypeOf<UniHelper.AudioOnTimeupdateDetail>();

  expectTypeOf<AudioOnTimeupdateEvent>().toBeObject();
  expectTypeOf<AudioOnTimeupdateEvent>().toEqualTypeOf<UniHelper.AudioOnTimeupdateEvent>();

  expectTypeOf<AudioOnTimeupdate>().toBeFunction();
  expectTypeOf<AudioOnTimeupdate>().toEqualTypeOf<UniHelper.AudioOnTimeupdate>();

  expectTypeOf<AudioOnEndedEvent>().toBeObject();
  expectTypeOf<AudioOnEndedEvent>().toEqualTypeOf<UniHelper.AudioOnEndedEvent>();

  expectTypeOf<AudioOnEnded>().toBeFunction();
  expectTypeOf<AudioOnEnded>().toEqualTypeOf<UniHelper.AudioOnEnded>();

  expectTypeOf<AudioProps>().toBeObject();
  expectTypeOf<AudioProps>().toEqualTypeOf<UniHelper.AudioProps>();

  expectTypeOf<Audio>().not.toBeAny();
  expectTypeOf<Audio>().toEqualTypeOf<UniHelper.Audio>();

  expectTypeOf<AudioInstance>().not.toBeAny();
  expectTypeOf<AudioInstance>().toEqualTypeOf<UniHelper.AudioInstance>();
});
