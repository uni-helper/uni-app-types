import { Component } from '../Component';

export interface CheckboxProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 标识
   * @desc 选中时触发 checkbox-group 的 change 事件并携带 value */
  value: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 当前是否选中，可用于设置默认选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 的颜色
   */
  color: string;
}

/**
 * @desc 多选项目
 */
export type Checkbox = Component<Partial<CheckboxProps>>;
