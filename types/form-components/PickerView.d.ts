import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

export interface PickerViewProps {
  /**
   * @desc 依次表示 picker-view 内 picker-view-column 选择的下标
   * @desc 超出 picker-view-column 可选项长度时，选择最后一项
   */
  value: number[];
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
  onChange: (
    event: CustomEvent<{
      value: PickerViewProps['value'];
    }>,
  ) => void;
  /**
   * @desc 滚动选择开始时触发
   */
  onPickstart: (event: BaseEvent) => void;
  /**
   * @desc 滚动选择结束时触发
   */
  onPickend: (event: BaseEvent) => void;
}

/**
 * @desc 嵌入页面的滚动选择器，比 picker 更灵活
 */
export type PickerView = Component<Partial<PickerViewProps>>;
