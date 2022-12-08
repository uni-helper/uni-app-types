import { Component } from '../Component';

/**
 * @desc 标识
 * @desc 选中时触发 checkbox-group 的 change 事件并携带 value
 */
type _CheckboxValue = string;

/**
 * @desc 多选项目属性
 */
interface _CheckboxProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 标识
   * @desc 选中时触发 checkbox-group 的 change 事件并携带 value
   */
  value: _CheckboxValue;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 当前是否选中，可用于设置默认选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 的颜色
   */
  color: string;
}

/**
 * @desc 多选项目
 */
type _Checkbox = Component<Partial<_CheckboxProps>>;

export { _CheckboxValue as CheckboxValue, _CheckboxProps as CheckboxProps, _Checkbox as Checkbox };

declare global {
  namespace UniHelper {
    /**
     * @desc 标识
     * @desc 选中时触发 checkbox-group 的 change 事件并携带 value
     */
    export type CheckboxValue = _CheckboxValue;
    /**
     * @desc 多选项目属性
     */
    export interface CheckboxProps extends _CheckboxProps {}
    /**
     * @desc 多选项目
     */
    export type Checkbox = _Checkbox;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 多选项目
     */
    Checkbox: _Checkbox;
  }
}
