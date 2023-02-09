import { Component } from '../Component';
import { CustomEvent } from '../events';

/** 显示连续空格 */
type _RichTextSpace = 'ensp' | 'emsp' | 'nbsp';

/** 文本节点 */
interface _RichTextTextNode {
  type: 'text';
  text: string;
}

/** 元素节点 */
interface _RichTextNodeNode {
  type?: 'node';
  name: string;
  attrs?: AnyRecord;
  children?: Array<_RichTextTextNode | _RichTextNodeNode>;
}

/** 节点 */
type _RichTextNode = _RichTextTextNode | _RichTextNodeNode;

/** 节点列表 */
type _RichTextNodes = _RichTextNode[] | string;

/** 拦截点击事件，支持 a 和 img 标签 */
interface _RichTextOnItemclick {
  (event: CustomEvent<{ node: _RichTextNode }>): void;
}

/** 富文本属性 */
type _RichTextProps = Partial<{
  /** 节点列表 */
  nodes: _RichTextNodes;
  /**
   * 显示连续空格
   *
   * 没有默认值
   */
  space: _RichTextSpace;
  /**
   * 富文本是否可以长按选中
   *
   * 默认为 true
   */
  selectable: boolean;
  /**
   * 是否阻止长按图片时弹起默认菜单
   *
   * 只在初始化时有效，不支持动态修改
   *
   * 默认为 false
   */
  imageMenuPrevent: boolean;
  /**
   * 富文本中的图片是否可点击预览
   *
   * 在不设置的情况下，若 rich-text 未监听点击事件，则默认开启
   *
   * 未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview
   */
  preview: boolean;
  /** 拦截点击事件，支持 a 和 img 标签 */
  onItemclick: _RichTextOnItemclick;
}>;

/** 富文本 */
type _RichText = Component<_RichTextProps>;

/** 富文本实例 */
type _RichTextInstance = InstanceType<_RichText>;

export {
  _RichTextSpace as RichTextSpace,
  _RichTextTextNode as RichTextTextNode,
  _RichTextNodeNode as RichTextNodeNode,
  _RichTextNode as RichTextNode,
  _RichTextNodes as RichTextNodes,
  _RichTextOnItemclick as RichTextOnItemclick,
  _RichTextProps as RichTextProps,
  _RichText as RichText,
  _RichTextInstance as RichTextInstance,
};

declare global {
  namespace UniHelper {
    /** 显示连续空格 */
    export type RichTextSpace = _RichTextSpace;
    /** 文本节点 */
    export interface RichTextTextNode extends _RichTextTextNode {}
    /** 元素节点 */
    export interface RichTextNodeNode extends _RichTextNodeNode {}
    /** 节点 */
    export type RichTextNode = _RichTextNode;
    /** 节点列表 */
    export type RichTextNodes = _RichTextNodes;
    /** 拦截点击事件，支持 a 和 img 标签 */
    export interface RichTextOnItemclick extends _RichTextOnItemclick {}
    /** 富文本属性 */
    export type RichTextProps = _RichTextProps;
    /** 富文本 */
    export type RichText = _RichText;
    /** 富文本实例 */
    export type RichTextInstance = _RichTextInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 富文本 */
    RichText: _RichText;
  }
}
