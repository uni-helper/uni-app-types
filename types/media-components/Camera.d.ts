import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 应用模式，不支持动态修改
 * @desc normal 普通
 * @desc scanCode 扫码
 */
type _CameraMode = 'normal' | 'scanCode';

/**
 * @desc 分辨率，不支持动态修改
 * @desc low 低
 * @desc medium 中等
 * @desc high 高
 */
type _CameraResolution = 'low' | 'medium' | 'high';

/**
 * @desc 摄像头朝向
 * @desc front 前置摄像头
 * @desc back 后置摄像头
 */
type _CameraDevicePosition = 'front' | 'back';

/**
 * @desc 闪光灯
 * @desc auto 自动
 * @desc on 打开
 * @desc off 关闭
 */
type _CameraFlash = 'auto' | 'on' | 'off';

/**
 * @desc 期望的相机帧数据尺寸
 * @desc small 小
 * @desc medium 中
 * @desc large 大
 */
type _CameraFrameSize = 'small' | 'medium' | 'large';

/**
 * @desc 摄像头在非正常终止时触发
 */
interface _CameraStop {
  (event: BaseEvent): void;
}

/**
 * @desc 用户不允许使用摄像头时触发
 */
interface _CameraError {
  (event: BaseEvent): void;
}

interface _CameraInitdoneDetail {
  maxZoom: number;
}

/**
 * @desc 相机初始化完成时触发
 */
interface _CameraInitdone {
  (event: CustomEvent<_CameraInitdoneDetail>): void;
}

/**
 * @desc 扫码识别成功时触发
 * @desc mode="scanCode" 时有效
 */
interface _CameraScancode {
  (event: BaseEvent): void;
}

/**
 * @desc 页面内嵌的区域相机组件属性
 */
interface _CameraProps {
  /**
   * @desc 应用模式，不支持动态修改
   * @desc normal 普通
   * @desc scanCode 扫码
   * @desc 默认为 normal
   */
  mode: _CameraMode;
  /**
   * @desc 分辨率，不支持动态修改
   * @desc low 低
   * @desc medium 中等
   * @desc high 高
   * @desc 默认为 medium
   */
  resolution: _CameraResolution;
  /**
   * @desc 摄像头朝向
   * @desc front 前置摄像头
   * @desc back 后置摄像头
   * @desc 默认为 back
   */
  devicePosition: _CameraDevicePosition;
  /**
   * @desc 闪光灯
   * @desc auto 自动
   * @desc on 打开
   * @desc off 关闭
   * @desc 默认为 auto
   */
  flash: _CameraFlash;
  /**
   * @desc 期望的相机帧数据尺寸
   * @desc small 小
   * @desc medium 中
   * @desc large 大
   * @desc 默认为 medium
   */
  frameSize: _CameraFrameSize;
  /**
   * @desc 摄像头在非正常终止时触发
   */
  onStop: _CameraStop;
  /**
   * @desc 用户不允许使用摄像头时触发
   */
  onError: _CameraError;
  /**
   * @desc 相机初始化完成时触发
   */
  onInitdone: _CameraInitdone;
  /**
   * @desc 扫码识别成功时触发
   * @desc mode="scanCode" 时有效
   */
  onScancode: _CameraScancode;
}

/**
 * @desc 页面内嵌的区域相机组件
 */
type _Camera = Component<Partial<_CameraProps>>;

export {
  _CameraMode as CameraMode,
  _CameraResolution as CameraResolution,
  _CameraDevicePosition as CameraDevicePosition,
  _CameraFlash as CameraFlash,
  _CameraFrameSize as CameraFrameSize,
  _CameraStop as CameraStop,
  _CameraError as CameraError,
  _CameraInitdoneDetail as CameraInitdoneDetail,
  _CameraInitdone as CameraInitdone,
  _CameraScancode as CameraScancode,
  _CameraProps as CameraProps,
  _Camera as Camera,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 应用模式，不支持动态修改
     * @desc normal 普通
     * @desc scanCode 扫码
     */
    export type CameraMode = _CameraMode;
    /**
     * @desc 分辨率，不支持动态修改
     * @desc low 低
     * @desc medium 中等
     * @desc high 高
     */
    export type CameraResolution = _CameraResolution;
    /**
     * @desc 摄像头朝向
     * @desc front 前置摄像头
     * @desc back 后置摄像头
     */
    export type CameraDevicePosition = _CameraDevicePosition;
    /**
     * @desc 闪光灯
     * @desc auto 自动
     * @desc on 打开
     * @desc off 关闭
     */
    export type CameraFlash = _CameraFlash;
    /**
     * @desc 期望的相机帧数据尺寸
     * @desc small 小
     * @desc medium 中
     * @desc large 大
     */
    export type CameraFrameSize = _CameraFrameSize;
    /**
     * @desc 摄像头在非正常终止时触发
     */
    export interface CameraStop extends _CameraStop {}
    /**
     * @desc 用户不允许使用摄像头时触发
     */
    export interface CameraError extends _CameraError {}
    export interface CameraInitdoneDetail extends _CameraInitdoneDetail {}
    /**
     * @desc 相机初始化完成时触发
     */
    export interface CameraInitdone extends _CameraInitdone {}
    /**
     * @desc 扫码识别成功时触发
     * @desc mode="scanCode" 时有效
     */
    export interface CameraScancode extends _CameraScancode {}
    /**
     * @desc 页面内嵌的区域相机组件属性
     */
    export interface CameraProps extends _CameraProps {}
    /**
     * @desc 页面内嵌的区域相机组件
     */
    export type Camera = _Camera;
  }
}
