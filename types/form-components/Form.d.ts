import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';
import { CheckboxProps } from './Checkbox';
import { InputProps } from './Input';
import { PickerProps } from './Picker';
import { RadioProps } from './Radio';
import { SliderProps } from './Slider';
import { SwitchProps } from './Switch';

export interface FormProps {
  /**
   * @desc 是否返回 formId 用于发送模板消息
   * @desc 默认为 false
   */
  reportSubmit: boolean;
  /**
   * @desc 等待一段时间以确认 formId 是否生效
   * @desc 如果未指定这个参数，formId 有很小的概率无效（网络问题）
   * @desc 指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间
   * @desc 如果无效，将返回 requestFormId:fail 开头的 formId
   * @desc 单位为 ms
   * @desc 默认为 0
   */
  reportSubmitTimeout: number;
  /**
   * @desc 表单提交时触发
   */
  onSubmit: (
    event: CustomEvent<{
      /**
       * @desc 表单内 switch、input、checkbox、slider、radio、picker 对应的键值对
       */
      value: {
        [key: string]:
          | SwitchProps['checked']
          | InputProps['value']
          | CheckboxProps['value']
          | SliderProps['value']
          | RadioProps['value']
          | PickerProps['value'];
      };
      /**
       * @desc report-submit 为 true 时返回，用于发送模板消息
       */
      formId?: string;
    }>,
  ) => void;
  /**
   * @desc 表单重置时触发
   */
  onReset: (event: BaseEvent) => void;
}

/**
 * @desc 表单
 * @desc 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
 */
export type Form = Component<Partial<FormProps>>;
