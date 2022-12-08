import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

interface _AudioErrorDetail {
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
interface _AudioError {
  (event: CustomEvent<_AudioErrorDetail>): void;
}

/**
 * @desc 开始/继续播放时触发
 */
interface _AudioPlay {
  (event: BaseEvent): void;
}

/**
 * @desc 暂停播放时触发
 */
interface _AudioPause {
  (event: BaseEvent): void;
}

interface _AudioTimeupdateDetail {
  currentTime: number;
  duration: number;
}

/**
 * @desc 播放进度改变时触发
 */
interface _AudioTimeupdate {
  (event: CustomEvent<_AudioTimeupdateDetail>): void;
}

/**
 * @desc 播放到末尾时触发
 */
interface _AudioEnded {
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
  onError: _AudioError;
  /**
   * @desc 开始/继续播放时触发
   */
  onPlay: _AudioPlay;
  /**
   * @desc 暂停播放时触发
   */
  onPause: _AudioPause;
  /**
   * @desc 播放进度改变时触发
   */
  onTimeupdate: _AudioTimeupdate;
  /**
   * @desc 播放到末尾时触发
   */
  onEnded: _AudioEnded;
}

/**
 * @desc 音频
 */
type _Audio = Component<Partial<_AudioProps>>;

export {
  _AudioErrorDetail as AudioErrorDetail,
  _AudioError as AudioError,
  _AudioPlay as AudioPlay,
  _AudioPause as AudioPause,
  _AudioTimeupdateDetail as AudioTimeupdateDetail,
  _AudioTimeupdate as AudioTimeupdate,
  _AudioEnded as AudioEnded,
  _AudioProps as AudioProps,
  _Audio as Audio,
};

declare global {
  namespace UniHelper {
    export interface AudioErrorDetail extends _AudioErrorDetail {}
    /**
     * @desc 发生错误时触发
     */
    export interface AudioError extends _AudioError {}
    /**
     * @desc 开始/继续播放时触发
     */
    export interface AudioPlay extends _AudioPlay {}
    /**
     * @desc 暂停播放时触发
     */
    export interface AudioPause extends _AudioPause {}
    export interface AudioTimeupdateDetail extends _AudioTimeupdateDetail {}
    /**
     * @desc 播放进度改变时触发
     */
    export interface AudioTimeupdate extends _AudioTimeupdate {}
    /**
     * @desc 播放到末尾时触发
     */
    export interface AudioEnded extends _AudioEnded {}
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
