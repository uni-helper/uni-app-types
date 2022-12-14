import { Component } from '../Component';

/**
 * 显示连续空格
 *
 * Ensp 中文字符空格一半大小
 *
 * Emsp 中文字符空格大小
 *
 * Nbsp 根据字体设置的空格大小
 */
type _TextSpace = 'ensp' | 'emsp' | 'nbsp';

/** 文本组件属性 */
interface _TextProps {
  /**
   * 文本是否可选
   *
   * 默认为 false
   */
  selectable: boolean;
  /**
   * 文本是否可选，可能会使文本节点显示为 inline-block
   *
   * 默认为 false
   */
  userSelect: boolean;
  /**
   * 显示连续空格
   *
   * Ensp 中文字符空格一半大小
   *
   * Emsp 中文字符空格大小
   *
   * Nbsp 根据字体设置的空格大小
   *
   * 没有默认值
   */
  space: _TextSpace;
  /**
   * 是否解码
   *
   * 默认为 false
   */
  decode: boolean;
}

/**
 * 文本组件
 *
 * 用于包裹文本内容
 */
type _Text = Component<Partial<_TextProps>>;

export { _TextSpace as TextSpace, _TextProps as TextProps, _Text as Text };

declare global {
  namespace UniHelper {
    /**
     * 显示连续空格
     *
     * Ensp 中文字符空格一半大小
     *
     * Emsp 中文字符空格大小
     *
     * Nbsp 根据字体设置的空格大小
     */
    export type TextSpace = _TextSpace;
    /** 文本组件属性 */
    export interface TextProps extends _TextProps {}
    /**
     * 文本组件
     *
     * 用于包裹文本内容
     */
    export type Text = _Text;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 文本组件
     *
     * 用于包裹文本内容
     */
    Text: _Text;
  }
}
