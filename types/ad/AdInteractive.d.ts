import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdInteractiveLoad {
  (event: BaseEvent): void;
}

interface _AdInteractiveErrorDetail {
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
interface _AdInteractiveError {
  (event: CustomEvent<_AdInteractiveErrorDetail>): void;
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
  onLoad: _AdInteractiveLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdInteractiveError;
}

/**
 * @desc 互动广告
 */
type _AdInteractive = Component<Partial<_AdInteractiveProps>>;

export {
  _AdInteractiveLoad as AdInteractiveLoad,
  _AdInteractiveErrorDetail as AdInteractiveErrorDetail,
  _AdInteractiveError as AdInteractiveError,
  _AdInteractiveProps as AdInteractiveProps,
  _AdInteractive as AdInteractive,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdInteractiveLoad extends _AdInteractiveLoad {}
    export interface AdInteractiveErrorDetail extends _AdInteractiveErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdInteractiveError extends _AdInteractiveError {}
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
