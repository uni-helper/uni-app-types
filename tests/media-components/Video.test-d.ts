import { describe, expectTypeOf } from 'vitest';
import type {
  VideoDanmu,
  VideoDirection,
  VideoObjectFit,
  VideoPlayBtnPosition,
  VideoCodec,
  VideoMobilenetHintType,
  VideoPlayStrategy,
  VideoOnPlayEvent,
  VideoOnPlay,
  VideoOnPauseEvent,
  VideoOnPause,
  VideoOnEndedEvent,
  VideoOnEnded,
  VideoOnTimeupdateDetail,
  VideoOnTimeupdateEvent,
  VideoOnTimeupdate,
  VideoOnFullscreenchangeDetail,
  VideoOnFullscreenchangeEvent,
  VideoOnFullscreenchange,
  VideoOnWaitingEvent,
  VideoOnWaiting,
  VideoOnErrorEvent,
  VideoOnError,
  VideoOnProgressDetail,
  VideoOnProgressEvent,
  VideoOnProgress,
  VideoOnLoadeddataEvent,
  VideoOnLoadeddata,
  VideoOnLoadstartEvent,
  VideoOnLoadstart,
  VideoOnSeekedEvent,
  VideoOnSeeked,
  VideoOnSeekingEvent,
  VideoOnSeeking,
  VideoOnLoadedmetadataDetail,
  VideoOnLoadedmetadataEvent,
  VideoOnLoadedmetadata,
  VideoOnFullscreenclickDetail,
  VideoOnFullscreenclickEvent,
  VideoOnFullscreenclick,
  VideoOnControlstoggleDetail,
  VideoOnControlstoggleEvent,
  VideoOnControlstoggle,
  VideoProps,
  Video,
  VideoInstance,
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

  expectTypeOf<VideoOnPlayEvent>().toBeObject();
  expectTypeOf<VideoOnPlayEvent>().toEqualTypeOf<UniHelper.VideoOnPlayEvent>();

  expectTypeOf<VideoOnPlay>().toBeFunction();
  expectTypeOf<VideoOnPlay>().toEqualTypeOf<UniHelper.VideoOnPlay>();

  expectTypeOf<VideoOnPauseEvent>().toBeObject();
  expectTypeOf<VideoOnPauseEvent>().toEqualTypeOf<UniHelper.VideoOnPauseEvent>();

  expectTypeOf<VideoOnPause>().toBeFunction();
  expectTypeOf<VideoOnPause>().toEqualTypeOf<UniHelper.VideoOnPause>();

  expectTypeOf<VideoOnEndedEvent>().toBeObject();
  expectTypeOf<VideoOnEndedEvent>().toEqualTypeOf<UniHelper.VideoOnEndedEvent>();

  expectTypeOf<VideoOnEnded>().toBeFunction();
  expectTypeOf<VideoOnEnded>().toEqualTypeOf<UniHelper.VideoOnEnded>();

  expectTypeOf<VideoOnTimeupdateDetail>().toBeObject();
  expectTypeOf<VideoOnTimeupdateDetail>().toEqualTypeOf<UniHelper.VideoOnTimeupdateDetail>();

  expectTypeOf<VideoOnTimeupdateEvent>().toBeObject();
  expectTypeOf<VideoOnTimeupdateEvent>().toEqualTypeOf<UniHelper.VideoOnTimeupdateEvent>();

  expectTypeOf<VideoOnTimeupdate>().toBeFunction();
  expectTypeOf<VideoOnTimeupdate>().toEqualTypeOf<UniHelper.VideoOnTimeupdate>();

  expectTypeOf<VideoOnFullscreenchangeDetail>().toBeObject();
  expectTypeOf<VideoOnFullscreenchangeDetail>().toEqualTypeOf<UniHelper.VideoOnFullscreenchangeDetail>();

  expectTypeOf<VideoOnFullscreenchangeEvent>().toBeObject();
  expectTypeOf<VideoOnFullscreenchangeEvent>().toEqualTypeOf<UniHelper.VideoOnFullscreenchangeEvent>();

  expectTypeOf<VideoOnFullscreenchange>().toBeFunction();
  expectTypeOf<VideoOnFullscreenchange>().toEqualTypeOf<UniHelper.VideoOnFullscreenchange>();

  expectTypeOf<VideoOnWaitingEvent>().toBeObject();
  expectTypeOf<VideoOnWaitingEvent>().toEqualTypeOf<UniHelper.VideoOnWaitingEvent>();

  expectTypeOf<VideoOnWaiting>().toBeFunction();
  expectTypeOf<VideoOnWaiting>().toEqualTypeOf<UniHelper.VideoOnWaiting>();

  expectTypeOf<VideoOnErrorEvent>().toBeObject();
  expectTypeOf<VideoOnErrorEvent>().toEqualTypeOf<UniHelper.VideoOnErrorEvent>();

  expectTypeOf<VideoOnError>().toBeFunction();
  expectTypeOf<VideoOnError>().toEqualTypeOf<UniHelper.VideoOnError>();

  expectTypeOf<VideoOnProgressDetail>().toBeObject();
  expectTypeOf<VideoOnProgressDetail>().toEqualTypeOf<UniHelper.VideoOnProgressDetail>();

  expectTypeOf<VideoOnProgressEvent>().toBeObject();
  expectTypeOf<VideoOnProgressEvent>().toEqualTypeOf<UniHelper.VideoOnProgressEvent>();

  expectTypeOf<VideoOnProgress>().toBeFunction();
  expectTypeOf<VideoOnProgress>().toEqualTypeOf<UniHelper.VideoOnProgress>();

  expectTypeOf<VideoOnLoadeddataEvent>().toBeObject();
  expectTypeOf<VideoOnLoadeddataEvent>().toEqualTypeOf<UniHelper.VideoOnLoadeddataEvent>();

  expectTypeOf<VideoOnLoadeddata>().toBeFunction();
  expectTypeOf<VideoOnLoadeddata>().toEqualTypeOf<UniHelper.VideoOnLoadeddata>();

  expectTypeOf<VideoOnLoadstartEvent>().toBeObject();
  expectTypeOf<VideoOnLoadstartEvent>().toEqualTypeOf<UniHelper.VideoOnLoadstartEvent>();

  expectTypeOf<VideoOnLoadstart>().toBeFunction();
  expectTypeOf<VideoOnLoadstart>().toEqualTypeOf<UniHelper.VideoOnLoadstart>();

  expectTypeOf<VideoOnSeekedEvent>().toBeObject();
  expectTypeOf<VideoOnSeekedEvent>().toEqualTypeOf<UniHelper.VideoOnSeekedEvent>();

  expectTypeOf<VideoOnSeeked>().toBeFunction();
  expectTypeOf<VideoOnSeeked>().toEqualTypeOf<UniHelper.VideoOnSeeked>();

  expectTypeOf<VideoOnSeekingEvent>().toBeObject();
  expectTypeOf<VideoOnSeekingEvent>().toEqualTypeOf<UniHelper.VideoOnSeekingEvent>();

  expectTypeOf<VideoOnSeeking>().toBeFunction();
  expectTypeOf<VideoOnSeeking>().toEqualTypeOf<UniHelper.VideoOnSeeking>();

  expectTypeOf<VideoOnLoadedmetadataDetail>().toBeObject();
  expectTypeOf<VideoOnLoadedmetadataDetail>().toEqualTypeOf<UniHelper.VideoOnLoadedmetadataDetail>();

  expectTypeOf<VideoOnLoadedmetadataEvent>().toBeObject();
  expectTypeOf<VideoOnLoadedmetadataEvent>().toEqualTypeOf<UniHelper.VideoOnLoadedmetadataEvent>();

  expectTypeOf<VideoOnLoadedmetadata>().toBeFunction();
  expectTypeOf<VideoOnLoadedmetadata>().toEqualTypeOf<UniHelper.VideoOnLoadedmetadata>();

  expectTypeOf<VideoOnFullscreenclickDetail>().toBeObject();
  expectTypeOf<VideoOnFullscreenclickDetail>().toEqualTypeOf<UniHelper.VideoOnFullscreenclickDetail>();

  expectTypeOf<VideoOnFullscreenclickEvent>().toBeObject();
  expectTypeOf<VideoOnFullscreenclickEvent>().toEqualTypeOf<UniHelper.VideoOnFullscreenclickEvent>();

  expectTypeOf<VideoOnFullscreenclick>().toBeFunction();
  expectTypeOf<VideoOnFullscreenclick>().toEqualTypeOf<UniHelper.VideoOnFullscreenclick>();

  expectTypeOf<VideoOnControlstoggleDetail>().toBeObject();
  expectTypeOf<VideoOnControlstoggleDetail>().toEqualTypeOf<UniHelper.VideoOnControlstoggleDetail>();

  expectTypeOf<VideoOnControlstoggleEvent>().toBeObject();
  expectTypeOf<VideoOnControlstoggleEvent>().toEqualTypeOf<UniHelper.VideoOnControlstoggleEvent>();

  expectTypeOf<VideoOnControlstoggle>().toBeFunction();
  expectTypeOf<VideoOnControlstoggle>().toEqualTypeOf<UniHelper.VideoOnControlstoggle>();

  expectTypeOf<VideoProps>().toBeObject();
  expectTypeOf<VideoProps>().toEqualTypeOf<UniHelper.VideoProps>();

  expectTypeOf<Video>().not.toBeAny();
  expectTypeOf<Video>().toEqualTypeOf<UniHelper.Video>();

  expectTypeOf<VideoInstance>().not.toBeAny();
  expectTypeOf<VideoInstance>().toEqualTypeOf<UniHelper.VideoInstance>();
});
