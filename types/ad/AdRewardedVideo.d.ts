import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 服务器回调透传数据
 */
export interface AdRewardedVideoUrlCallback {
  userId: string;
  extra: string;
}

export interface AdRewardedVideoProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string | number | (string | number)[];
  /**
   * @desc 是否在页面就绪后加载广告数据
   * @desc 默认为 true
   */
  preload: boolean;
  /**
   * @desc 是否自动加载下一条广告数据
   * @desc 默认为 false
   */
  loadnext: boolean;
  /**
   * @desc 服务器回调透传数据
   */
  urlCallback: AdRewardedVideoUrlCallback;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 广告关闭的回调
   */
  onClose: (event: BaseEvent) => void;
}

export type AdRewardedVideo = Component<Partial<AdRewardedVideoProps>>;
