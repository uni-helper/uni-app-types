import { AnyRecord, Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdDrawLoad {
  (event: BaseEvent): void;
}

interface _AdDrawErrorDetail {
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
interface _AdDrawError {
  (event: CustomEvent<_AdDrawErrorDetail>): void;
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
  onLoad: AdDrawLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: AdDrawError;
}

/**
 * @desc 沉浸视频流广告
 */
type _AdDraw = Component<Partial<_AdDrawProps>>;

export {
  _AdDrawLoad as AdDrawLoad,
  _AdDrawErrorDetail as AdDrawErrorDetail,
  _AdDrawError as AdDrawError,
  _AdDrawProps as AdDrawProps,
  _AdDraw as AdDraw,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdDrawLoad extends _AdDrawLoad {}
    export interface AdDrawErrorDetail extends _AdDrawErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdDrawError extends _AdDrawError {}
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
