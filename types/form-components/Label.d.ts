import { Component } from '../Component';

/** 表单标签属性 */
interface _LabelProps {
  /** 绑定控件的 id */
  for: string;
}

/**
 * 表单标签
 *
 * 用来改进表单组件的可用性
 *
 * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
 *
 * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
 */
type _Label = Component<Partial<_LabelProps>>;

export { _LabelProps as LabelProps, _Label as Label };

declare global {
  namespace UniHelper {
    /** 标签属性 */
    export interface LabelProps extends _LabelProps {}
    /**
     * 表单标签
     *
     * 用来改进表单组件的可用性
     *
     * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
     *
     * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
     */
    export type Label = _Label;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 表单标签
     *
     * 用来改进表单组件的可用性
     *
     * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
     *
     * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
     */
    Label: _Label;
  }
}
