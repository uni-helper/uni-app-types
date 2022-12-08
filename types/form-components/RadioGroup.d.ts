import { Component } from '../Component';
import { CustomEvent } from '../events';
import { RadioValue } from './Radio';

interface _RadioGroupChangeDetail {
  value: RadioValue;
}

/**
 * @desc 选中项发生变化时触发
 */
interface _RadioGroupChange {
  (event: CustomEvent<_RadioGroupChangeDetail>): void;
}

/**
 * @desc 单项选择器属性
 */
interface _RadioGroupProps {
  /**
   * @desc 选中项发生变化时触发
   */
  onChange: _RadioGroupChange;
}

/**
 * @desc 单项选择器，内部由多个 radio 组成
 * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
type _RadioGroup = Component<Partial<_RadioGroupProps>>;

export {
  _RadioGroupChangeDetail as RadioGroupChangeDetail,
  _RadioGroupChange as RadioGroupChange,
  _RadioGroupProps as RadioGroupProps,
  _RadioGroup as RadioGroup,
};

declare global {
  namespace UniHelper {
    export interface RadioGroupChangeDetail extends _RadioGroupChangeDetail {}
    /**
     * @desc 选中项发生变化时触发
     */
    export interface RadioGroupChange extends _RadioGroupChange {}
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
