import { Component } from '../Component';
import { CustomEvent } from '../events';
import { RadioProps } from './Radio';

/**
 * @desc 单项选择器，内部由多个 radio 组成
 * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
export interface RadioGroupProps {
  /**
   * @desc 选中项发生变化时触发
   */
  onChange: (
    event: CustomEvent<{
      value: RadioProps['value'];
    }>,
  ) => void;
}

/**
 * @desc 单项选择器，内部由多个 radio 组成
 * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
export type RadioGroup = Component<Partial<RadioGroupProps>>;
