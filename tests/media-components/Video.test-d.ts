import { describe, expectTypeOf } from 'vitest';
import type {
  VideoDanmu,
  VideoDirection,
  VideoObjectFit,
  VideoPlayBtnPosition,
  VideoCodec,
  VideoMobilenetHintType,
  VideoPlayStrategy,
  VideoOnPlay,
  VideoOnPause,
  VideoOnEnded,
  VideoOnTimeupdateDetail,
  VideoOnTimeupdate,
  VideoOnFullscreenchangeDetail,
  VideoOnFullscreenchange,
  VideoOnWaiting,
  VideoOnError,
  VideoOnProgressDetail,
  VideoOnProgress,
  VideoOnLoadeddata,
  VideoOnLoadstart,
  VideoOnSeeked,
  VideoOnSeeking,
  VideoOnLoadedmetadataDetail,
  VideoOnLoadedmetadata,
  VideoOnFullscreenclickDetail,
  VideoOnFullscreenclick,
  VideoOnControlstoggleDetail,
  VideoOnControlstoggle,
  VideoProps,
  Video,
} from '@/media-components/Video';

describe('Video', () => {
  expectTypeOf<VideoDanmu>().toBeObject();
  expectTypeOf<VideoDanmu>().toEqualTypeOf<UniHelper.VideoDanmu>();

  expectTypeOf<VideoDirection>().toBeNumber();
  expectTypeOf<VideoDirection>().toEqualTypeOf<UniHelper.VideoDirection>();

  expectTypeOf<VideoObjectFit>().toBeString();
  expectTypeOf<VideoObjectFit>().toEqualTypeOf<UniHelper.VideoObjectFit>();

  expectTypeOf<VideoPlayBtnPosition>().toBeString();
  expectTypeOf<VideoPlayBtnPosition>().toEqualTypeOf<UniHelper.VideoPlayBtnPosition>();

  expectTypeOf<VideoCodec>().toBeString();
  expectTypeOf<VideoCodec>().toEqualTypeOf<UniHelper.VideoCodec>();

  expectTypeOf<VideoMobilenetHintType>().toBeNumber();
  expectTypeOf<VideoMobilenetHintType>().toEqualTypeOf<UniHelper.VideoMobilenetHintType>();

  expectTypeOf<VideoPlayStrategy>().toBeNumber();
  expectTypeOf<VideoPlayStrategy>().toEqualTypeOf<UniHelper.VideoPlayStrategy>();

  expectTypeOf<VideoOnPlay>().toBeFunction();
  expectTypeOf<VideoOnPlay>().toEqualTypeOf<UniHelper.VideoOnPlay>();

  expectTypeOf<VideoOnPause>().toBeFunction();
  expectTypeOf<VideoOnPause>().toEqualTypeOf<UniHelper.VideoOnPause>();

  expectTypeOf<VideoOnEnded>().toBeFunction();
  expectTypeOf<VideoOnEnded>().toEqualTypeOf<UniHelper.VideoOnEnded>();

  expectTypeOf<VideoOnTimeupdateDetail>().toBeObject();
  expectTypeOf<VideoOnTimeupdateDetail>().toEqualTypeOf<UniHelper.VideoOnTimeupdateDetail>();

  expectTypeOf<VideoOnTimeupdate>().toBeFunction();
  expectTypeOf<VideoOnTimeupdate>().toEqualTypeOf<UniHelper.VideoOnTimeupdate>();

  expectTypeOf<VideoOnFullscreenchangeDetail>().toBeObject();
  expectTypeOf<VideoOnFullscreenchangeDetail>().toEqualTypeOf<UniHelper.VideoOnFullscreenchangeDetail>();

  expectTypeOf<VideoOnFullscreenchange>().toBeFunction();
  expectTypeOf<VideoOnFullscreenchange>().toEqualTypeOf<UniHelper.VideoOnFullscreenchange>();

  expectTypeOf<VideoOnWaiting>().toBeFunction();
  expectTypeOf<VideoOnWaiting>().toEqualTypeOf<UniHelper.VideoOnWaiting>();

  expectTypeOf<VideoOnError>().toBeFunction();
  expectTypeOf<VideoOnError>().toEqualTypeOf<UniHelper.VideoOnError>();

  expectTypeOf<VideoOnProgressDetail>().toBeObject();
  expectTypeOf<VideoOnProgressDetail>().toEqualTypeOf<UniHelper.VideoOnProgressDetail>();

  expectTypeOf<VideoOnProgress>().toBeFunction();
  expectTypeOf<VideoOnProgress>().toEqualTypeOf<UniHelper.VideoOnProgress>();

  expectTypeOf<VideoOnLoadeddata>().toBeFunction();
  expectTypeOf<VideoOnLoadeddata>().toEqualTypeOf<UniHelper.VideoOnLoadeddata>();

  expectTypeOf<VideoOnLoadstart>().toBeFunction();
  expectTypeOf<VideoOnLoadstart>().toEqualTypeOf<UniHelper.VideoOnLoadstart>();

  expectTypeOf<VideoOnSeeked>().toBeFunction();
  expectTypeOf<VideoOnSeeked>().toEqualTypeOf<UniHelper.VideoOnSeeked>();

  expectTypeOf<VideoOnSeeking>().toBeFunction();
  expectTypeOf<VideoOnSeeking>().toEqualTypeOf<UniHelper.VideoOnSeeking>();

  expectTypeOf<VideoOnLoadedmetadataDetail>().toBeObject();
  expectTypeOf<VideoOnLoadedmetadataDetail>().toEqualTypeOf<UniHelper.VideoOnLoadedmetadataDetail>();

  expectTypeOf<VideoOnLoadedmetadata>().toBeFunction();
  expectTypeOf<VideoOnLoadedmetadata>().toEqualTypeOf<UniHelper.VideoOnLoadedmetadata>();

  expectTypeOf<VideoOnFullscreenclickDetail>().toBeObject();
  expectTypeOf<VideoOnFullscreenclickDetail>().toEqualTypeOf<UniHelper.VideoOnFullscreenclickDetail>();

  expectTypeOf<VideoOnFullscreenclick>().toBeFunction();
  expectTypeOf<VideoOnFullscreenclick>().toEqualTypeOf<UniHelper.VideoOnFullscreenclick>();

  expectTypeOf<VideoOnControlstoggleDetail>().toBeObject();
  expectTypeOf<VideoOnControlstoggleDetail>().toEqualTypeOf<UniHelper.VideoOnControlstoggleDetail>();

  expectTypeOf<VideoOnControlstoggle>().toBeFunction();
  expectTypeOf<VideoOnControlstoggle>().toEqualTypeOf<UniHelper.VideoOnControlstoggle>();

  expectTypeOf<VideoProps>().toBeObject();
  expectTypeOf<VideoProps>().toEqualTypeOf<UniHelper.VideoProps>();

  expectTypeOf<Video>().not.toBeAny();
  expectTypeOf<Video>().toEqualTypeOf<UniHelper.Video>();
});
