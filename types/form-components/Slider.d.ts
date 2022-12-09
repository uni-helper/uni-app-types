import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 取值
 */
type _SliderValue = number;

interface _SliderOnChangeDetail {
  value: _SliderValue;
}

/**
 * @desc 完成一次拖动后触发
 */
interface _SliderOnChange {
  (event: CustomEvent<_SliderOnChangeDetail>): void;
}

interface _SliderOnChangingDetail {
  value: _SliderValue;
}

/**
 * @desc 拖动过程中触发
 */
interface _SliderOnChanging {
  (event: CustomEvent<_SliderOnChangingDetail>): void;
}

/**
 * @desc 滑动选择器属性
 */
interface _SliderProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 最小值
   * @desc 默认为 0
   */
  min: _SliderValue;
  /**
   * @desc 最大值
   * @desc 默认为 100
   */
  max: _SliderValue;
  /**
   * @desc 步长，取值必须大于 0，并且可被 (max - min) 整除
   * @desc 默认为 1
   */
  step: _SliderValue;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 当前取值
   * @desc 默认为 0
   */
  value: _SliderValue;
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
  onChange: _SliderOnChange;
  /**
   * @desc 拖动过程中触发
   */
  onChanging: _SliderOnChanging;
}

/**
 * @desc 滑动选择器
 */
type _Slider = Component<Partial<_SliderProps>>;

export {
  _SliderValue as SliderValue,
  _SliderOnChangeDetail as SliderOnChangeDetail,
  _SliderOnChange as SliderOnChange,
  _SliderOnChangingDetail as SliderOnChangingDetail,
  _SliderOnChanging as SliderOnChanging,
  _SliderProps as SliderProps,
  _Slider as Slider,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 取值
     */
    export type SliderValue = _SliderValue;
    export interface SliderOnChangeDetail extends _SliderOnChangeDetail {}
    /**
     * @desc 完成一次拖动后触发
     */
    export interface SliderOnChange extends _SliderOnChange {}
    export interface SliderOnChangingDetail extends _SliderOnChangingDetail {}
    /**
     * @desc 拖动过程中触发
     */
    export interface SliderOnChanging extends _SliderOnChanging {}
    /**
     * @desc 滑动选择器属性
     */
    export interface SliderProps extends _SliderProps {}
    /**
     * @desc 滑动选择器
     */
    export type Slider = _Slider;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 滑动选择器
     */
    Slider: _Slider;
  }
}
