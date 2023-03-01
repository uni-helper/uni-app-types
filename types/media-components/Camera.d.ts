import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * 应用模式，不支持动态修改
 *
 * normal 普通
 *
 * scanCode 扫码
 */
type _CameraMode = 'normal' | 'scanCode';

/**
 * 分辨率，不支持动态修改
 *
 * low 低
 *
 * medium 中等
 *
 * high 高
 */
type _CameraResolution = 'low' | 'medium' | 'high';

/**
 * 摄像头朝向
 *
 * front 前置摄像头
 *
 * back 后置摄像头
 */
type _CameraDevicePosition = 'front' | 'back';

/**
 * 闪光灯
 *
 * auto 自动
 *
 * on 打开
 *
 * off 关闭
 */
type _CameraFlash = 'auto' | 'on' | 'off';

/**
 * 期望的相机帧数据尺寸
 *
 * small 小
 *
 * medium 中
 *
 * large 大
 */
type _CameraFrameSize = 'small' | 'medium' | 'large';

/** 摄像头在非正常终止时触发 */
interface _CameraOnStop {
  (event: BaseEvent, ...params: any[]): void;
}

/** 用户不允许使用摄像头时触发 */
interface _CameraOnError {
  (event: BaseEvent, ...params: any[]): void;
}

interface _CameraOnInitdoneDetail {
  maxZoom: number;
}

/** 相机初始化完成时触发 */
interface _CameraOnInitdone {
  (event: CustomEvent<_CameraOnInitdoneDetail>, ...params: any[]): void;
}

/**
 * 扫码识别成功时触发
 *
 * mode="scanCode" 时有效
 */
interface _CameraOnScancode {
  (event: BaseEvent, ...params: any[]): void;
}

/** 页面内嵌的区域相机组件属性 */
type _CameraProps = Partial<{
  /**
   * 应用模式，不支持动态修改
   *
   * normal 普通
   *
   * scanCode 扫码
   *
   * 默认为 normal
   */
  mode: _CameraMode;
  /**
   * 分辨率，不支持动态修改
   *
   * low 低
   *
   * medium 中等
   *
   * high 高
   *
   * 默认为 medium
   */
  resolution: _CameraResolution;
  /**
   * 摄像头朝向
   *
   * front 前置摄像头
   *
   * back 后置摄像头
   *
   * 默认为 back
   */
  devicePosition: _CameraDevicePosition;
  /**
   * 闪光灯
   *
   * auto 自动
   *
   * on 打开
   *
   * off 关闭
   *
   * 默认为 auto
   */
  flash: _CameraFlash;
  /**
   * 期望的相机帧数据尺寸
   *
   * small 小
   *
   * medium 中
   *
   * large 大
   *
   * 默认为 medium
   */
  frameSize: _CameraFrameSize;
  /** 摄像头在非正常终止时触发 */
  onStop: _CameraOnStop;
  /** 用户不允许使用摄像头时触发 */
  onError: _CameraOnError;
  /** 相机初始化完成时触发 */
  onInitdone: _CameraOnInitdone;
  /**
   * 扫码识别成功时触发
   *
   * mode="scanCode" 时有效
   */
  onScancode: _CameraOnScancode;
}>;

/** 页面内嵌的区域相机组件 */
type _Camera = Component<_CameraProps>;

/** 页面内嵌的区域相机组件实例 */
type _CameraInstance = InstanceType<_Camera>;

export {
  _CameraMode as CameraMode,
  _CameraResolution as CameraResolution,
  _CameraDevicePosition as CameraDevicePosition,
  _CameraFlash as CameraFlash,
  _CameraFrameSize as CameraFrameSize,
  _CameraOnStop as CameraOnStop,
  _CameraOnError as CameraOnError,
  _CameraOnInitdoneDetail as CameraOnInitdoneDetail,
  _CameraOnInitdone as CameraOnInitdone,
  _CameraOnScancode as CameraOnScancode,
  _CameraProps as CameraProps,
  _Camera as Camera,
  _CameraInstance as CameraInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 应用模式，不支持动态修改
     *
     * normal 普通
     *
     * scanCode 扫码
     */
    export type CameraMode = _CameraMode;
    /**
     * 分辨率，不支持动态修改
     *
     * low 低
     *
     * medium 中等
     *
     * high 高
     */
    export type CameraResolution = _CameraResolution;
    /**
     * 摄像头朝向
     *
     * front 前置摄像头
     *
     * back 后置摄像头
     */
    export type CameraDevicePosition = _CameraDevicePosition;
    /**
     * 闪光灯
     *
     * auto 自动
     *
     * on 打开
     *
     * off 关闭
     */
    export type CameraFlash = _CameraFlash;
    /**
     * 期望的相机帧数据尺寸
     *
     * small 小
     *
     * medium 中
     *
     * large 大
     */
    export type CameraFrameSize = _CameraFrameSize;
    /** 摄像头在非正常终止时触发 */
    export interface CameraOnStop extends _CameraOnStop {}
    /** 用户不允许使用摄像头时触发 */
    export interface CameraOnError extends _CameraOnError {}
    export interface CameraOnInitdoneDetail extends _CameraOnInitdoneDetail {}
    /** 相机初始化完成时触发 */
    export interface CameraOnInitdone extends _CameraOnInitdone {}
    /**
     * 扫码识别成功时触发
     *
     * mode="scanCode" 时有效
     */
    export interface CameraOnScancode extends _CameraOnScancode {}
    /** 页面内嵌的区域相机组件属性 */
    export type CameraProps = _CameraProps;
    /** 页面内嵌的区域相机组件 */
    export type Camera = _Camera;
    /** 页面内嵌的区域相机组件实例 */
    export type CameraInstance = _CameraInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 页面内嵌的区域相机组件 */
    Camera: _Camera;
  }
}
