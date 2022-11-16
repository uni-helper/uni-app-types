import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 应用模式，不支持动态修改
 * @desc normal 普通
 * @desc scanCode 扫码
 */
export type CameraMode = 'normal' | 'scanCode';

/**
 * @desc 分辨率，不支持动态修改
 * @desc low 低
 * @desc medium 中等
 * @desc high 高
 */
export type CameraResolution = 'low' | 'medium' | 'high';

/**
 * @desc 摄像头朝向
 * @desc front 前置摄像头
 * @desc back 后置摄像头
 */
export type CameraDevicePosition = 'front' | 'back';

/**
 * @desc 闪光灯
 * @desc auto 自动
 * @desc on 打开
 * @desc off 关闭
 */
export type CameraFlash = 'auto' | 'on' | 'off';

/**
 * @desc 期望的相机帧数据尺寸
 * @desc small 小
 * @desc medium 中
 * @desc large 大
 */
export type CameraFrameSize = 'small' | 'medium' | 'large';

export interface CameraProps {
  /**
   * @desc 应用模式，不支持动态修改
   * @desc normal 普通
   * @desc scanCode 扫码
   * @desc 默认为 normal
   */
  mode: CameraMode;
  /**
   * @desc 分辨率，不支持动态修改
   * @desc low 低
   * @desc medium 中等
   * @desc high 高
   * @desc 默认为 medium
   */
  resolution: CameraResolution;
  /**
   * @desc 摄像头朝向
   * @desc front 前置摄像头
   * @desc back 后置摄像头
   * @desc 默认为 back
   */
  devicePosition: CameraDevicePosition;
  /**
   * @desc 闪光灯
   * @desc auto 自动
   * @desc on 打开
   * @desc off 关闭
   * @desc 默认为 auto
   */
  flash: CameraFlash;
  /**
   * @desc 期望的相机帧数据尺寸
   * @desc small 小
   * @desc medium 中
   * @desc large 大
   * @desc 默认为 medium
   */
  frameSize: CameraFrameSize;
  /**
   * @desc 摄像头在非正常终止时触发
   */
  onStop: (event: BaseEvent) => void;
  /**
   * @desc 用户不允许使用摄像头时触发
   */
  onError: (event: BaseEvent) => void;
  /**
   * @desc 相机初始化完成时触发
   */
  onInitdone: (
    event: CustomEvent<{
      maxZoom: number;
    }>,
  ) => void;
  /**
   * @desc 扫码识别成功时触发
   * @desc mode="scanCode" 时有效
   */
  onScancode: (event: BaseEvent) => void;
}

/**
 * @desc 页面内嵌的区域相机组件
 */
export type Camera = Component<Partial<CameraProps>>;
