export * from './component';
export * from './events';
export * from './view-containers';
export * from './basic-components';
export * from './form-components';
export * from './navigation';
export * from './media-components';
export * from './map';
export * from './canvas';
export * from './web-view';
export * from './ad';
export * from './page-property-configuration-node';

import { PropsWithKebabKeys } from './utils';
import type { View as _View, ViewProps } from './view-containers';
import type { Text as _Text, TextProps } from './basic-components/text';
import type { Form as _Form, FormProps } from './form-components/form';
import type { Progress as _Progress, ProgressProps } from './basic-components/progress';
import type { Canvas as _Canvas, CanvasProps } from './canvas';
import type { Button as _Button, ButtonProps } from './form-components/button';
import type { Input as _Input, InputProps } from './form-components/input';
import type { Label as _Label, LabelProps } from './form-components/label';
import type { Switch as _Switch, SwitchProps } from './form-components/switch';
import { Textarea as _Textarea, TextareaProps } from './form-components';
import { Map as _Map, MapProps } from './map';
import {
  Audio as _Audio,
  AudioProps,
  Image as _Image,
  ImageProps,
  Video as _Video,
  VideoProps,
} from './media-components';

type ViewPropsWithKebabKeys = PropsWithKebabKeys<ViewProps>;
type TextPropsWithKebabKeys = PropsWithKebabKeys<TextProps>;
type FormPropsWithKebabKeys = PropsWithKebabKeys<FormProps>;
type ProgressPropsWithKebabKeys = PropsWithKebabKeys<ProgressProps>;
type CanvasPropsWithKebabKeys = PropsWithKebabKeys<CanvasProps>;
type ButtonPropsWithKebabKeys = PropsWithKebabKeys<ButtonProps>;
type InputPropsWithKebabKeys = PropsWithKebabKeys<InputProps>;
type LabelPropsWithKebabKeys = PropsWithKebabKeys<LabelProps>;
type SwitchPropsWithKebabKeys = PropsWithKebabKeys<SwitchProps>;
type TextAreaPropsWithKebabKeys = PropsWithKebabKeys<TextareaProps>;
type MapPropsWithKebabKeys = PropsWithKebabKeys<MapProps>;
type AudioPropsWithKebabKeys = PropsWithKebabKeys<AudioProps>;
type ImagePropsWithKebabKeys = PropsWithKebabKeys<ImageProps>;
type VideoPropsWithKebabKeys = PropsWithKebabKeys<VideoProps>;

// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 视图容器，和 div 类似，用于包裹各种元素内容
     *
     * 包裹文字建议使用 text
     *
     * 如果使用 div，会编译成 view
     */
    View: _View;
    /**
     * 文本组件
     *
     * 用于包裹文本内容
     */
    Text: _Text;
    /**
     * 表单
     *
     * 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
     */
    Form: _Form;
    /** 进度条 */
    Progress: _Progress;
    /** 画布 */
    Canvas: _Canvas;
    /** 按钮 */
    Button: _Button;
    /** 输入框 */
    Input: _Input;
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
    /** 开关选择器 */
    Switch: _Switch;
    /** 多行输入框 */
    Textarea: _Textarea;
    /** 地图组件，用于展示地图 */
    Map: _Map;
    /** 音频 */
    Audio: _Audio;
    /** 图片 */
    Image: _Image;
    /**
     * 视频播放组件
     *
     * 默认宽度 300px、高度 225px，可通过 css 设置宽高
     */
    Video: _Video;
  }
}

// 3.0 <= Vue <= 3.2
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 视图容器，和 div 类似，用于包裹各种元素内容
       *
       * 包裹文字建议使用 text
       *
       * 如果使用 div，会编译成 view
       */
      view: ViewPropsWithKebabKeys;
      /**
       * 文本组件
       *
       * 用于包裹文本内容
       */
      text: TextPropsWithKebabKeys;
      /**
       * 表单
       *
       * 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
       */
      form: FormPropsWithKebabKeys;
      /** 进度条 */
      progress: ProgressPropsWithKebabKeys;
      /** 画布 */
      canvas: CanvasPropsWithKebabKeys;
      /** 按钮 */
      button: ButtonPropsWithKebabKeys;
      /** 输入框 */
      input: InputPropsWithKebabKeys;
      /**
       * 表单标签
       *
       * 用来改进表单组件的可用性
       *
       * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
       *
       * for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
       */
      label: LabelPropsWithKebabKeys;
      /** 开关选择器 */
      switch: SwitchPropsWithKebabKeys;
      /** 多行输入框 */
      textarea: TextAreaPropsWithKebabKeys;
      /** 地图组件，用于展示地图 */
      map: MapPropsWithKebabKeys;
      /** 音频 */
      audio: AudioPropsWithKebabKeys;
      /** 图片 */
      image: ImagePropsWithKebabKeys;
      /**
       * 视频播放组件
       *
       * 默认宽度 300px、高度 225px，可通过 css 设置宽高
       */
      video: VideoPropsWithKebabKeys;
    }
  }
}

// 3.3 <= Vue
// @ts-ignore
declare module 'vue3/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 视图容器，和 div 类似，用于包裹各种元素内容
       *
       * 包裹文字建议使用 text
       *
       * 如果使用 div，会编译成 view
       */
      view: ViewPropsWithKebabKeys;
      /**
       * 文本组件
       *
       * 用于包裹文本内容
       */
      text: TextPropsWithKebabKeys;
      /**
       * 表单
       *
       * 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
       */
      form: FormPropsWithKebabKeys;
      /** 进度条 */
      progress: ProgressPropsWithKebabKeys;
      /** 画布 */
      canvas: CanvasPropsWithKebabKeys;
      /** 按钮 */
      button: ButtonPropsWithKebabKeys;
      /** 输入框 */
      input: InputPropsWithKebabKeys;
      /**
       * 表单标签
       *
       * 用来改进表单组件的可用性
       *
       * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
       *
       * for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
       */
      label: LabelPropsWithKebabKeys;
      /** 开关选择器 */
      switch: SwitchPropsWithKebabKeys;
      /** 多行输入框 */
      textarea: TextAreaPropsWithKebabKeys;
      /** 地图组件，用于展示地图 */
      map: MapPropsWithKebabKeys;
      /** 音频 */
      audio: AudioPropsWithKebabKeys;
      /** 图片 */
      image: ImagePropsWithKebabKeys;
      /**
       * 视频播放组件
       *
       * 默认宽度 300px、高度 225px，可通过 css 设置宽高
       */
      video: VideoPropsWithKebabKeys;
    }
  }
}
