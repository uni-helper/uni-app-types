import { Component } from '../Component';

/**
 * 标识
 *
 * 被选中时，radio-group 的 change 事件会携带该 value
 */
type _RadioValue = string;

interface _RadioProps {
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
}

/** 单选项目 */
type _Radio = Component<Partial<_RadioProps>>;

export { _RadioValue as RadioValue, _RadioProps as RadioProps, _Radio as Radio };

declare global {
  namespace UniHelper {
    /**
     * 标识
     *
     * 被选中时，radio-group 的 change 事件会携带该 value
     */
    export type RadioValue = _RadioValue;
    export interface RadioProps extends _RadioProps {}
    /** 单选项目 */
    export type Radio = _Radio;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 单选项目 */
    Radio: _Radio;
  }
}
