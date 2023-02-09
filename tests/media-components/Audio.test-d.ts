import { describe, expectTypeOf } from 'vitest';
import type {
  AudioOnErrorDetail,
  AudioOnError,
  AudioOnPlay,
  AudioOnPause,
  AudioOnTimeupdateDetail,
  AudioOnTimeupdate,
  AudioOnEnded,
  AudioProps,
  Audio,
  AudioInstance,
} from '@/media-components/Audio';

describe('Audio', () => {
  expectTypeOf<AudioOnErrorDetail>().toBeObject();
  expectTypeOf<AudioOnErrorDetail>().toEqualTypeOf<UniHelper.AudioOnErrorDetail>();

  expectTypeOf<AudioOnError>().toBeFunction();
  expectTypeOf<AudioOnError>().toEqualTypeOf<UniHelper.AudioOnError>();

  expectTypeOf<AudioOnPlay>().toBeFunction();
  expectTypeOf<AudioOnPlay>().toEqualTypeOf<UniHelper.AudioOnPlay>();

  expectTypeOf<AudioOnPause>().toBeFunction();
  expectTypeOf<AudioOnPause>().toEqualTypeOf<UniHelper.AudioOnPause>();

  expectTypeOf<AudioOnTimeupdateDetail>().toBeObject();
  expectTypeOf<AudioOnTimeupdateDetail>().toEqualTypeOf<UniHelper.AudioOnTimeupdateDetail>();

  expectTypeOf<AudioOnTimeupdate>().toBeFunction();
  expectTypeOf<AudioOnTimeupdate>().toEqualTypeOf<UniHelper.AudioOnTimeupdate>();

  expectTypeOf<AudioOnEnded>().toBeFunction();
  expectTypeOf<AudioOnEnded>().toEqualTypeOf<UniHelper.AudioOnEnded>();

  expectTypeOf<AudioProps>().toBeObject();
  expectTypeOf<AudioProps>().toEqualTypeOf<UniHelper.AudioProps>();

  expectTypeOf<Audio>().not.toBeAny();
  expectTypeOf<Audio>().toEqualTypeOf<UniHelper.Audio>();

  expectTypeOf<AudioInstance>().not.toBeAny();
  expectTypeOf<AudioInstance>().toEqualTypeOf<UniHelper.AudioInstance>();
});
