import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

export interface EditorProps {
  /**
   * @desc 是否只读
   * @desc 默认为 false
   */
  readOnly: boolean;
  /**
   * @desc 提示信息
   */
  placeholder: string;
  /**
   * @desc 点击图片时是否显示图片大小控件
   * @desc 默认为 false
   */
  showImgSize: boolean;
  /**
   * @desc 点击图片时是否显示工具栏控件
   * @desc 默认为 false
   */
  showImgToolbar: boolean;
  /**
   * @desc 点击图片时是否显示修改尺寸控件
   * @desc 默认为 false
   */
  showImgResize: string;
  /**
   * @desc 编辑器初始化完成时触发
   */
  onReady: (event: BaseEvent) => void;
  /**
   * @desc 编辑器聚焦时触发
   */
  onFocus: (
    event: CustomEvent<{
      html: string;
      text: string;
      delta: Record<string, any>;
    }>,
  ) => void;
  /**
   * @desc 编辑器失焦时触发
   */
  onBlur: (
    event: CustomEvent<{
      html: string;
      text: string;
      delta: Record<string, any>;
    }>,
  ) => void;
  /**
   * @desc 编辑器内容改变时触发
   */
  onInput: (
    event: CustomEvent<{
      html: string;
      text: string;
      delta: Record<string, any>;
    }>,
  ) => void;
  /**
   * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
   */
  onStatuschange: (event: BaseEvent) => void;
}

/**
 * @desc 富文本编辑器，可以对图片、文字进行编辑和混排
 * @desc 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
 * @desc 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
 * @desc 图片控件仅初始化时设置有效
 */
export type Editor = Component<Partial<EditorProps>>;
