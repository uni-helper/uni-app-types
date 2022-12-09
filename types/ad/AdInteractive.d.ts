import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdInteractiveOnLoad {
  (event: BaseEvent): void;
}

interface _AdInteractiveOnErrorDetail {
  /**
   * @desc 错误码
   */
  errCode: number;
  /**
   * @desc 错误信息
   */
  errMsg: string;
}

/**
 * @desc 广告加载失败的回调
 */
interface _AdInteractiveOnError {
  (event: CustomEvent<_AdInteractiveOnErrorDetail>): void;
}

/**
 * @desc 互动广告属性
 */
interface _AdInteractiveProps {
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
  onLoad: _AdInteractiveOnLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdInteractiveOnError;
}

/**
 * @desc 互动广告
 */
type _AdInteractive = Component<Partial<_AdInteractiveProps>>;

export {
  _AdInteractiveOnLoad as AdInteractiveOnLoad,
  _AdInteractiveOnErrorDetail as AdInteractiveOnErrorDetail,
  _AdInteractiveOnError as AdInteractiveOnError,
  _AdInteractiveProps as AdInteractiveProps,
  _AdInteractive as AdInteractive,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdInteractiveOnLoad extends _AdInteractiveOnLoad {}
    export interface AdInteractiveOnErrorDetail extends _AdInteractiveOnErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdInteractiveOnError extends _AdInteractiveOnError {}
    /**
     * @desc 互动广告属性
     */
    export interface AdInteractiveProps extends _AdInteractiveProps {}
    /**
     * @desc 互动广告
     */
    export type AdInteractive = _AdInteractive;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 互动广告
     */
    AdInteractive: _AdInteractive;
  }
}
