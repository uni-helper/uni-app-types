import { AnyRecord, Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdDrawOnLoad {
  (event: BaseEvent): void;
}

interface _AdDrawOnErrorDetail {
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
interface _AdDrawOnError {
  (event: CustomEvent<_AdDrawOnErrorDetail>): void;
}

/**
 * @desc 沉浸视频流广告属性
 */
interface _AdDrawProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
  /**
   * @desc 广告数据
   */
  data: AnyRecord;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: AdDrawOnLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: AdDrawOnError;
}

/**
 * @desc 沉浸视频流广告
 */
type _AdDraw = Component<Partial<_AdDrawProps>>;

export {
  _AdDrawOnLoad as AdDrawOnLoad,
  _AdDrawOnErrorDetail as AdDrawOnErrorDetail,
  _AdDrawOnError as AdDrawOnError,
  _AdDrawProps as AdDrawProps,
  _AdDraw as AdDraw,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdDrawOnLoad extends _AdDrawOnLoad {}
    export interface AdDrawOnErrorDetail extends _AdDrawOnErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdDrawOnError extends _AdDrawOnError {}
    /**
     * @desc 沉浸视频流广告属性
     */
    export interface AdDrawProps extends _AdDrawProps {}
    /**
     * @desc 沉浸视频流广告
     */
    export type AdDraw = _AdDraw;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 沉浸视频流广告
     */
    AdDraw: _AdDraw;
  }
}
