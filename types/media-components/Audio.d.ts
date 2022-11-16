import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

export interface AudioProps {
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
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       * @desc 1 获取资源被用户禁止
       * @desc 2 网络错误
       * @desc 3 解码错误
       * @desc 4 不合适资源
       */
      errMsg: 1 | 2 | 3 | 4;
    }>,
  ) => void;
  /**
   * @desc 开始/继续播放时触发
   */
  onPlay: (event: BaseEvent) => void;
  /**
   * @desc 暂停播放时触发
   */
  onPause: (event: BaseEvent) => void;
  /**
   * @desc 播放进度改变时触发
   */
  onTimeupdate: (
    event: CustomEvent<{
      currentTime: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 播放到末尾时触发
   */
  onEnded: (event: BaseEvent) => void;
}

/**
 * @desc 音频
 */
export type Audio = Component<Partial<AudioProps>>;
