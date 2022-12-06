import { Component } from '../Component';

export interface AdInteractiveProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
  /**
   * @desc 点击广告后打开的页面路径
   */
  openPagePath: string;
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
}

export type AdInteractive = Component<Partial<AdInteractiveProps>>;
