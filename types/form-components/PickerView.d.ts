import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

type _PickerViewValueElement = number;

/**
 * @desc 依次表示 picker-view 内 picker-view-column 选择的下标
 */
type _PickerViewValue = _PickerViewValueElement[];

interface _PickerViewChangeDetail {
  value: _PickerViewValue;
}

/**
 * @desc value 改变时触发
 */
interface _PickerViewChange {
  (event: CustomEvent<_PickerViewChangeDetail>): void;
}

/**
 * @desc 滚动选择开始时触发
 */
interface _PickerViewPickstart {
  (event: BaseEvent): void;
}

/**
 * @desc 滚动选择结束时触发
 */
interface _PickerViewPickend {
  (event: BaseEvent): void;
}

interface _PickerViewProps {
  /**
   * @desc 依次表示 picker-view 内 picker-view-column 选择的下标
   * @desc 超出 picker-view-column 可选项长度时，选择最后一项
   */
  value: _PickerViewValue;
  /**
   * @desc 设置选择器中间选中框的样式
   */
  indicatorStyle: string;
  /**
   * @desc 设置选择器中间选中框的类名
   */
  indicatorClass: string;
  /**
   * @desc 设置蒙层的样式
   */
  maskStyle: string;
  /**
   * @desc 设置蒙层的类名
   */
  maskClass: string;
  /**
   * @desc 是否在手指松开时立即触发 change 事件
   * @desc 若不开启则会在滚动动画结束后触发 change 事件
   * @desc 默认为 false
   */
  immediateChange: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: _PickerViewChange;
  /**
   * @desc 滚动选择开始时触发
   */
  onPickstart: _PickerViewPickstart;
  /**
   * @desc 滚动选择结束时触发
   */
  onPickend: _PickerViewPickend;
}

/**
 * @desc 嵌入页面的滚动选择器，比 picker 更灵活
 */
type _PickerView = Component<Partial<_PickerViewProps>>;

export {
  _PickerViewValueElement as PickerViewValueElement,
  _PickerViewValue as PickerViewValue,
  _PickerViewChangeDetail as PickerViewChangeDetail,
  _PickerViewChange as PickerViewChange,
  _PickerViewPickstart as PickerViewPickstart,
  _PickerViewPickend as PickerViewPickend,
  _PickerViewProps as PickerViewProps,
  _PickerView as PickerView,
};

declare global {
  namespace UniHelper {
    export type PickerViewValueElement = _PickerViewValueElement;
    /**
     * @desc 依次表示 picker-view 内 picker-view-column 选择的下标
     */
    export type PickerViewValue = _PickerViewValue;
    export interface PickerViewChangeDetail extends _PickerViewChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface PickerViewChange extends _PickerViewChange {}
    /**
     * @desc 滚动选择开始时触发
     */
    export interface PickerViewPickstart extends _PickerViewPickstart {}
    /**
     * @desc 滚动选择结束时触发
     */
    export interface PickerViewPickend extends _PickerViewPickend {}
    export interface PickerViewProps extends _PickerViewProps {}
    /**
     * @desc 嵌入页面的滚动选择器，比 picker 更灵活
     */
    export type PickerView = _PickerView;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 嵌入页面的滚动选择器，比 picker 更灵活
     */
    PickerView: _PickerView;
  }
}
