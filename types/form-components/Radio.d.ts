import { Component } from '../Component';

export interface RadioProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 标识
   * @desc 被选中时，radio-group 的 change 事件会携带该 value
   */
  value: string;
  /**
   * @desc 当前是否选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 颜色
   */
  color: string;
}

/**
 * @desc 单选项目
 */
export type Radio = Component<Partial<RadioProps>>;
