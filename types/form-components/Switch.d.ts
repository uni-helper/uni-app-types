import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 样式
 */
export type SwitchType = 'switch' | 'checkbox';

export interface SwitchProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 是否选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 样式
   */
  type: SwitchType;
  /**
   * @desc switch 的颜色
   */
  color: string;
  /**
   * @desc checked 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: SwitchProps['checked'];
    }>,
  ) => void;
}

/**
 * @desc 开关选择器
 */
export type Switch = Component<Partial<SwitchProps>>;
