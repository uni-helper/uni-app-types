import { Component } from '../Component';
import { CustomEvent } from '../events';
import { CheckboxValue } from './Checkbox';

interface _CheckboxGroupOnChangeDetail {
  value: CheckboxValue[];
}

/** 选中项发生改变时触发 */
interface _CheckboxGroupOnChange {
  (event: CustomEvent<_CheckboxGroupOnChangeDetail>): void;
}

/** 多项选择器属性 */
interface _CheckboxGroupProps {
  /** 选中项发生改变时触发 */
  onChange: _CheckboxGroupOnChange;
}

/** 多项选择器，内部由多个 checkbox 组成 */
type _CheckboxGroup = Component<Partial<_CheckboxGroupProps>>;

export {
  _CheckboxGroupOnChangeDetail as CheckboxGroupOnChangeDetail,
  _CheckboxGroupOnChange as CheckboxGroupOnChange,
  _CheckboxGroupProps as CheckboxGroupProps,
  _CheckboxGroup as CheckboxGroup,
};

declare global {
  namespace UniHelper {
    export interface CheckboxGroupOnChangeDetail extends _CheckboxGroupOnChangeDetail {}
    /** 选中项发生改变时触发 */
    export interface CheckboxGroupOnChange extends _CheckboxGroupOnChange {}
    /** 多项选择器属性 */
    export interface CheckboxGroupProps extends _CheckboxGroupProps {}
    /** 多项选择器，内部由多个 checkbox 组成 */
    export type CheckboxGroup = _CheckboxGroup;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 多项选择器，内部由多个 checkbox 组成 */
    CheckboxGroup: _CheckboxGroup;
  }
}
