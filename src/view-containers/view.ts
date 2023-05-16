import { Component } from '../component';

/** 视图容器属性 */
type _ViewProps = Partial<{
  /**
   * 指定按下去的样式类
   *
   * 当 hover-class="none" 时，没有点击态效果
   *
   * 默认为 none
   */
  hoverClass: string;
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   *
   * 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * 按住后多久出现点击态
   *
   * 单位为毫秒
   *
   * 默认为 50
   */
  hoverStartTime: number;
  /**
   * 手指松开后点击态保留时间
   *
   * 单位为毫秒
   *
   * 默认为 400
   */
  hoverStayTime: number;
}>;

/**
 * 视图容器，和 div 类似，用于包裹各种元素内容
 *
 * 包裹文字建议使用 text
 *
 * 如果使用 div，会编译成 view
 */
type _View = Component<_ViewProps>;

/** 视图容器实例 */
type _ViewInstance = InstanceType<_View>;

export { _ViewProps as ViewProps, _View as View, _ViewInstance as ViewInstance };

declare global {
  namespace UniHelper {
    /** 视图容器属性 */
    export type ViewProps = _ViewProps;
    /**
     * 视图容器，和 div 类似，用于包裹各种元素内容
     *
     * 包裹文字建议使用 text
     *
     * 如果使用 div，会编译成 view
     */
    export type View = _View;
    /** 视图容器实例 */
    export type ViewInstance = _ViewInstance;
  }
}

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
      view: _View;
    }
  }
}

// 3.3 <= Vue
// @ts-expect-error error TS2664: Invalid module name in augmentation, module 'vue3/jsx-runtime' cannot be found.
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
      view: _View;
    }
  }
}
