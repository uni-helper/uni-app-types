import type { Component } from '../component';
import type { CustomEvent } from '../events';

/** 是否选中 */
type _SwitchChecked = boolean;

/** 样式 */
type _SwitchType = '_Switch' | 'checkbox';

interface _SwitchOnChangeDetail {
  value: _SwitchChecked;
}

type _SwitchOnChangeEvent = CustomEvent<_SwitchOnChangeDetail>;

/** Checked 改变时触发 */
interface _SwitchOnChange {
  (event: _SwitchOnChangeEvent): void;
}

/** 开关选择器属性 */
type _SwitchProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /**
   * 是否选中
   *
   * 默认为 false
   */
  checked: _SwitchChecked;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** 样式 */
  type: _SwitchType;
  /** 颜色 */
  color: string;
  /** Checked 改变时触发 */
  onChange: _SwitchOnChange;
}>;

/** 开关选择器 */
type _Switch = Component<_SwitchProps>;

/** 开关选择器实例 */
type _SwitchInstance = InstanceType<_Switch>;

export {
  _SwitchChecked as SwitchChecked,
  _SwitchType as SwitchType,
  _SwitchOnChangeDetail as SwitchOnChangeDetail,
  _SwitchOnChangeEvent as SwitchOnChangeEvent,
  _SwitchOnChange as SwitchOnChange,
  _SwitchProps as SwitchProps,
  _Switch as Switch,
  _SwitchInstance as SwitchInstance,
};

declare global {
  namespace UniHelper {
    /** 是否选中 */
    export type SwitchChecked = _SwitchChecked;
    /** 样式 */
    export type SwitchType = _SwitchType;
    export interface SwitchOnChangeDetail extends _SwitchOnChangeDetail {}
    export type SwitchOnChangeEvent = _SwitchOnChangeEvent;
    /** Checked 改变时触发 */
    export interface SwitchOnChange extends _SwitchOnChange {}
    /** 开关选择器属性 */
    export type SwitchProps = _SwitchProps;
    /** 开关选择器 */
    export type Switch = _Switch;
    /** 开关选择器实例 */
    export type SwitchInstance = _SwitchInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 开关选择器 */
    Switch: _Switch;
  }
}

// 3.0 <= Vue <= 3.2
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 开关选择器 */
      switch: _Switch;
    }
  }
}

// 3.3 <= Vue
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module 'vue3/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      /** 开关选择器 */
      switch: _Switch;
    }
  }
}
