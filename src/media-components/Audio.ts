import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

interface _AudioOnErrorDetail {
  /**
   * 错误码
   *
   * 1 获取资源被用户禁止
   *
   * 2 网络错误
   *
   * 3 解码错误
   *
   * 4 不合适资源
   */
  errMsg: 1 | 2 | 3 | 4;
}

type _AudioOnErrorEvent = CustomEvent<_AudioOnErrorDetail>;

/** 发生错误时触发 */
interface _AudioOnError {
  (event: _AudioOnErrorEvent): void;
}

type _AudioOnPlayEvent = BaseEvent;

/** 开始/继续播放时触发 */
interface _AudioOnPlay {
  (event: _AudioOnPlayEvent): void;
}

type _AudioOnPauseEvent = BaseEvent;

/** 暂停播放时触发 */
interface _AudioOnPause {
  (event: _AudioOnPauseEvent): void;
}

interface _AudioOnTimeupdateDetail {
  currentTime: number;
  duration: number;
}

type _AudioOnTimeupdateEvent = CustomEvent<_AudioOnTimeupdateDetail>;

/** 播放进度改变时触发 */
interface _AudioOnTimeupdate {
  (event: _AudioOnTimeupdateEvent): void;
}

type _AudioOnEndedEvent = BaseEvent;

/** 播放到末尾时触发 */
interface _AudioOnEnded {
  (event: _AudioOnEndedEvent): void;
}

/** 音频属性 */
type _AudioProps = Partial<{
  /** audio 组件的唯一标识符 */
  id: string;
  /** 要播放音频的资源地址 */
  src: string;
  /**
   * 是否循环播放
   *
   * 默认为 false
   */
  loop: boolean;
  /**
   * 是否显示默认控件
   *
   * 默认为 false
   */
  controls: boolean;
  /**
   * 默认控件上的音频封面的图片资源地址
   *
   * 如果 controls 值为 false 则无效
   */
  poster: string;
  /**
   * 默认控件上的音频名字
   *
   * 如果 controls 值为 false 则无效
   *
   * 默认为“未知音频”
   */
  name: string;
  /**
   * 默认控件上的作者名字
   *
   * 如果 controls 值为 false 则无效
   *
   * 默认为“未知作者”
   */
  author: string;
  /** 发生错误时触发 */
  onError: _AudioOnError;
  /** 开始/继续播放时触发 */
  onPlay: _AudioOnPlay;
  /** 暂停播放时触发 */
  onPause: _AudioOnPause;
  /** 播放进度改变时触发 */
  onTimeupdate: _AudioOnTimeupdate;
  /** 播放到末尾时触发 */
  onEnded: _AudioOnEnded;
}>;

/** 音频 */
type _Audio = Component<_AudioProps>;

/** 音频实例 */
type _AudioInstance = InstanceType<_Audio>;

export {
  _AudioOnErrorDetail as AudioOnErrorDetail,
  _AudioOnErrorEvent as AudioOnErrorEvent,
  _AudioOnError as AudioOnError,
  _AudioOnPlayEvent as AudioOnPlayEvent,
  _AudioOnPlay as AudioOnPlay,
  _AudioOnPauseEvent as AudioOnPauseEvent,
  _AudioOnPause as AudioOnPause,
  _AudioOnTimeupdateDetail as AudioOnTimeupdateDetail,
  _AudioOnTimeupdateEvent as AudioOnTimeupdateEvent,
  _AudioOnTimeupdate as AudioOnTimeupdate,
  _AudioOnEndedEvent as AudioOnEndedEvent,
  _AudioOnEnded as AudioOnEnded,
  _AudioProps as AudioProps,
  _Audio as Audio,
  _AudioInstance as AudioInstance,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 音频 */
      audio: _Audio;
    }
  }
  namespace UniHelper {
    export interface AudioOnErrorDetail extends _AudioOnErrorDetail {}
    export type AudioOnErrorEvent = _AudioOnErrorEvent;
    /** 发生错误时触发 */
    export interface AudioOnError extends _AudioOnError {}
    export type AudioOnPlayEvent = _AudioOnPlayEvent;
    /** 开始/继续播放时触发 */
    export interface AudioOnPlay extends _AudioOnPlay {}
    export type AudioOnPauseEvent = _AudioOnPauseEvent;
    /** 暂停播放时触发 */
    export interface AudioOnPause extends _AudioOnPause {}
    export interface AudioOnTimeupdateDetail extends _AudioOnTimeupdateDetail {}
    export type AudioOnTimeupdateEvent = _AudioOnTimeupdateEvent;
    /** 播放进度改变时触发 */
    export interface AudioOnTimeupdate extends _AudioOnTimeupdate {}
    export type AudioOnEndedEvent = _AudioOnEndedEvent;
    /** 播放到末尾时触发 */
    export interface AudioOnEnded extends _AudioOnEnded {}
    /** 音频属性 */
    export type AudioProps = _AudioProps;
    /** 音频 */
    export type Audio = _Audio;
    /** 音频实例 */
    export type AudioInstance = _AudioInstance;
  }
}
