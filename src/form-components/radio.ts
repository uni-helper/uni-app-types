import { Component } from '../component';

/**
 * 标识
 *
 * 被选中时，radio-group 的 change 事件会携带该 value
 */
type _RadioValue = string;

/** 单选项目属性 */
type _RadioProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /**
   * 标识
   *
   * 被选中时，radio-group 的 change 事件会携带该 value
   */
  value: _RadioValue;
  /**
   * 当前是否选中
   *
   * 默认为 false
   */
  checked: boolean;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** 颜色 */
  color: string;
}>;

/** 单选项目 */
type _Radio = Component<_RadioProps>;

/** 单选项目实例 */
type _RadioInstance = InstanceType<_Radio>;

export {
  _RadioValue as RadioValue,
  _RadioProps as RadioProps,
  _Radio as Radio,
  _RadioInstance as RadioInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 标识
     *
     * 被选中时，radio-group 的 change 事件会携带该 value
     */
    export type RadioValue = _RadioValue;
    /** 单选项目属性 */
    export type RadioProps = _RadioProps;
    /** 单选项目 */
    export type Radio = _Radio;
    /** 单选项目实例 */
    export type RadioInstance = _RadioInstance;
  }
}

// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 单选项目 */
    Radio: _Radio;
  }
}
