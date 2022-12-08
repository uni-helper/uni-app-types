import { Component } from '../Component';
import { CustomEvent } from '../events';
import { CheckboxProps } from './Checkbox';

interface _CheckboxGroupChangeDetail {
  value: CheckboxProps['value'][];
}

/**
 * @desc 选中项发生改变时触发
 */
interface _CheckboxGroupChange {
  (event: CustomEvent<_CheckboxGroupChangeDetail>): void;
}

/**
 * @desc 多项选择器属性
 */
interface _CheckboxGroupProps {
  /**
   * @desc 选中项发生改变时触发
   */
  onChange: _CheckboxGroupChange;
}

/**
 * @desc 多项选择器，内部由多个 checkbox 组成
 */
type _CheckboxGroup = Component<Partial<_CheckboxGroupProps>>;

export {
  _CheckboxGroupChangeDetail as CheckboxGroupChangeDetail,
  _CheckboxGroupChange as CheckboxGroupChange,
  _CheckboxGroupProps as CheckboxGroupProps,
  _CheckboxGroup as CheckboxGroup,
};

declare global {
  namespace UniHelper {
    export interface CheckboxGroupChangeDetail extends _CheckboxGroupChangeDetail {}
    /**
     * @desc 选中项发生改变时触发
     */
    export interface CheckboxGroupChange extends _CheckboxGroupChange {}
    /**
     * @desc 多项选择器属性
     */
    export interface CheckboxGroupProps extends _CheckboxGroupProps {}
    /**
     * @desc 多项选择器，内部由多个 checkbox 组成
     */
    export type CheckboxGroup = _CheckboxGroup;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 多项选择器，内部由多个 checkbox 组成
     */
    CheckboxGroup: _CheckboxGroup;
  }
}
