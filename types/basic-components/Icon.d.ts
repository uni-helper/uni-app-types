import { Component } from '../Component';

/**
 * @desc 图标属性
 */
interface _IconProps {
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
type _Icon = Component<Partial<_IconProps>>;

export { _IconProps as IconProps, _Icon as Icon };

declare global {
  namespace UniHelper {
    /**
     * @desc 图标属性
     */
    export interface IconProps extends _IconProps {}
    /**
     * @desc 图标
     */
    export type Icon = _Icon;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 图标
     */
    Icon: _Icon;
  }
}
