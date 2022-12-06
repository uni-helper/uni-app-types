import { Component } from '../Component';

export interface AdContentPageProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
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
   * @desc 广告开始播放时触发
   */
  onStart: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 广告暂停播放时触发
   */
  onPause: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 广告恢复播放时触发
   */
  onResume: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 广告完成播放时触发
   */
  onComplete: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
}

export type AdContentPage = Component<Partial<AdContentPageProps>>;
