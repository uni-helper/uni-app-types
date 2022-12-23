import { Component } from '../Component';
import { CustomEvent } from '../events';

/** 是否选中 */
type _SwitchChecked = boolean;

/** 样式 */
type _SwitchType = '_Switch' | 'checkbox';

interface _SwitchOnChangeDetail {
  value: _SwitchChecked;
}

/** Checked 改变时触发 */
interface _SwitchOnChange {
  (event: CustomEvent<_SwitchOnChangeDetail>): void;
}

/** 开关选择器属性 */
interface _SwitchProps {
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
}

/** 开关选择器 */
type _Switch = Component<Partial<_SwitchProps>>;

export {
  _SwitchChecked as SwitchChecked,
  _SwitchType as SwitchType,
  _SwitchOnChangeDetail as SwitchOnChangeDetail,
  _SwitchOnChange as SwitchOnChange,
  _SwitchProps as SwitchProps,
  _Switch as Switch,
};

declare global {
  namespace UniHelper {
    /** 是否选中 */
    export type SwitchChecked = _SwitchChecked;
    /** 样式 */
    export type SwitchType = _SwitchType;
    export interface SwitchOnChangeDetail extends _SwitchOnChangeDetail {}
    /** Checked 改变时触发 */
    export interface SwitchOnChange extends _SwitchOnChange {}
    /** 开关选择器属性 */
    export interface SwitchProps extends _SwitchProps {}
    /** 开关选择器 */
    export type Switch = _Switch;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 开关选择器 */
    Switch: _Switch;
  }
}
