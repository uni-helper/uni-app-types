import { Component } from '../Component';
import { CustomEvent } from '../events';

export interface SliderProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 最小值
   * @desc 默认为 0
   */
  min: number;
  /**
   * @desc 最大值
   * @desc 默认为 100
   */
  max: number;
  /**
   * @desc 步长，取值必须大于 0，并且可被 (max - min) 整除
   * @desc 默认为 1
   */
  step: number;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 当前取值
   * @desc 默认为 0
   */
  value: number;
  /**
   * @desc 滑块左侧已选择部分的线条颜色
   * @desc 默认为各平台默认色
   */
  activeColor: string;
  /**
   * @desc 滑块右侧背景条的颜色
   * @desc 默认为 #e9e9e9
   */
  backgroundColor: string;
  /**
   * @desc 滑块的大小
   * @desc 取值范围为 12 - 28
   * @desc 默认为 28
   */
  blockSize: number;
  /**
   * @desc 滑块的颜色
   * @desc 默认为 #fff
   */
  blockColor: string;
  /**
   * @desc 是否显示当前 value
   * @desc 默认为 false
   */
  showValue: boolean;
  /**
   * @desc 完成一次拖动后触发
   */
  onChange: (
    event: CustomEvent<{
      value: SliderProps['value'];
    }>,
  ) => void;
  /**
   * @desc 拖动过程中触发
   */
  onChanging: (
    event: CustomEvent<{
      value: SliderProps['value'];
    }>,
  ) => void;
}

/**
 * @desc 滑动选择器
 */
export type Slider = Component<Partial<SliderProps>>;
