import { AnyRecord, Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/** 广告加载成功的回调 */
interface _AdOnLoad {
  (event: BaseEvent): void;
}

interface _AdOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

/** 广告加载失败的回调 */
interface _AdOnError {
  (event: CustomEvent<_AdErrorDetail>): void;
}

/** 广告关闭的回调 */
interface _AdOnClose {
  (event: BaseEvent): void;
}

/** 信息流广告属性 */
interface _AdProps {
  /** APP 广告位 id */
  adpid: string;
  /** 广告单元 id，可在小程序管理后台的流量主模块新建 */
  unitId: string;
  /**
   * 广告自动刷新的间隔时间，必须大于等于 30
   *
   * 该参数不传入时 Banner 广告不会自动刷新
   *
   * 单位为 s
   */
  adIntervals: number;
  /** 广告数据，优先级高于 adpid */
  data: AnyRecord;
  /** 小程序应用 ID */
  appid: string;
  /** 小程序广告位 ID */
  apid: string;
  /**
   * type 为 feeds 时广告左边距，必须大于 0
   *
   * 单位为 px
   */
  adLeft: number;
  /**
   * type 为 feeds 时广告上边距，必须大于 0
   *
   * 单位为 px
   */
  adTop: number;
  /**
   * type 为 feeds 时广告宽度，最大值为屏幕宽度，最小值为 265
   *
   * 单位为 px
   *
   * 默认为 100%
   */
  adWidth: number;
  /**
   * type 为 feeds 时广告高度，最大值为 160，最小值为 85
   *
   * 单位为 px
   */
  adHeight: number;
  /** 广告类型 */
  type: string;
  /** 广告加载成功的回调 */
  onLoad: _AdOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdOnError;
  /** 广告关闭的回调 */
  onClose: _AdOnClose;
}

/** 信息流广告 */
type _Ad = Component<Partial<_AdProps>>;

export {
  _AdOnLoad as AdOnLoad,
  _AdOnErrorDetail as AdOnErrorDetail,
  _AdOnError as AdOnError,
  _AdOnClose as AdOnClose,
  _AdProps as AdProps,
  _Ad as Ad,
};

declare global {
  namespace UniHelper {
    /** 广告加载成功的回调 */
    export interface AdOnLoad extends _AdOnLoad {}
    export interface AdOnErrorDetail extends _AdOnErrorDetail {}
    /** 广告加载失败的回调 */
    export interface AdOnError extends _AdOnError {}
    /** 广告关闭的回调 */
    export interface AdOnClose extends _AdOnClose {}
    /** 信息流广告属性 */
    export interface AdProps extends _AdProps {}
    /** 信息流广告 */
    export type Ad = _Ad;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 信息流广告 */
    Ad: _Ad;
  }
}
