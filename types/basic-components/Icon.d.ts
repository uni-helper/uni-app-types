import { Component } from '../Component';

/** 图标属性 */
interface _IconProps {
  /** 类型 */
  type: string;
  /**
   * 大小
   *
   * 单位为 px
   *
   * 默认为 23
   */
  size: number;
  /** 颜色 */
  color: string;
}

/** 图标 */
type _Icon = Component<Partial<_IconProps>>;

export { _IconProps as IconProps, _Icon as Icon };

declare global {
  namespace UniHelper {
    /** 图标属性 */
    export interface IconProps extends _IconProps {}
    /** 图标 */
    export type Icon = _Icon;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 图标 */
    Icon: _Icon;
  }
}
