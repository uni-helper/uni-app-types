import { Component } from '../Component';

/**
 * @desc 标识
 * @desc 被选中时，radio-group 的 change 事件会携带该 value
 */
type _RadioValue = string;

interface _RadioProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 标识
   * @desc 被选中时，radio-group 的 change 事件会携带该 value
   */
  value: _RadioValue;
  /**
   * @desc 当前是否选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 颜色
   */
  color: string;
}

/**
 * @desc 单选项目
 */
type _Radio = Component<Partial<_RadioProps>>;

export { _RadioValue as RadioValue, _RadioProps as RadioProps, _Radio as Radio };

declare global {
  namespace UniHelper {
    /**
     * @desc 标识
     * @desc 被选中时，radio-group 的 change 事件会携带该 value
     */
    export type RadioValue = _RadioValue;
    export interface RadioProps extends _RadioProps {}
    /**
     * @desc 单选项目
     */
    export type Radio = _Radio;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 单选项目
     */
    Radio: _Radio;
  }
}
