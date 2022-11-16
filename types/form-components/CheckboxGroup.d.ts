import { Component } from '../Component';
import { CustomEvent } from '../events';
import { CheckboxProps } from './Checkbox';

export interface CheckboxGroupProps {
  /**
   * @desc 选中项发生改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: CheckboxProps['value'][];
    }>,
  ) => void;
}

/**
 * @desc 多项选择器，内部由多个 checkbox 组成
 */
export type CheckboxGroup = Component<Partial<CheckboxGroupProps>>;
