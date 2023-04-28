import { Component } from '../Component';

/** 图标属性 */
type _IconProps = Partial<{
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
}>;

/** 图标 */
type _Icon = Component<_IconProps>;

/** 图标实例 */
type _IconInstance = InstanceType<_Icon>;

export { _IconProps as IconProps, _Icon as Icon, _IconInstance as IconInstance };

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 图标 */
    Icon: _Icon;
  }
}

declare global {
  namespace UniHelper {
    /** 图标属性 */
    export type IconProps = _IconProps;
    /** 图标 */
    export type Icon = _Icon;
    /** 图标实例 */
    export type IconInstance = _IconInstance;
  }
}
