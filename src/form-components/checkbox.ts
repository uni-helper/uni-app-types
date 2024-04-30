import type { Component } from '../component';

/**
 * 标识
 *
 * 选中时触发 checkbox-group 的 change 事件并携带 value
 */
type _CheckboxValue = string;

/** 多选项目属性 */
type _CheckboxProps = Partial<{
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
}>;

/** 多选项目 */
type _Checkbox = Component<_CheckboxProps>;

/** 多选项目实例 */
type _CheckboxInstance = InstanceType<_Checkbox>;

export {
  _CheckboxValue as CheckboxValue,
  _CheckboxProps as CheckboxProps,
  _Checkbox as Checkbox,
  _CheckboxInstance as CheckboxInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 标识
     *
     * 选中时触发 checkbox-group 的 change 事件并携带 value
     */
    export type CheckboxValue = _CheckboxValue;
    /** 多选项目属性 */
    export type CheckboxProps = _CheckboxProps;
    /** 多选项目 */
    export type Checkbox = _Checkbox;
    /** 多选项目实例 */
    export type CheckboxInstance = _CheckboxInstance;
  }
}

// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 多选项目 */
    Checkbox: _Checkbox;
  }
}
