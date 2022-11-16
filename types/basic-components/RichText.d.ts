import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 显示连续空格
 */
export type RichTextSpace = 'ensp' | 'emsp' | 'nbsp';

/**
 * @desc 文本节点
 */
export type RichTextTextNode = {
  type: 'text';
  text: string;
};

/**
 * @desc 元素节点
 */
export type RichTextNodeNode = {
  type?: 'node';
  name: string;
  attrs?: Record<string, any>;
  children?: Array<RichTextTextNode | RichTextNodeNode>;
};

/**
 * @desc 节点
 */
export type RichTextNode = RichTextTextNode | RichTextNodeNode;

/**
 * @desc 富文本属性
 */
export interface RichTextProps {
  /**
   * @desc 节点列表
   * @desc
   */
  nodes: RichTextNode[] | string;
  /**
   * @desc 显示连续空格
   * @desc 没有默认值
   */
  space: RichTextSpace;
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
  onItemclick: (event: CustomEvent<{ node: RichTextNode }>) => void;
}

/**
 * @desc 富文本
 * */
export type RichText = Component<Partial<RichTextProps>>;
