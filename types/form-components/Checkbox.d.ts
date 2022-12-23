import { Component } from '../Component';

/**
 * 标识
 *
 * 选中时触发 checkbox-group 的 change 事件并携带 value
 */
type _CheckboxValue = string;

/** 多选项目属性 */
interface _CheckboxProps {
  /** 在 form 中作为 key */
  name: string;
  /**
   * 标识
   *
   * 选中时触发 checkbox-group 的 change 事件并携带 value
   */
  value: _CheckboxValue;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 当前是否选中，可用于设置默认选中
   *
   * 默认为 false
   */
  checked: boolean;
  /** 颜色 */
  color: string;
}

/** 多选项目 */
type _Checkbox = Component<Partial<_CheckboxProps>>;

export { _CheckboxValue as CheckboxValue, _CheckboxProps as CheckboxProps, _Checkbox as Checkbox };

declare global {
  namespace UniHelper {
    /**
     * 标识
     *
     * 选中时触发 checkbox-group 的 change 事件并携带 value
     */
    export type CheckboxValue = _CheckboxValue;
    /** 多选项目属性 */
    export interface CheckboxProps extends _CheckboxProps {}
    /** 多选项目 */
    export type Checkbox = _Checkbox;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 多选项目 */
    Checkbox: _Checkbox;
  }
}
