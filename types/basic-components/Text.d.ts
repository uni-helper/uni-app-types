import { Component } from '../Component';

/**
 * @desc 显示连续空格
 * @desc ensp 中文字符空格一半大小
 * @desc emsp 中文字符空格大小
 * @desc nbsp 根据字体设置的空格大小
 */
export type TextSpace = 'ensp' | 'emsp' | 'nbsp';

/**
 * @desc 文本组件属性
 */
export interface TextProps {
  /**
   * @desc 文本是否可选
   * @desc 默认为 false
   */
  selectable: boolean;
  /**
   * @desc 文本是否可选，可能会使文本节点显示为 inline-block
   * @desc 默认为 false
   */
  userSelect: boolean;
  /**
   * @desc 显示连续空格
   * @desc ensp 中文字符空格一半大小
   * @desc emsp 中文字符空格大小
   * @desc nbsp 根据字体设置的空格大小
   * @desc 没有默认值
   */
  space: TextSpace;
  /**
   * @desc 是否解码
   * @desc 默认为 false
   */
  decode: boolean;
}

/**
 * @desc 文本组件
 * @desc 用于包裹文本内容
 */
export type Text = Component<Partial<TextProps>>;
