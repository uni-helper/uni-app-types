import { Component } from '../Component';
import { CustomEvent } from '../events';
import { RadioValue } from './Radio';

interface _RadioGroupOnChangeDetail {
  value: RadioValue;
}

/**
 * @desc 选中项发生变化时触发
 */
interface _RadioGroupOnChange {
  (event: CustomEvent<_RadioGroupOnChangeDetail>): void;
}

/**
 * @desc 单项选择器属性
 */
interface _RadioGroupProps {
  /**
   * @desc 选中项发生变化时触发
   */
  onChange: _RadioGroupOnChange;
}

/**
 * @desc 单项选择器，内部由多个 radio 组成
 * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
type _RadioGroup = Component<Partial<_RadioGroupProps>>;

export {
  _RadioGroupOnChangeDetail as RadioGroupOnChangeDetail,
  _RadioGroupOnChange as RadioGroupOnChange,
  _RadioGroupProps as RadioGroupProps,
  _RadioGroup as RadioGroup,
};

declare global {
  namespace UniHelper {
    export interface RadioGroupOnChangeDetail extends _RadioGroupOnChangeDetail {}
    /**
     * @desc 选中项发生变化时触发
     */
    export interface RadioGroupOnChange extends _RadioGroupOnChange {}
    /**
     * @desc 单项选择器属性
     */
    export interface RadioGroupProps extends _RadioGroupProps {}
    /**
     * @desc 单项选择器，内部由多个 radio 组成
     * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
     */
    export type RadioGroup = _RadioGroup;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 单项选择器，内部由多个 radio 组成
     * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
     */
    RadioGroup: _RadioGroup;
  }
}
