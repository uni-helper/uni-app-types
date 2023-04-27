import { Component } from '../Component';

/** 表单标签属性 */
type _LabelProps = Partial<{
  /** 绑定控件的 id */
  for: string;
}>;

/**
 * 表单标签
 *
 * 用来改进表单组件的可用性
 *
 * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
 *
 * for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
 */
type _Label = Component<_LabelProps>;

/** 表单标签实例 */
type _LabelInstance = InstanceType<_Label>;

export { _LabelProps as LabelProps, _Label as Label, _LabelInstance as LabelInstance };

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 表单标签
     *
     * 用来改进表单组件的可用性
     *
     * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
     *
     * for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
     */
    Label: _Label;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 表单标签
       *
       * 用来改进表单组件的可用性
       *
       * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
       *
       * for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
       */
      Label: _Label;
    }
  }
  namespace UniHelper {
    /** 标签属性 */
    export type LabelProps = _LabelProps;
    /**
     * 表单标签
     *
     * 用来改进表单组件的可用性
     *
     * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
     *
     * for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
     */
    export type Label = _Label;
    /** 表单标签实例 */
    export type LabelInstance = _LabelInstance;
  }
}
