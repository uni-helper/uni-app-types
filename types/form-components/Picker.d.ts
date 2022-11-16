import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 大屏时 UI 类型，支持 picker、select、auto
 */
export type SelectorPickerSelectorType = 'auto' | 'picker' | 'select';

export interface SelectorPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为普通选择器
   */
  mode?: 'selector';
  /**
   * @desc 需要展示的内容
   * @desc 默认为 []
   */
  range: string[] | Record<string, any>[];
  /**
   * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  rangeKey: string;
  /**
   * @desc 当前选择的下标
   * @desc 默认为 0
   */
  value: number;
  /**
   * @desc 大屏时 UI 类型，支持 picker、select、auto
   * @desc 默认在 iPad 以 picker 样式展示
   * @desc 默认在 PC 以 select 样式展示
   * @desc 默认为 auto
   */
  selectorType: SelectorPickerSelectorType;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: SelectorPickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export interface MultiSelectorPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为多列选择器
   */
  mode: 'multiSelector';
  /**
   * @desc 需要展示的内容
   * @desc 默认为 []
   */
  range: string[][] | Record<string, any>[][];
  /**
   * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  rangeKey: string;
  /**
   * @desc 当前每列选择的下标
   * @desc 默认为列数个 0 组成的数组
   */
  value: number[];
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: MultiSelectorPickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 某一列 value 改变时触发
   */
  onColumnchange: (
    event: CustomEvent<{
      column: number;
      value: MultiSelectorPickerProps['value'][number];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export interface TimePickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为时间选择器
   */
  mode: 'time';
  /**
   * @desc 选中的日期
   * @desc 格式为 hh:mm
   */
  value: string;
  /**
   * @desc 有效日期范围的开始
   * @desc 格式为 hh:mm
   */
  start: string;
  /**
   * @desc 有效日期范围的结束
   * @desc 格式为 hh:mm
   */
  end: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: TimePickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

/**
 * @desc 选择器的粒度
 * @desc year 年
 * @desc month 月
 * @desc day 日
 */
export type DatePickerFields = 'year' | 'month' | 'day';

export interface DatePickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为日期选择器
   */
  mode: 'date';
  /**
   * @desc 选中的日期
   * @desc 格式为 YYYY-MM-DD
   */
  value: string;
  /**
   * @desc 有效日期范围的开始
   * @desc 格式为 YYYY-MM-DD
   */
  start: string;
  /**
   * @desc 有效日期范围的结束
   * @desc 格式为 YYYY-MM-DD
   */
  end: string;
  /**
   * @desc 选择器的粒度
   * @desc year 年
   * @desc month 月
   * @desc day 日
   * @desc 默认为 day
   */
  fields: DatePickerFields;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: DatePickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export interface RegionPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为省市区选择器
   */
  mode: 'region';
  /**
   * @desc 选中的省市区
   * @desc 默认选中每一列第一个值
   */
  value: string[];
  /**
   * @desc 可为每一列的顶部添加一个自定义的项
   */
  customItem: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: RegionPickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export type PickerProps =
  | SelectorPickerProps
  | MultiSelectorPickerProps
  | TimePickerProps
  | DatePickerProps
  | RegionPickerProps;

/**
 * @desc 从底部弹起的滚动选择器，通过 mode 来区分
 */
export type Picker = Component<Partial<PickerProps>>;
