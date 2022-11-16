import { Component } from '../Component';
import { CustomEvent } from '../events';

// TODO: htouchmove
// TODO: vtouchmove

/**
 * @desc movable-view 的移动方向
 */
export type MovableViewDirection = 'all' | 'vertical' | 'horizontal' | 'none';

/**
 * @desc movable-view 产生移动的原因
 * @desc touch 拖动
 * @desc touch-out-of-bounds 超出移动范围
 * @desc out-of-bounds 超出移动范围后的回弹
 * @desc friction 惯性
 * @desc 空字符串 setData
 */
export type MovableViewSource = 'touch' | 'touch-out-of-bounds' | 'out-of-bounds' | 'friction' | '';

export interface MovableViewProps {
  /**
   * @desc movable-view 的移动方向
   * @desc 默认为 none
   */
  direction: MovableViewDirection;
  /**
   * @desc 是否带有惯性
   * @desc 默认为 false
   */
  inertia: boolean;
  /**
   * @desc 超过可移动区域后，是否还可以移动
   * @desc 默认为 false
   */
  outOfBounds: boolean;
  /**
   * @desc 定义 x 轴方向的偏移
   * @desc 如果 x 的值不在可移动范围内，会自动移动到可移动范围
   * @desc 改变 x 的值会触发动画
   */
  x: string | number;
  /**
   * @desc 定义 y 轴方向的偏移
   * @desc 如果 y 的值不在可移动范围内，会自动移动到可移动范围
   * @desc 改变 y 的值会触发动画
   */
  y: string | number;
  /**
   * @desc 阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画
   * @desc 值越大移动越快
   * @desc 默认为 20
   */
  damping: number;
  /**
   * @desc 摩擦系数，用于控制惯性滑动的动画
   * @desc 值越大摩擦力越大，滑动越快停止
   * @desc 必须大于 0，否则会被设置成默认值
   * @desc 默认为 2
   */
  friction: number;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否支持双指缩放
   * @desc 默认缩放手势生效区域是在 movable-view 内
   * @desc 默认为 false
   */
  scale: boolean;
  /**
   * @desc 定义缩放倍数最小值
   * @desc 默认为 0.5
   */
  scaleMin: number;
  /**
   * @desc 定义缩放倍数最大值
   * @desc 默认为 10
   */
  scaleMax: number;
  /**
   * @desc 定义缩放倍数
   * @desc 取值范围为 0.5 - 10
   * @desc 默认为 1
   */
  scaleValue: number;
  /**
   * @desc 是否使用动画
   * @desc 默认为 true
   */
  animation: boolean;
  /**
   * @desc 拖动过程中触发
   */
  onChange: (
    event: CustomEvent<{
      x: number;
      y: number;
      /**
       * @desc movable-view 产生移动的原因
       * @desc touch 拖动
       * @desc touch-out-of-bounds 超出移动范围
       * @desc out-of-bounds 超出移动范围后的回弹
       * @desc friction 惯性
       * @desc 空字符串 setData
       */
      source: MovableViewChangeSource;
    }>,
  ) => void;
  /**
   * @desc 缩放过程中触发
   */
  onScale: (
    event: CustomEvent<{
      x: number;
      y: number;
      /**
       * @desc 是否支持双指缩放
       * @desc 默认缩放手势生效区域是在 movable-view 内
       */
      scale: boolean;
    }>,
  ) => void;
}

/**
 * @desc 可移动的视图容器，在页面中可以拖拽滑动或双指缩放
 * @desc movable-area 直接子组件
 */
export type MovableView = Component<Partial<MovableViewProps>>;
