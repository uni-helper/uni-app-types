import { Component } from '../Component';
import { BaseEvent } from '../events';

/**
 * @desc 动画播放方式
 * @desc backwards 动画从头播
 * @desc forwards 动画从上次结束点接着播
 */
export type ProgressActiveMode = 'backwards' | 'forwards';

/**
 * @desc 进度条属性
 */
export interface ProgressProps {
  /**
   * @desc 百分比
   * @desc 取值范围为 0 - 100
   * @desc 没有默认值
   */
  percent: number;
  /**
   * @desc 是否在进度条右侧显示百分比
   * @desc 默认为 false
   */
  showInfo: boolean;
  /**
   * @desc 圆角大小
   * @desc 默认为 0
   */
  borderRadius: number | string;
  /**
   * @desc 进度条右侧显示的百分比字体大小
   * @desc 默认为 16
   */
  fontSize: number | string;
  /**
   * @desc 进度条线的宽度
   * @desc 单位为 px
   * @desc 默认为 6
   */
  strokeWidth: number;
  /**
   * @desc 已选择的进度条的颜色
   * @desc 默认为 #09bb07，百度默认为 #e6e6e6
   */
  activeColor: string;
  /**
   * @desc 未选择的进度条的颜色
   * @desc 默认为 #ebebeb
   */
  backgroundColor: string;
  /**
   * @desc 是否显示进度条从左往右的动画
   * @desc 默认为 false
   */
  active: boolean;
  /**
   * @desc 动画播放方式
   * @desc backwards 动画从头播
   * @desc forwards 动画从上次结束点接着播
   * @desc 默认为 backwards
   */
  activeMode: ProgressActiveMode;
  /**
   * @desc 进度增加 1% 所需时间
   * @desc 单位为 ms
   * @desc 默认为 30
   */
  duration: number;
  /**
   * @desc 动画完成时触发
   */
  onActiveend: (event: BaseEvent) => void;
}

/**
 * @desc 进度条
 */
export type Progress = Component<Partial<ProgressProps>>;
