import { Component } from '../Component';

/**
 * @desc 图标属性
 */
export interface IconProps {
  /**
   * @desc 类型
   */
  type: string;
  /**
   * @desc 大小
   * @desc 单位为 px
   * @desc 默认为 23
   */
  size: number;
  /**
   * @desc 颜色
   */
  color: string;
}

/**
 * @desc 图标
 */
export type Icon = Component<Partial<IconProps>>;
