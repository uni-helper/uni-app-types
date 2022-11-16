import { Component } from '../Component';

export interface LabelProps {
  /**
   * @desc 绑定控件的 id
   */
  for: string;
}

/**
 * @desc 用来改进表单组件的可用性
 * @desc 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
 * @desc for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
 */
export type Label = Component<Partial<LabelProps>>;
