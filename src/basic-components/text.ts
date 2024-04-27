import { Component } from '../component';

/**
 * 显示连续空格
 *
 * ensp 中文字符空格一半大小
 *
 * emsp 中文字符空格大小
 *
 * nbsp 根据字体设置的空格大小
 */
type _TextSpace = 'ensp' | 'emsp' | 'nbsp';

/** 文本组件属性 */
type _TextProps = Partial<{
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
   * ensp 中文字符空格一半大小
   *
   * emsp 中文字符空格大小
   *
   * nbsp 根据字体设置的空格大小
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
}>;

/**
 * 文本组件
 *
 * 用于包裹文本内容
 */
type _Text = Component<_TextProps>;

/** 文本组件实例 */
type _TextInstance = InstanceType<_Text>;

export {
  _TextSpace as TextSpace,
  _TextProps as TextProps,
  _Text as Text,
  _TextInstance as TextInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 显示连续空格
     *
     * ensp 中文字符空格一半大小
     *
     * emsp 中文字符空格大小
     *
     * nbsp 根据字体设置的空格大小
     */
    export type TextSpace = _TextSpace;
    /** 文本组件属性 */
    export type TextProps = _TextProps;
    /**
     * 文本组件
     *
     * 用于包裹文本内容
     */
    export type Text = _Text;
    /** 文本组件实例 */
    export type TextInstance = _TextInstance;
  }
}
