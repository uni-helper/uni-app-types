import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 取值
 */
type _SliderValue = number;

interface _SliderChangeDetail {
  value: _SliderValue;
}

/**
 * @desc 完成一次拖动后触发
 */
interface _SliderChange {
  (event: CustomEvent<_SliderChangeDetail>): void;
}

interface _SliderChangingDetail {
  value: _SliderValue;
}

/**
 * @desc 拖动过程中触发
 */
interface _SliderChanging {
  (event: CustomEvent<_SliderChangingDetail>): void;
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
  onChange: _SliderChange;
  /**
   * @desc 拖动过程中触发
   */
  onChanging: _SliderChanging;
}

/**
 * @desc 滑动选择器
 */
type _Slider = Component<Partial<_SliderProps>>;

export {
  _SliderValue as SliderValue,
  _SliderChangeDetail as SliderChangeDetail,
  _SliderChange as SliderChange,
  _SliderChangingDetail as SliderChangingDetail,
  _SliderChanging as SliderChanging,
  _SliderProps as SliderProps,
  _Slider as Slider,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 取值
     */
    export type SliderValue = _SliderValue;
    export interface SliderChangeDetail extends _SliderChangeDetail {}
    /**
     * @desc 完成一次拖动后触发
     */
    export interface SliderChange extends _SliderChange {}
    export interface SliderChangingDetail extends _SliderChangingDetail {}
    /**
     * @desc 拖动过程中触发
     */
    export interface SliderChanging extends _SliderChanging {}
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
