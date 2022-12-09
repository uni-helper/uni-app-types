import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 是否选中
 */
type _SwitchChecked = boolean;

/**
 * @desc 样式
 */
type _SwitchType = '_Switch' | 'checkbox';

interface _SwitchOnChangeDetail {
  value: _SwitchChecked;
}

/**
 * @desc checked 改变时触发
 */
interface _SwitchOnChange {
  (event: CustomEvent<_SwitchOnChangeDetail>): void;
}

/**
 * @desc 开关选择器属性
 */
interface _SwitchProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 是否选中
   * @desc 默认为 false
   */
  checked: _SwitchChecked;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 样式
   */
  type: _SwitchType;
  /**
   * @desc _Switch 的颜色
   */
  color: string;
  /**
   * @desc checked 改变时触发
   */
  onChange: _SwitchOnChange;
}

/**
 * @desc 开关选择器
 */
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
    /**
     * @desc 是否选中
     */
    export type SwitchChecked = _SwitchChecked;
    /**
     * @desc 样式
     */
    export type SwitchType = _SwitchType;
    export interface SwitchOnChangeDetail extends _SwitchOnChangeDetail {}
    /**
     * @desc checked 改变时触发
     */
    export interface SwitchOnChange extends _SwitchOnChange {}
    /**
     * @desc 开关选择器属性
     */
    export interface SwitchProps extends _SwitchProps {}
    /**
     * @desc 开关选择器
     */
    export type Switch = _Switch;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 开关选择器
     */
    Switch: _Switch;
  }
}
