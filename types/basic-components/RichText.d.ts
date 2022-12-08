import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 显示连续空格
 */
type _RichTextSpace = 'ensp' | 'emsp' | 'nbsp';

/**
 * @desc 文本节点
 */
type _RichTextTextNode = {
  type: 'text';
  text: string;
};

/**
 * @desc 元素节点
 */
type _RichTextNodeNode = {
  type?: 'node';
  name: string;
  attrs?: AnyRecord;
  children?: Array<_RichTextTextNode | _RichTextNodeNode>;
};

/**
 * @desc 节点
 */
type _RichTextNode = _RichTextTextNode | _RichTextNodeNode;

/**
 * @desc 节点列表
 */
type _RichTextNodes = _RichTextNode[] | string;

/**
 * @desc 拦截点击事件，支持 a 和 img 标签
 */
interface _RichTextItemclick {
  (event: CustomEvent<{ node: _RichTextNode }>): void;
}

/**
 * @desc 富文本属性
 */
interface _RichTextProps {
  /**
   * @desc 节点列表
   */
  nodes: _RichTextNodes;
  /**
   * @desc 显示连续空格
   * @desc 没有默认值
   */
  space: _RichTextSpace;
  /**
   * @desc 富文本是否可以长按选中
   * @desc 默认为 true
   */
  selectable: boolean;
  /**
   * @desc 是否阻止长按图片时弹起默认菜单
   * @desc 只在初始化时有效，不支持动态修改
   * @desc 默认为 false
   */
  imageMenuPrevent: boolean;
  /**
   * @desc 富文本中的图片是否可点击预览
   * @desc 在不设置的情况下，若 rich-text 未监听点击事件，则默认开启
   * @desc 未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview
   */
  preview: boolean;
  /**
   * @desc 拦截点击事件，支持 a 和 img 标签
   */
  onItemclick: _RichTextItemclick;
}

/**
 * @desc 富文本
 */
type _RichText = Component<Partial<_RichTextProps>>;

export {
  _RichTextSpace as RichTextSpace,
  _RichTextTextNode as RichTextTextNode,
  _RichTextNodeNode as RichTextNodeNode,
  _RichTextNode as RichTextNode,
  _RichTextNodes as RichTextNodes,
  _RichTextItemclick as RichTextItemclick,
  _RichTextProps as RichTextProps,
  _RichText as RichText,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 显示连续空格
     */
    export type RichTextSpace = _RichTextSpace;
    /**
     * @desc 文本节点
     */
    export type RichTextTextNode = _RichTextTextNode;
    /**
     * @desc 元素节点
     */
    export type RichTextNodeNode = _RichTextNodeNode;
    /**
     * @desc 节点
     */
    export type RichTextNode = _RichTextNode;
    /**
     * @desc 节点列表
     */
    export type RichTextNodes = _RichTextNodes;
    /**
     * @desc 拦截点击事件，支持 a 和 img 标签
     */
    export interface RichTextItemclick extends _RichTextItemclick {}
    /**
     * @desc 富文本属性
     */
    export interface RichTextProps extends _RichTextProps {}
    /**
     * @desc 富文本
     */
    export type RichText = _RichText;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 富文本
     */
    RichText: _RichText;
  }
}
