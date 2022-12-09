import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

interface _AudioOnErrorDetail {
  /**
   * @desc 错误码
   * @desc 1 获取资源被用户禁止
   * @desc 2 网络错误
   * @desc 3 解码错误
   * @desc 4 不合适资源
   */
  errMsg: 1 | 2 | 3 | 4;
}

/**
 * @desc 发生错误时触发
 */
interface _AudioOnError {
  (event: CustomEvent<_AudioOnErrorDetail>): void;
}

/**
 * @desc 开始/继续播放时触发
 */
interface _AudioOnPlay {
  (event: BaseEvent): void;
}

/**
 * @desc 暂停播放时触发
 */
interface _AudioOnPause {
  (event: BaseEvent): void;
}

interface _AudioOnTimeupdateDetail {
  currentTime: number;
  duration: number;
}

/**
 * @desc 播放进度改变时触发
 */
interface _AudioOnTimeupdate {
  (event: CustomEvent<_AudioOnTimeupdateDetail>): void;
}

/**
 * @desc 播放到末尾时触发
 */
interface _AudioOnEnded {
  (event: BaseEvent): void;
}

/**
 * @desc 音频属性
 */
interface _AudioProps {
  /**
   * @desc audio 组件的唯一标识符
   */
  id: string;
  /**
   * @desc 要播放音频的资源地址
   */
  src: string;
  /**
   * @desc 是否循环播放
   * @desc 默认为 false
   */
  loop: boolean;
  /**
   * @desc 是否显示默认控件
   * @desc 默认为 false
   */
  controls: boolean;
  /**
   * @desc 默认控件上的音频封面的图片资源地址
   * @desc 如果 controls 值为 false 则无效
   */
  poster: string;
  /**
   * @desc 默认控件上的音频名字
   * @desc 如果 controls 值为 false 则无效
   * @desc 默认为“未知音频”
   */
  name: string;
  /**
   * @desc 默认控件上的作者名字
   * @desc 如果 controls 值为 false 则无效
   * @desc 默认为“未知作者”
   */
  author: string;
  /**
   * @desc 发生错误时触发
   */
  onError: _AudioOnError;
  /**
   * @desc 开始/继续播放时触发
   */
  onPlay: _AudioOnPlay;
  /**
   * @desc 暂停播放时触发
   */
  onPause: _AudioOnPause;
  /**
   * @desc 播放进度改变时触发
   */
  onTimeupdate: _AudioOnTimeupdate;
  /**
   * @desc 播放到末尾时触发
   */
  onEnded: _AudioOnEnded;
}

/**
 * @desc 音频
 */
type _Audio = Component<Partial<_AudioProps>>;

export {
  _AudioOnErrorDetail as AudioOnErrorDetail,
  _AudioOnError as AudioOnError,
  _AudioOnPlay as AudioOnPlay,
  _AudioOnPause as AudioOnPause,
  _AudioOnTimeupdateDetail as AudioOnTimeupdateDetail,
  _AudioOnTimeupdate as AudioOnTimeupdate,
  _AudioOnEnded as AudioOnEnded,
  _AudioProps as AudioProps,
  _Audio as Audio,
};

declare global {
  namespace UniHelper {
    export interface AudioOnErrorDetail extends _AudioOnErrorDetail {}
    /**
     * @desc 发生错误时触发
     */
    export interface AudioOnError extends _AudioOnError {}
    /**
     * @desc 开始/继续播放时触发
     */
    export interface AudioOnPlay extends _AudioOnPlay {}
    /**
     * @desc 暂停播放时触发
     */
    export interface AudioOnPause extends _AudioOnPause {}
    export interface AudioOnTimeupdateDetail extends _AudioOnTimeupdateDetail {}
    /**
     * @desc 播放进度改变时触发
     */
    export interface AudioOnTimeupdate extends _AudioOnTimeupdate {}
    /**
     * @desc 播放到末尾时触发
     */
    export interface AudioOnEnded extends _AudioOnEnded {}
    /**
     * @desc 音频属性
     */
    export interface AudioProps extends _AudioProps {}
    /**
     * @desc 音频
     */
    export type Audio = _Audio;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 音频
     */
    Audio: _Audio;
  }
}
