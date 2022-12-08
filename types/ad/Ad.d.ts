import { AnyRecord, Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 广告加载成功的回调
 */
interface _AdLoad {
  (event: BaseEvent): void;
}

interface _AdErrorDetail {
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
interface _AdError {
  (event: CustomEvent<_AdErrorDetail>): void;
}

/**
 * @desc 广告关闭的回调
 */
interface _AdClose {
  (event: BaseEvent): void;
}

/**
 * @desc 信息流广告属性
 */
interface _AdProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
  /**
   * @desc 广告单元 id，可在小程序管理后台的流量主模块新建
   */
  unitId: string;
  /**
   * @desc 广告自动刷新的间隔时间，必须大于等于 30
   * @desc 该参数不传入时 Banner 广告不会自动刷新
   * @desc 单位为 s
   */
  adIntervals: number;
  /**
   * @desc 广告数据，优先级高于 adpid
   */
  data: AnyRecord;
  /**
   * @desc 小程序应用 ID
   */
  appid: string;
  /**
   * @desc 小程序广告位 ID
   */
  apid: string;
  /**
   * @desc type 为 feeds 时广告左边距，必须大于 0
   * @desc 单位为 px
   */
  adLeft: number;
  /**
   * @desc type 为 feeds 时广告上边距，必须大于 0
   * @desc 单位为 px
   */
  adTop: number;
  /**
   * @desc type 为 feeds 时广告宽度，最大值为屏幕宽度，最小值为 265
   * @desc 单位为 px
   * @desc 默认为 100%
   */
  adWidth: number;
  /**
   * @desc type 为 feeds 时广告高度，最大值为 160，最小值为 85
   * @desc 单位为 px
   */
  adHeight: number;
  /**
   * @desc 广告类型
   */
  type: string;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: _AdLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdError;
  /**
   * @desc 广告关闭的回调
   */
  onClose: _AdClose;
}

/**
 * @desc 信息流广告
 */
type _Ad = Component<Partial<_AdProps>>;

export {
  _AdLoad as AdLoad,
  _AdErrorDetail as AdErrorDetail,
  _AdError as AdError,
  _AdClose as AdClose,
  _AdProps as AdProps,
  _Ad as Ad,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdLoad extends _AdLoad {}
    export interface AdErrorDetail extends _AdErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdError extends _AdError {}
    /**
     * @desc 广告关闭的回调
     */
    export interface AdClose extends _AdClose {}
    /**
     * @desc 信息流广告属性
     */
    export interface AdProps extends _AdProps {}
    /**
     * @desc 信息流广告
     */
    export type Ad = _Ad;
  }
}
