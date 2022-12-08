import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';
import { CheckboxValue } from './Checkbox';
import { InputValue } from './Input';
import { PickerValue } from './Picker';
import { RadioValue } from './Radio';
import { SliderValue } from './Slider';
import { SwitchChecked } from './Switch';

/**
 * @desc 表单内 switch、input、checkbox、slider、radio、picker 对应的键值对
 */
interface _FormSubmitDetailValue {
  [key: string]:
    | SwitchChecked
    | InputValue
    | CheckboxValue
    | SliderValue
    | RadioValue
    | PickerValue;
}

interface _FormSubmitDetail {
  /**
   * @desc 表单内 switch、input、checkbox、slider、radio、picker 对应的键值对
   */
  value: _FormSubmitDetailValue;
  /**
   * @desc report-submit 为 true 时返回，用于发送模板消息
   */
  formId?: string;
}

/**
 * @desc 表单提交时触发
 */
interface _FormSubmit {
  (event: CustomEvent<_FormSubmitDetail>): void;
}

/**
 * @desc 表单重置时触发
 */
interface _FormReset {
  (event: BaseEvent): void;
}

/**
 * @desc 表单属性
 */
interface _FormProps {
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
  onSubmit: _FormSubmit;
  /**
   * @desc 表单重置时触发
   */
  onReset: _FormReset;
}

/**
 * @desc 表单
 * @desc 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
 */
type _Form = Component<Partial<_FormProps>>;

export {
  _FormSubmitDetailValue as FormSubmitDetailValue,
  _FormSubmitDetail as FormSubmitDetail,
  _FormSubmit as FormSubmit,
  _FormReset as FormReset,
  _Form as Form,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 表单内 switch、input、checkbox、slider、radio、picker 对应的键值对
     */
    export interface FormSubmitDetailValue extends _FormSubmitDetailValue {}
    export interface FormSubmitDetail extends _FormSubmitDetail {}
    /**
     * @desc 表单提交时触发
     */
    export interface FormSubmit extends _FormSubmit {}
    /**
     * @desc 表单重置时触发
     */
    export interface FormReset extends _FormReset {}
    /**
     * @desc 表单属性
     */
    export interface FormProps extends _FormProps {}
    /**
     * @desc 表单
     * @desc 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
     */
    export type Form = _Form;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 表单
     * @desc 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
     */
    Form: _Form;
  }
}
