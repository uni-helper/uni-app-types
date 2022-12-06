# @uni-helper/uni-app-types

[![License](https://img.shields.io/github/license/uni-helper/uni-app-types)](https://github.com/uni-helper/uni-app-types/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@uni-helper/uni-app-types)](https://www.npmjs.com/package/@uni-helper/uni-app-types)

`uni-app` 组件类型。[@uni-helper/uni-cloud-types](https://github.com/uni-helper/uni-cloud-types) 提供 `uni-cloud` 组件类型，[@uni-helper/uni-ui-types](https://github.com/uni-helper/uni-ui-types) 提供 `uni-ui` 组件类型。

基于 [这个 PR](https://github.com/vuejs/core/pull/3399)，[Volar](https://github.com/johnsoncodehk/volar) 已经支持。

安装 Volar 之后，建议启用 Volar 的 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471)。如果不想启用 Take Over Mode，可以安装 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)。启用或安装后需要重启 VSCode。

维护直到官方类型推出。

**类型和文档的冲突之处，请以文档为准。**

类型源代码在 [uni-helper/uni-app-types](https://github.com/uni-helper/uni-app-types)。欢迎提交 ISSUE 和 PR 改进类型。

## 使用

### 配置

- 安装依赖

```shell
npm i -D @uni-helper/uni-app-types
```

- 配置 `tsconfig.json`，确保 `compilerOptions.types` 中含有 `@dcloudio/types` 和 `@uni-helper/uni-app-types` 且 `include` 包含了对应的 `vue` 文件

```json
{
  "compilerOptions": {
    "types": ["@dcloudio/types", "@uni-helper/uni-app-types"]
  },
  "vueCompilerOptions": {
    "experimentalRuntimeMode": "runtime-uni-app",
    "nativeTags": ["block", "component", "template", "slot"]
  },
  "include": ["src/**/*.vue"]
}
```

更多关于 `experimentalRuntimeMode` 和 `nativeTags` 的信息请查看 [johnsoncodehk/volar#2165 (comment)](https://github.com/johnsoncodehk/volar/issues/2165#issuecomment-1334803492)。

- 重启编辑器 / IDE

### 标注类型

推荐使用 `@uni-helper/uni-app-types` 导出的类型为变量标注类型。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { ScrollViewProps, ScrollViewScroll, } from '@uni-helper/uni-app-types';

const scrollY = ref<ScrollViewProps['scrollY']>(true);
const onScroll: ScrollViewScroll = (event) => {
  ...
};
</script>

<template>
  <scroll-view @scroll="onScroll"></scroll-view>
</template>
```

也可以直接使用命名空间来为变量标注类型。

```vue
<script setup lang="ts">
import { ref } from 'vue';

const scrollY = ref<UniHelper.ScrollViewProps['scrollY']>(true);
const onScroll: UniHelper.ScrollViewScroll = (event) => {
  ...
};
</script>

<template>
  <scroll-view @scroll="onScroll"></scroll-view>
</template>
```

## 类型

### AnyRecord

```typescript
export type AnyRecord = Record<string, any>;
```

### Component

```typescript
import {
  DefineComponent,
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  EmitsOptions,
  ExtractPropTypes,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
} from 'vue3';

type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

export type Component<P extends AnyRecord = AnyRecord> = DefineComponent<
  {},
  {},
  {},
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  EmitsOptions,
  string,
  PublicProps,
  Readonly<ExtractPropTypes<P>>
>;
```

### EventTarget

```typescript
/**
 * @desc 组件的一些属性值集合
 */
export interface EventTarget<Dataset extends AnyRecord = AnyRecord> {
  /**
   * @desc 事件源组件的id
   */
  id?: string;
  /**
   * @desc 当前组件的类型
   */
  tagName?: string;
  /**
   * @desc 事件源组件上由 data- 开头的自定义属性组成的集合
   */
  dataset?: Dataset;
  /**
   * @desc 距离页面顶部的偏移量
   */
  offsetTop: number;
  /**
   * @desc 距离页面左边的偏移量
   */
  offsetLeft: number;
  [key: string]: any;
}
```

### BaseEvent

```typescript
/**
 * @desc 基础事件
 */
export interface BaseEvent<
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> {
  /**
   * @desc 事件类型
   */
  type?: string;
  /**
   * @desc 事件生成时的时间戳
   */
  timeStamp?: number;
  /**
   * @desc 事件冒泡路径上所有由 mark: 开头的自定义属性组成的集合
   */
  mark?: Mark;
  /**
   * @desc 触发事件的源组件的一些属性值集合
   */
  target?: EventTarget<TargetDataset>;
  /**
   * @desc 事件绑定的当前组件的一些属性值集合
   */
  currentTarget?: Target<CurrentTargetDataset>;
  [key: string]: any;
}
```

### CustomEvent

```typescript
/**
 * @desc 自定义事件
 */
export interface CustomEvent<
  Detail extends AnyRecord = AnyRecord,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
  /**
   * @desc 额外信息
   */
  detail?: Detail;
  [key: string]: any;
}
```

### TouchDetail

```typescript
/**
 * @desc 当前停留在屏幕中的触摸点信息
 */
export interface TouchDetail {
  /**
   * @desc 标志符
   */
  identifier?: number;
  /**
   * @desc 距离文档左上角的横向距离
   */
  pageX?: number;
  /**
   * @desc 距离文档左上角的纵向距离
   */
  pageY?: number;
  /**
   * @desc 距离页面可显示区域（屏幕除去导航条）左上角的横向距离
   */
  clientX?: number;
  /**
   * @desc 距离页面可显示区域（屏幕除去导航条）左上角的纵向距离
   */
  clientY?: number;
}
```

### TouchCanvasDetail

```typescript
/**
 * @desc 当前停留在 canvas 中的触摸点信息
 */
export interface TouchCanvasDetail {
  /**
   * @desc 标志符
   */
  identifier?: number;
  /**
   * @desc 距离 canvas 左上角的横向距离
   */
  x?: number;
  /**
   * @desc 距离 canvas 左上角的纵向距离
   */
  y?: number;
}
```

### BaseTouchEvent

```typescript
/**
 * @desc 触摸事件
 */
export interface BaseTouchEvent<
  Detail extends AnyRecord = AnyRecord,
  T extends TouchDetail | TouchCanvasDetail = TouchDetail,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends CustomEvent<Detail, Mark, CurrentTargetDataset, TargetDataset> {
  /**
   * @desc 当前停留在屏幕中的触摸点信息的数组
   */
  touches: T[];
  /**
   * @desc 当前变化的触摸点信息的数组
   */
  changedTouches: T[];
}
```

### TouchEvent

```typescript
/**
 * @desc 触摸事件响应
 */
export type TouchEvent<
  Detail extends AnyRecord = AnyRecord,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> = BaseTouchEvent<Detail, TouchDetail, Mark, CurrentTargetDataset, TargetDataset>;
```

### TouchCanvasEvent

```typescript
/**
 * @desc canvas 触摸事件响应
 */
interface TouchCanvasEvent<
  Mark extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = AnyRecord,
> extends BaseTouchEvent<never, TouchCanvasDetail, Mark, never, TargetDataset> {
  currentTarget: never;
}
```

### View (view)

```typescript
export interface ViewProps {
  /**
   * @desc 指定按下去的样式类
   * @desc 当 hover-class="none" 时，没有点击态效果
   * @desc 默认为 none
   */
  hoverClass: string;
  /**
   * @desc 指定是否阻止本节点的祖先节点出现点击态
   * @desc 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * @desc 按住后多久出现点击态
   * @desc 单位为毫秒
   * @desc 默认为 50
   */
  hoverStartTime: number;
  /**
   * @desc 手指松开后点击态保留时间
   * @desc 单位为毫秒
   * @desc 默认为 400
   */
  hoverStayTime: number;
}

/**
 * @desc 视图容器，和 div 类似，用于包裹各种元素内容
 * @desc 包裹文字建议使用 text
 * @desc 如果使用 div，会编译成 view
 */
export type View = Component<Partial<ViewProps>>;
```

### ScrollView (scroll-view)

```typescript
/**
 * @desc 滚动到顶部/左边时触发
 */
export type ScrollViewScrolltoupper = (event: BaseEvent) => void;

/**
 * @desc 滚动到底部/右边时触发
 */
export type ScrollViewScrolltolower = (event: BaseEvent) => void;

/**
 * @desc 滚动时触发
 */
export type ScrollViewScroll = (
  event: CustomEvent<{
    scrollLeft: number;
    scrollTop: number;
    scrollHeight: number;
    scrollWidth: number;
    deltaX: number;
    deltaY: number;
  }>,
) => void;

/**
 * @desc 自定义下拉刷新控件被下拉时触发
 */
export type ScrollViewRefresherpulling = (event: BaseEvent) => void;

/**
 * @desc 自定义下拉刷新被触发时触发
 */
export type ScrollViewRefresherrefresh = (event: BaseEvent) => void;

/**
 * @desc 自定义下拉刷新被复位时触发
 */
export type ScrollViewRefresherrestore = (event: BaseEvent) => void;

/**
 * @desc 自定义下拉刷新被中止时触发
 */
export type ScrollViewRefresherabort = (event: BaseEvent) => void;

export interface ScrollViewProps {
  /**
   * @desc 是否允许横向滚动
   * @desc 默认为 false
   */
  scrollX: boolean;
  /**
   * @desc 是否允许纵向滚动
   * @desc 默认为 false
   */
  scrollY: boolean;
  /**
   * @desc 距顶部/左边多远时触发 scrolltoupper 事件
   * @desc 单位为 px
   * @desc 默认为 50
   */
  upperThreshold: number | string;
  /**
   * @desc 距底部/右边多远时触发 scrolltolower 事件
   * @desc 单位为 px
   * @desc 默认为 50
   */
  lowerThreshold: number | string;
  /**
   * @desc 设置纵向滚动条位置
   * @desc 优先级低于 scroll-into-view
   */
  scrollTop: number | string;
  /**
   * @decs 设置横向滚动条位置
   * @desc 优先级低于 scroll-into-view
   */
  scrollLeft: number | string;
  /**
   * @desc 值应为某子元素 id，id 不能以数字开头
   * @desc 设置哪个方向可滚动，则在哪个方向滚动到该元素
   * @desc 优先级高于 scroll-top / scroll-left
   */
  scrollIntoView: string;
  /**
   * @desc 在设置滚动条位置时是否使用动画过渡
   * @desc 默认为 false
   */
  scrollWithAnimation: boolean;
  /**
   * @desc 是否允许 iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部
   * @desc 只支持纵向
   * @desc 默认为 false
   */
  enableBackToTop: boolean;
  /**
   * @desc 控制是否出现滚动条
   * @desc 默认为 false
   */
  showScrollbar: boolean;
  /**
   * @desc 是否开启自定义下拉刷新
   * @desc 默认为 false
   */
  refresherEnabled: boolean;
  /**
   * @desc 设置自定义下拉刷新阈值
   * @desc 默认为 45
   */
  refresherThreshold: number;
  /**
   * @desc 设置自定义下拉刷新默认样式
   * @desc none 不使用默认样式
   * @desc 默认为 black
   */
  refresherDefaultStyle: 'black' | 'white' | 'none';
  /**
   * @desc 自定义下拉刷新区域背景颜色
   * @desc 默认为 #FFF
   */
  refresherBackground: string;
  /**
   * @desc 设置当前下拉刷新状态
   * @desc true 下拉刷新已经被触发
   * @desc false 下拉刷新未被触发
   * @desc 默认为 false
   */
  refresherTriggered: boolean;
  /**
   * @desc 是否启用 flexbox 布局
   * @desc 开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其子节点
   * @desc 默认为 false
   */
  enableFlex: boolean;
  /**
   * @desc 是否开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效
   * @desc 安卓下可参考 CSS overflow-anchor 属性
   * @desc 默认为 false
   */
  scrollAnchoring: boolean;
  /**
   * @desc 滚动到顶部/左边时触发
   */
  onScrolltoupper: ScrollViewScrolltoupper;
  /**
   * @desc 滚动到底部/右边时触发
   */
  onScrolltolower: ScrollViewScrolltolower;
  /**
   * @desc 滚动时触发
   */
  onScroll: ScrollViewScroll;
  /**
   * @desc 自定义下拉刷新控件被下拉时触发
   */
  onRefresherpulling: ScrollViewRefresherpulling;
  /**
   * @desc 自定义下拉刷新被触发时触发
   */
  onRefresherrefresh: ScrollViewRefresherrefresh;
  /**
   * @desc 自定义下拉刷新被复位时触发
   */
  onRefresherrestore: ScrollViewRefresherrestore;
  /**
   * @desc 自定义下拉刷新被中止时触发
   */
  onRefresherabort: ScrollViewRefresherabort;
}

/**
 * @desc 可滚动视图区域，用于区域滚动
 * @desc 在 webview 渲染的页面中，区域滚动的性能不及页面滚动
 * @desc 纵向滚动时，需要给 scroll-view 一个固定高度，通过 css 设置 height
 * @desc 横向滚动时，需要给 scroll-view 添加 white-space: nowrap; 样式
 * @desc scroll-view 是区域滚动，不会触发页面滚动，无法触发 pages.json 配置的下拉刷新、页面触底onReachBottomDistance、titleNView 的 transparent 透明渐变
 */
export type ScrollView = Component<Partial<ScrollViewProps>>;
```

### Swiper (swiper)

```typescript
/**
 * @desc 导致变更的原因
 * @desc autoplay 自动播放
 * @desc touch 用户滑动
 * @desc 空字符串 其它原因
 */
export type SwiperSource = 'autoplay' | 'touch' | '';

/**
 * @desc swiper 切换缓动动画类型
 */
export type SwiperEasingFunction =
  | 'default'
  | 'linear'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic';

/**
 * @desc current 改变时触发
 */
export type SwiperChange = (
  event: CustomEvent<{
    /**
     * @desc 当前所在滑块的下标
     */
    current: number;
    /**
     * @desc 导致变更的原因
     * @desc autoplay 自动播放
     * @desc touch 用户滑动
     * @desc 空字符串 其它原因
     */
    source: SwiperSource;
  }>,
) => void;

/**
 * @desc swiper-item 位置改变时触发
 */
export type SwiperTransition = (
  event: CustomEvent<{
    dx?: number;
    dy?: number;
  }>,
) => void;

/**
 * @desc 动画结束时触发
 */
export type SwiperAnimationfinish = (
  event: CustomEvent<{
    /**
     * @desc 当前所在滑块的下标
     */
    current: number;
    /**
     * @desc 导致变更的原因
     * @desc autoplay 自动播放
     * @desc touch 用户滑动
     * @desc 空字符串其它原因
     */
    source: SwiperSource;
  }>,
) => void;

export interface SwiperProps {
  /**
   * @desc 是否显示面板指示点
   * @desc 默认为 false
   */
  indicatorDots: boolean;
  /**
   * @desc 指示点颜色
   * @desc 默认为 rgba(0, 0, 0, 0.3)
   */
  indicatorColor: string;
  /**
   * @desc 当前选中的指示点颜色
   * @desc 默认为 #000000
   */
  indicatorActiveColor: string;
  /**
   * @desc swiper-item 可见时的 class
   */
  activeClass: string;
  /**
   * @desc acceleration 设置为 true 时且处于滑动过程中，中间若干屏处于可见时的 class
   */
  changingClass: boolean;
  /**
   * @desc 是否自动切换
   * @desc 默认为 false
   */
  autoplay: boolean;
  /**
   * @desc 当前所在滑块的下标
   * @desc 默认为 0
   */
  current: number;
  /**
   * @desc 当前所在滑块的 item-id ，不能与 current 被同时指定
   */
  currentItemId: string;
  /**
   * @desc 自动切换时间间隔
   * @desc 默认为 5000
   */
  interval: number;
  /**
   * @desc 滑动动画时长
   * @desc 默认为 500
   */
  duration: number;
  /**
   * @desc 是否采用衔接滑动，即播放到末尾后重新回到开头
   * @desc 默认为 false
   */
  circular: boolean;
  /**
   * @desc 滑动方向是否为纵向
   * @desc 默认为 false
   */
  vertical: boolean;
  /**
   * @desc 前边距，可用于露出前一项的一小部分
   * @desc 接受 px 和 rpx 值
   * @desc 默认为 0px
   */
  previousMargin: string;
  /**
   * @desc 后边距，可用于露出后一项的一小部分
   * @desc 接受 px 和 rpx 值
   * @desc 默认为 0px
   */
  nextMargin: string;
  /**
   * @desc 当开启时，会根据滑动速度，连续滑动多屏
   * @desc 默认 false
   */
  acceleration: boolean;
  /**
   * @desc 是否禁用代码变动触发 swiper 切换时使用动画
   * @desc 默认为 false
   */
  disableProgrammaticAnimation: boolean;
  /**
   * @desc 同时显示的滑块数量
   * @desc 默认为 1
   */
  displayMultipleItems: number;
  /**
   * @desc 是否跳过未显示的滑块布局
   * @desc 设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
   * @desc 默认为 false
   */
  skipHiddenItemLayout: boolean;
  /**
   * @desc 是否禁止用户 touch 操作
   * @desc 默认为 false
   */
  disableTouch: boolean;
  /**
   * @desc 是否监听用户的触摸事件
   * @desc 只在初始化时有效，不支持动态修改
   * @desc 默认为 true
   */
  touchable: boolean;
  /**
   * @desc 指定 swiper 切换缓动动画类型
   * @desc 默认为 default
   */
  easingFunction: SwiperEasingFunction;
  /**
   * @desc current 改变时触发
   */
  onChange: SwiperChange;
  /**
   * @desc swiper-item 位置改变时触发
   */
  onTransition: SwiperTransition;
  /**
   * @desc 动画结束时触发
   */
  onAnimationfinish: SwiperAnimationfinish;
}

/**
 * @desc 滑块视图容器，一般用于左右滑动或上下滑动，比如 banner 轮播图
 * @desc 注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换
 * @desc swiper 下的每个 swiper-item 是一个滑动切换区域，不能停留在 2 个滑动区域之间
 */
export type Swiper = Component<Partial<SwiperProps>>;
```

### SwiperItem (swiper-item)

```typescript
export interface SwiperItemProps {
  /**
   * @desc 标识符
   */
  itemId: string;
}

/**
 * @desc swiper 直接子组件，宽高自动设置为父组件的 100%
 * @desc 不能被子组件自动撑开
 */
export type SwiperItem = Component<Partial<SwiperItemProps>>;
```

### MatchMedia (match-media)

```typescript
/**
 * @desc 屏幕方向
 * @desc landscape 横向
 * @desc portrait 纵向
 */
export type MatchMediaOrientation = 'landscape' | 'portrait';

export interface MatchMediaProps {
  /**
   * @desc 页面最小宽度
   * @desc 单位为 px
   */
  minWidth: number;
  /**
   * @desc 页面最大宽度
   * @desc 单位为 px
   */
  maxWidth: number;
  /**
   * @desc 页面宽度
   * @desc 单位为 px
   */
  width: number;
  /**
   * @desc 页面最小高度
   * @desc 单位为 px
   */
  minHeight: number;
  /**
   * @desc 页面最大高度
   * @desc 单位为 px
   */
  maxHeight: number;
  /**
   * @desc 页面高度
   * @desc 单位为 px
   */
  height: number;
  /**
   * @desc 屏幕方向
   * @desc landscape 横向
   * @desc portrait 纵向
   */
  orientation: MatchMediaOrientation;
}

/**
 * @desc media query 匹配检测节点
 * @desc 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
 * @desc 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
 */
export type MatchMedia = Component<Partial<MatchMediaProps>>;
```

### MovableArea (movable-area)

```typescript
export interface MovableAreaProps {
  /**
   * @desc 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area
   * @desc 默认为 false
   */
  scaleArea: boolean;
}

/**
 * @desc 可拖动区域
 * @desc movable-area 指代可拖动的范围，在其中内嵌 movable-view 组件用于指示可拖动的区域
 * @desc 即手指/鼠标按住 movable-view 拖动或双指缩放，但拖不出 movable-area 规定的范围
 * @desc 也可以不拖动，而使用代码来触发 movable-view 在 movable-area 里的移动缩放
 * @desc 默认宽高为 10px
 */
export type MovableArea = Component<Partial<MovableAreaProps>>;
```

### MovableView (movable-view)

```typescript
/**
 * @desc movable-view 的移动方向
 */
export type MovableViewDirection = 'all' | 'vertical' | 'horizontal' | 'none';

/**
 * @desc movable-view 产生移动的原因
 * @desc touch 拖动
 * @desc touch-out-of-bounds 超出移动范围
 * @desc out-of-bounds 超出移动范围后的回弹
 * @desc friction 惯性
 * @desc 空字符串 setData
 */
export type MovableViewSource = 'touch' | 'touch-out-of-bounds' | 'out-of-bounds' | 'friction' | '';

export interface MovableViewProps {
  /**
   * @desc movable-view 的移动方向
   * @desc 默认为 none
   */
  direction: MovableViewDirection;
  /**
   * @desc 是否带有惯性
   * @desc 默认为 false
   */
  inertia: boolean;
  /**
   * @desc 超过可移动区域后，是否还可以移动
   * @desc 默认为 false
   */
  outOfBounds: boolean;
  /**
   * @desc 定义 x 轴方向的偏移
   * @desc 如果 x 的值不在可移动范围内，会自动移动到可移动范围
   * @desc 改变 x 的值会触发动画
   */
  x: string | number;
  /**
   * @desc 定义 y 轴方向的偏移
   * @desc 如果 y 的值不在可移动范围内，会自动移动到可移动范围
   * @desc 改变 y 的值会触发动画
   */
  y: string | number;
  /**
   * @desc 阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画
   * @desc 值越大移动越快
   * @desc 默认为 20
   */
  damping: number;
  /**
   * @desc 摩擦系数，用于控制惯性滑动的动画
   * @desc 值越大摩擦力越大，滑动越快停止
   * @desc 必须大于 0，否则会被设置成默认值
   * @desc 默认为 2
   */
  friction: number;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否支持双指缩放
   * @desc 默认缩放手势生效区域是在 movable-view 内
   * @desc 默认为 false
   */
  scale: boolean;
  /**
   * @desc 定义缩放倍数最小值
   * @desc 默认为 0.5
   */
  scaleMin: number;
  /**
   * @desc 定义缩放倍数最大值
   * @desc 默认为 10
   */
  scaleMax: number;
  /**
   * @desc 定义缩放倍数
   * @desc 取值范围为 0.5 - 10
   * @desc 默认为 1
   */
  scaleValue: number;
  /**
   * @desc 是否使用动画
   * @desc 默认为 true
   */
  animation: boolean;
  /**
   * @desc 拖动过程中触发
   */
  onChange: (
    event: CustomEvent<{
      x: number;
      y: number;
      /**
       * @desc movable-view 产生移动的原因
       * @desc touch 拖动
       * @desc touch-out-of-bounds 超出移动范围
       * @desc out-of-bounds 超出移动范围后的回弹
       * @desc friction 惯性
       * @desc 空字符串 setData
       */
      source: MovableViewChangeSource;
    }>,
  ) => void;
  /**
   * @desc 缩放过程中触发
   */
  onScale: (
    event: CustomEvent<{
      x: number;
      y: number;
      /**
       * @desc 是否支持双指缩放
       * @desc 默认缩放手势生效区域是在 movable-view 内
       */
      scale: boolean;
    }>,
  ) => void;
}

/**
 * @desc 可移动的视图容器，在页面中可以拖拽滑动或双指缩放
 * @desc movable-area 直接子组件
 */
export type MovableView = Component<Partial<MovableViewProps>>;
```

### CoverView (cover-view)

```typescript
export interface CoverViewProps {
  /**
   * @desc 设置顶部滚动偏移量
   * @desc 仅在设置了 overflow-y: scroll 成为滚动元素后生效
   */
  scrollTop: number | string;
}

/**
 * @desc 覆盖在原生组件之上的文本视图
 * @desc app-vue 和小程序框架，渲染引擎是 webview
 * @desc 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
 * @desc 为了能正常覆盖原生组件，设计了 cover-view
 */
export type CoverView = Component<Partial<CoverViewProps>>;
```

### CoverImage (cover-image)

```typescript
export interface CoverImageProps {
  /**
   * @desc 图片路径
   * @desc 支持本地路径、网络路径
   * @desc 不支持 base64 格式
   */
  src: string;
  /**
   * @desc 图片加载成功时触发
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 图片加载失败时触发
   */
  onError: (event: BaseEvent) => void;
}

/**
 * @desc 覆盖在原生组件之上的图片视图
 * @desc 可覆盖的原生组件同 cover-view
 * @desc 支持嵌套在 cover-view 里
 */
export type CoverImage = Component<Partial<CoverImageProps>>;
```

### Icon (icon)

```typescript
/**
 * @desc 图标属性
 */
export interface IconProps {
  /**
   * @desc 类型
   */
  type: string;
  /**
   * @desc 大小
   * @desc 单位为 px
   * @desc 默认为 23
   */
  size: number;
  /**
   * @desc 颜色
   */
  color: string;
}

/**
 * @desc 图标
 */
export type Icon = Component<Partial<IconProps>>;
```

### Text (text)

```typescript
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
```

### RichText (rich-text)

```typescript
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
  attrs?: AnyRecord;
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
```

### Progress (progress)

```typescript
/**
 * @desc 动画播放方式
 * @desc backwards 动画从头播
 * @desc forwards 动画从上次结束点接着播
 */
export type ProgressActiveMode = 'backwards' | 'forwards';

/**
 * @desc 进度条属性
 */
export interface ProgressProps {
  /**
   * @desc 百分比
   * @desc 取值范围为 0 - 100
   * @desc 没有默认值
   */
  percent: number;
  /**
   * @desc 是否在进度条右侧显示百分比
   * @desc 默认为 false
   */
  showInfo: boolean;
  /**
   * @desc 圆角大小
   * @desc 默认为 0
   */
  borderRadius: number | string;
  /**
   * @desc 进度条右侧显示的百分比字体大小
   * @desc 默认为 16
   */
  fontSize: number | string;
  /**
   * @desc 进度条线的宽度
   * @desc 单位为 px
   * @desc 默认为 6
   */
  strokeWidth: number;
  /**
   * @desc 已选择的进度条的颜色
   * @desc 默认为 #09bb07，百度默认为 #e6e6e6
   */
  activeColor: string;
  /**
   * @desc 未选择的进度条的颜色
   * @desc 默认为 #ebebeb
   */
  backgroundColor: string;
  /**
   * @desc 是否显示进度条从左往右的动画
   * @desc 默认为 false
   */
  active: boolean;
  /**
   * @desc 动画播放方式
   * @desc backwards 动画从头播
   * @desc forwards 动画从上次结束点接着播
   * @desc 默认为 backwards
   */
  activeMode: ProgressActiveMode;
  /**
   * @desc 进度增加 1% 所需时间
   * @desc 单位为 ms
   * @desc 默认为 30
   */
  duration: number;
  /**
   * @desc 动画完成时触发
   */
  onActiveend: (event: BaseEvent) => void;
}

/**
 * @desc 进度条
 */
export type Progress = Component<Partial<ProgressProps>>;
```

### Button (button)

```typescript
/**
 * @desc 按钮的大小
 * @desc default 默认
 * @desc mini 小
 */
export type ButtonSize = 'default' | 'mini';

/**
 * @desc 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
 * @desc primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ 小程序为浅蓝色
 * @desc default 白色
 * @desc warn 红色
 */
export type ButtonType = 'primary' | 'default' | 'warn';

/**
 * @desc 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
 * @desc submit 点击会触发 form 的 submit 事件
 * @desc reset 点击会触发 form 的 reset 事件
 */
export type ButtonFormType = 'submit' | 'reset';

/**
 * @desc 开放能力
 * @desc feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
 * @desc share 触发用户转发
 * @desc getUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
 * @desc contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
 * @desc getPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
 * @desc launchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
 * @desc openSetting 打开授权设置页
 * @desc chooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
 * @desc getAuthorize 支持小程序授权
 * @desc lifestyle 关注生活号
 * @desc contactShare 分享到通讯录好友
 * @desc openGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置 groupIdList
 * @desc openGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
 * @desc openPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置 publicIdList
 * @desc shareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
 * @desc addFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
 * @desc addColorSign 添加彩签，点击后添加状态有用户提示，无回调
 * @desc addGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
 * @desc addToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
 * @desc chooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
 * @desc chooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
 * @desc login 登录，可以从 `@login` 回调中确认是否登录成功
 * @desc subscribe 订阅类模板消息，需要用户授权才可发送
 * @desc favorite 触发用户收藏
 * @desc watchLater 触发用户稍后再看
 * @desc openProfile 触发打开用户主页
 */
export type ButtonOpenType =
  | 'feedback'
  | 'share'
  | 'getUserInfo'
  | 'contact'
  | 'getPhoneNumber'
  | 'launchApp'
  | 'openSetting'
  | 'chooseAvatar'
  | 'getAuthorize'
  | 'lifestyle'
  | 'contactShare'
  | 'openGroupProfile'
  | 'openGuildProfile'
  | 'openPublicProfile'
  | 'shareMessageToFriend'
  | 'addFriend'
  | 'addColorSign'
  | 'addGroupApp'
  | 'addToFavorites'
  | 'chooseAddress'
  | 'chooseInvoiceTitle'
  | 'login'
  | 'subscribe'
  | 'favorite'
  | 'watchLater'
  | 'openProfile';

/**
 * @desc 返回用户信息的语言
 * @desc zh_CN 简体中文
 * @desc zh_TW 繁体中文
 * @desc en 英文
 */
export type ButtonLang = 'zh_CN' | 'zh_TW' | 'en';

export interface ButtonProps {
  /**
   * @desc 按钮的大小
   * @desc default 默认
   * @desc mini 小
   * @desc 默认为 default
   */
  size: ButtonSize;
  /**
   * @desc 按钮的样式类型
   * @desc primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ 小程序为浅蓝色
   * @desc default 白色
   * @desc warn 红色
   * @desc 默认为 default
   */
  type: ButtonType;
  /**
   * @desc 按钮是否镂空，背景色透明
   * @desc 默认为 false
   */
  plain: boolean;
  /**
   * @desc 是否禁用
   */
  disabled: boolean;
  /**
   * @desc 是否带 loading 图标
   * @desc 默认为 false
   */
  loading: boolean;
  /**
   * @desc 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
   * @desc submit 点击会触发 form 的 submit 事件
   * @desc reset 点击会触发 form 的 reset 事件
   * @desc 没有默认值
   */
  formType: ButtonFormType;
  /**
   * @desc 开放能力
   * @desc feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
   * @desc share 触发用户转发
   * @desc getUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
   * @desc contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
   * @desc getPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
   * @desc launchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
   * @desc openSetting 打开授权设置页
   * @desc chooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
   * @desc getAuthorize 支持小程序授权
   * @desc lifestyle 关注生活号
   * @desc contactShare 分享到通讯录好友
   * @desc openGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置 groupIdList
   * @desc openGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
   * @desc openPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置 publicIdList
   * @desc shareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
   * @desc addFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
   * @desc addColorSign 添加彩签，点击后添加状态有用户提示，无回调
   * @desc addGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
   * @desc addToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
   * @desc chooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
   * @desc chooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
   * @desc login 登录，可以从 `@login` 回调中确认是否登录成功
   * @desc subscribe 订阅类模板消息，需要用户授权才可发送
   * @desc favorite 触发用户收藏
   * @desc watchLater 触发用户稍后再看
   * @desc openProfile 触发打开用户主页
   */
  openType: ButtonOpenType;
  /**
   * @desc 指定按下去的样式类
   * @desc 当 hover-class="none" 时，没有点击态效果
   * @desc 默认为 button-hover
   */
  hoverClass: string;
  /**
   * @desc 按住后多久出现点击态
   * @desc 单位为 ms
   * @desc 默认为 20
   */
  hoverStartTime: number;
  /**
   * @desc 手指松开后点击态保留时间
   * @desc 单位为 ms
   * @desc 默认为 70
   */
  hoverStayTime: number;
  /**
   * @desc 打开 APP 时，向 APP 传递的参数
   * @desc open-type="launchApp" 时有效
   */
  appParameter: string;
  /**
   * @desc 指定是否阻止本节点的祖先节点出现点击态
   * @desc 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * @desc 返回用户信息的语言
   * @desc zh_CN 简体中文
   * @desc zh_TW 繁体中文
   * @desc en 英文
   * @desc 默认为 en
   */
  lang: ButtonLang;
  /**
   * @desc 会话来源
   * @desc open-type="contact" 时有效
   */
  sessionFrom: string;
  /**
   * @desc 会话内消息卡片标题
   * @desc open-type="contact" 时有效
   * @desc 默认为当前标题
   */
  sendMessageTitle: string;
  /**
   * @desc 会话内消息卡片点击跳转小程序路径
   * @desc open-type="contact" 时有效
   * @desc 默认为当前分享路径
   */
  sendMessagePath: string;
  /**
   * @desc 会话内消息卡片图片
   * @desc open-type="contact" 时有效
   * @desc 默认为截图
   */
  sendMessageImg: string;
  /**
   * @desc 是否显示会话内消息卡片
   * @desc 设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
   * @desc open-type="contact" 时有效
   * @desc 默认为 false
   */
  showMessageCard: boolean;
  /**
   * @desc 打开群资料卡时，传递的群号
   * @desc open-type="openGroupProfile" 时有效
   */
  groupId: string;
  /**
   * @desc 打开频道页面时，传递的频道号
   * @desc open-type="openGuildProfile" 时有效
   */
  guildId: string;
  /**
   * @desc 打开公众号资料卡时，传递的号码
   * @desc open-type="openPublicProfile" 时有效
   */
  publicId: string;
  /**
   * @desc 获取用户手机号时回调
   * @desc open-type="getPhoneNumber" 时有效
   */
  onGetphonenumber: (
    event: CustomEvent<{
      /**
       * @desc 错误信息
       */
      errMsg?: string;
      /**
       * @desc 动态令牌
       */
      code?: string;
      /**
       * @desc 包括敏感数据在内的完整用户信息的加密数据
       */
      encryptedData?: string;
      /**
       * @desc 加密算法的初始向量
       */
      iv?: string;
      /**
       * @desc 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据
       */
      cloudID?: string;
    }>,
  ) => void;
  /**
   * @desc 使用开放能力发生错误时回调
   */
  onError: (event: BaseEvent) => void;
  /**
   * @desc 在打开授权设置页并关闭后回调
   * @desc open-type="openSetting" 时有效
   */
  onOpensetting: (
    event: CustomEvent<{
      authSetting: AnyRecord;
    }>,
  ) => void;
  /**
   * @desc 从小程序成功打开 APP 回调
   * @desc open-type="launchApp" 时有效
   */
  onLaunchapp: (event: BaseEvent) => void;
  /**
   * @desc 获取用户头像回调
   * @desc open-type="chooseAvatar" 时有效
   */
  onChooseavatar: (event: BaseEvent) => void;
  /**
   * @desc 添加群应用回调
   * @desc open-type="addGroupApp" 时有效
   */
  onAddgroupapp: (event: BaseEvent) => void;
  /**
   * @desc 用户编辑并选择收货地址回调
   * @desc open-type="chooseAddress" 时有效
   */
  onChooseaddress: (event: BaseEvent) => void;
  /**
   * @desc 用户选择发票抬头回调
   * @desc open-type="chooseInvoiceTitle" 时有效
   */
  onChooseinvoicetitle: (event: BaseEvent) => void;
  /**
   * @desc 订阅消息授权回调
   * @desc open-type="subscribe" 时有效
   */
  onSubscribe: (event: BaseEvent) => void;
  /**
   * @desc 登录回调
   * @desc open-type="login" 时有效
   */
  onLogin: (event: BaseEvent) => void;
}

/**
 * @desc 按钮
 */
export type Button = Component<Partial<ButtonProps>>;
```

### Checkbox (checkbox)

```typescript
export interface CheckboxProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 标识
   * @desc 选中时触发 checkbox-group 的 change 事件并携带 value */
  value: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 当前是否选中，可用于设置默认选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 的颜色
   */
  color: string;
}

/**
 * @desc 多选项目
 */
export type Checkbox = Component<Partial<CheckboxProps>>;
```

### CheckboxGroup (checkbox-group)

```typescript
export interface CheckboxGroupProps {
  /**
   * @desc 选中项发生改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: CheckboxProps['value'][];
    }>,
  ) => void;
}

/**
 * @desc 多项选择器，内部由多个 checkbox 组成
 */
export type CheckboxGroup = Component<Partial<CheckboxGroupProps>>;
```

### Editor (editor)

```typescript
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
      delta: AnyRecord;
    }>,
  ) => void;
  /**
   * @desc 编辑器失焦时触发
   */
  onBlur: (
    event: CustomEvent<{
      html: string;
      text: string;
      delta: AnyRecord;
    }>,
  ) => void;
  /**
   * @desc 编辑器内容改变时触发
   */
  onInput: (
    event: CustomEvent<{
      html: string;
      text: string;
      delta: AnyRecord;
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
```

### Form (form)

```typescript
export interface FormProps {
  /**
   * @desc 是否返回 formId 用于发送模板消息
   * @desc 默认为 false
   */
  reportSubmit: boolean;
  /**
   * @desc 等待一段时间以确认 formId 是否生效
   * @desc 如果未指定这个参数，formId 有很小的概率无效（网络问题）
   * @desc 指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间
   * @desc 如果无效，将返回 requestFormId:fail 开头的 formId
   * @desc 单位为 ms
   * @desc 默认为 0
   */
  reportSubmitTimeout: number;
  /**
   * @desc 表单提交时触发
   */
  onSubmit: (
    event: CustomEvent<{
      /**
       * @desc 表单内 switch、input、checkbox、slider、radio、picker 对应的键值对
       */
      value: {
        [key: string]:
          | SwitchProps['checked']
          | InputProps['value']
          | CheckboxProps['value']
          | SliderProps['value']
          | RadioProps['value']
          | PickerProps['value'];
      };
      /**
       * @desc report-submit 为 true 时返回，用于发送模板消息
       */
      formId?: string;
    }>,
  ) => void;
  /**
   * @desc 表单重置时触发
   */
  onReset: (event: BaseEvent) => void;
}

/**
 * @desc 表单
 * @desc 将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交
 */
export type Form = Component<Partial<FormProps>>;
```

### Input (input)

```typescript
/**
 * @desc input 类型
 * @desc text 文本输入键盘
 * @desc number 数字输入键盘
 * @desc idcard 身份证输入键盘
 * @desc digit 带小数点的数字键盘
 * @desc tel 电话输入键盘
 * @desc safe-password 密码安全输入键盘
 * @desc nickname 昵称输入键盘
 */
export type InputType =
  | 'text'
  | 'number'
  | 'idcard'
  | 'digit'
  | 'tel'
  | 'safe-password'
  | 'nickname';

/**
 * @desc 文本区域的语义，根据类型自动填充
 * @desc oneTimeCode 一次性验证码
 */
export type InputTextContentType = 'oneTimeCode';

/**
 * @desc 设置键盘右下角按钮的文字
 * @desc send 发送
 * @desc search 搜索
 * @desc next 下一个
 * @desc go 前往
 * @decs done 完成
 * @desc type="text" 时有效
 */
export type InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

export interface InputProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 输入框的初始内容
   */
  value: string;
  /**
   * @desc input 类型
   * @desc text 文本输入键盘
   * @desc number 数字输入键盘
   * @desc idcard 身份证输入键盘
   * @desc digit 带小数点的数字键盘
   * @desc tel 电话输入键盘
   * @desc safe-password 密码安全输入键盘
   * @desc nickname 昵称输入键盘
   * @desc 默认为 text
   */
  type: InputType;
  /**
   * @desc 文本区域的语义，根据类型自动填充
   * @desc oneTimeCode 一次性验证码
   */
  textContentType: InputContentType;
  /**
   * @desc 是否是密码类型
   * @desc 默认为 false
   */
  password: boolean;
  /**
   * @desc 输入框为空时占位符
   */
  placeholder: string;
  /**
   * @desc 指定 placeholder 的样式
   */
  placeholderStyle: string;
  /**
   * @desc 指定 placeholder 的样式类
   * @desc 默认为 input-placeholder
   */
  placeholderClass: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 最大输入长度
   * @desc 设置为 -1 的时候不限制最大长度
   * @desc 默认为 140
   */
  maxlength: number;
  /**
   * @desc 指定光标与键盘的距离
   * @desc 取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   * @desc 单位为 px
   * @desc 默认为 0
   */
  cursorSpacing: number;
  /**
   * @desc 是否获取焦点
   * @desc 默认为 false
   */
  focus: boolean;
  /**
   * @desc 是否自动聚焦，拉起键盘
   * @desc 默认为 false
   */
  autoFocus: boolean;
  /**
   * @desc 设置键盘右下角按钮的文字
   * @desc send 发送
   * @desc search 搜索
   * @desc next 下一个
   * @desc go 前往
   * @decs done 完成
   * @desc type="text" 时有效
   * @desc 默认为 done
   */
  confirmType: InputConfirmType;
  /**
   * @desc 点击键盘右下角按钮时是否保持键盘不收起
   * @desc 默认为 false
   */
  confirmHold: boolean;
  /**
   * @desc 指定 focus 时的光标位置
   */
  cursor: number;
  /**
   * @desc 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
   * @desc 默认为 -1
   */
  selectionStart: number;
  /**
   * @desc 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
   * @desc 默认为 -1
   */
  selectionEnd: number;
  /**
   * @desc 键盘弹起时，是否自动上推页面
   * @desc 默认为 true
   */
  adjustPosition: boolean;
  /**
   * @desc 聚焦时，点击页面的时候是否不收起键盘
   * @desc 默认为 false
   */
  holdKeyboard: boolean;
  /**
   * @desc 键盘收起时，是否自动失焦
   * @desc 默认为 false
   */
  autoBlur: boolean;
  /**
   * @desc 是否忽略组件内对文本合成系统事件的处理
   * @desc 为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
   * @desc 默认为 true
   */
  ignoreCompositionEvent: boolean;
  /**
   * @desc 是否强制 input 处于同层状态，仅在 iOS 生效
   * @desc 默认聚焦时 input 会切到非同层状态
   * @desc 默认为 false
   */
  alwaysEmbed: boolean;
  /**
   * @desc 安全键盘加密公钥的路径，只支持包内路径
   */
  safePasswordCertPath: string;
  /**
   * @desc 安全键盘输入密码长度
   */
  safePasswordLength: number;
  /**
   * @desc 安全键盘加密时间戳
   */
  safePasswordTimeStamp: number;
  /**
   * @desc 安全键盘加密盐值
   */
  safePasswordNonce: string;
  /**
   * @desc 安全键盘计算 hash 盐值，若指定 custom-hash 则无效
   */
  safePasswordSalt: string;
  /**
   * @desc 安全键盘计算 hash 的算法表达式
   */
  safePasswordCustomHash: string;
  /**
   * @desc 当 type 为 number、digit、idcard 时，数字键盘是否随机排列
   * @desc 默认为 false
   */
  randomNumber: boolean;
  /**
   * @desc 是否为受控组件
   * @desc 为 true 时，value 内容会完全受 setData 控制
   * @desc 默认为 false
   */
  controlled: boolean;
  /**
   * @desc 是否强制使用系统键盘和 Web-view 创建的 input 元素
   * @desc 为 true 时，confirm-type、confirm-hold 可能失效
   * @desc 默认为 false
   */
  alwaysSystem: boolean;
  /**
   * @desc 输入时触发
   */
  onInput: (
    event: CustomEvent<{
      value: InputProps['value'];
    }>,
  ) => string | void;
  /**
   * @desc 聚焦时触发
   */
  onFocus: (
    event: CustomEvent<{
      value: InputProps['value'];
      height: number;
    }>,
  ) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (
    event: CustomEvent<{
      value: InputProps['value'];
    }>,
  ) => void;
  /**
   * @desc 点击完成按钮时触发
   */
  onConfirm: (
    event: CustomEvent<{
      value: InputProps['value'];
    }>,
  ) => void;
  /**
   * @desc 键盘高度变化时触发
   */
  onKeyboardheightchange: (
    event: CustomEvent<{
      height: number;
      duration: number;
    }>,
  ) => void;
}

export type Input = Component<Partial<InputProps>>;
```

### Label (label)

```typescript
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
```

### Picker (picker)

```typescript
/**
 * @desc 大屏时 UI 类型，支持 picker、select、auto
 */
export type SelectorPickerSelectorType = 'auto' | 'picker' | 'select';

export interface SelectorPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为普通选择器
   */
  mode?: 'selector';
  /**
   * @desc 需要展示的内容
   * @desc 默认为 []
   */
  range: string[] | AnyRecord[];
  /**
   * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  rangeKey: string;
  /**
   * @desc 当前选择的下标
   * @desc 默认为 0
   */
  value: number;
  /**
   * @desc 大屏时 UI 类型，支持 picker、select、auto
   * @desc 默认在 iPad 以 picker 样式展示
   * @desc 默认在 PC 以 select 样式展示
   * @desc 默认为 auto
   */
  selectorType: SelectorPickerSelectorType;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: SelectorPickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export interface MultiSelectorPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为多列选择器
   */
  mode: 'multiSelector';
  /**
   * @desc 需要展示的内容
   * @desc 默认为 []
   */
  range: string[][] | AnyRecord[][];
  /**
   * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  rangeKey: string;
  /**
   * @desc 当前每列选择的下标
   * @desc 默认为列数个 0 组成的数组
   */
  value: number[];
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: MultiSelectorPickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 某一列 value 改变时触发
   */
  onColumnchange: (
    event: CustomEvent<{
      column: number;
      value: MultiSelectorPickerProps['value'][number];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export interface TimePickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为时间选择器
   */
  mode: 'time';
  /**
   * @desc 选中的日期
   * @desc 格式为 hh:mm
   */
  value: string;
  /**
   * @desc 有效日期范围的开始
   * @desc 格式为 hh:mm
   */
  start: string;
  /**
   * @desc 有效日期范围的结束
   * @desc 格式为 hh:mm
   */
  end: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: TimePickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

/**
 * @desc 选择器的粒度
 * @desc year 年
 * @desc month 月
 * @desc day 日
 */
export type DatePickerFields = 'year' | 'month' | 'day';

export interface DatePickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为日期选择器
   */
  mode: 'date';
  /**
   * @desc 选中的日期
   * @desc 格式为 YYYY-MM-DD
   */
  value: string;
  /**
   * @desc 有效日期范围的开始
   * @desc 格式为 YYYY-MM-DD
   */
  start: string;
  /**
   * @desc 有效日期范围的结束
   * @desc 格式为 YYYY-MM-DD
   */
  end: string;
  /**
   * @desc 选择器的粒度
   * @desc year 年
   * @desc month 月
   * @desc day 日
   * @desc 默认为 day
   */
  fields: DatePickerFields;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: DatePickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export interface RegionPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为省市区选择器
   */
  mode: 'region';
  /**
   * @desc 选中的省市区
   * @desc 默认选中每一列第一个值
   */
  value: string[];
  /**
   * @desc 可为每一列的顶部添加一个自定义的项
   */
  customItem: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: RegionPickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 取消选择时触发
   */
  onCancel: (event: BaseEvent) => void;
}

export type PickerProps =
  | SelectorPickerProps
  | MultiSelectorPickerProps
  | TimePickerProps
  | DatePickerProps
  | RegionPickerProps;

/**
 * @desc 从底部弹起的滚动选择器，通过 mode 来区分
 */
export type Picker = Component<Partial<PickerProps>>;
```

### PickerView (picker-view)

```typescript
export interface PickerViewProps {
  /**
   * @desc 依次表示 picker-view 内 picker-view-column 选择的下标
   * @desc 超出 picker-view-column 可选项长度时，选择最后一项
   */
  value: number[];
  /**
   * @desc 设置选择器中间选中框的样式
   */
  indicatorStyle: string;
  /**
   * @desc 设置选择器中间选中框的类名
   */
  indicatorClass: string;
  /**
   * @desc 设置蒙层的样式
   */
  maskStyle: string;
  /**
   * @desc 设置蒙层的类名
   */
  maskClass: string;
  /**
   * @desc 是否在手指松开时立即触发 change 事件
   * @desc 若不开启则会在滚动动画结束后触发 change 事件
   * @desc 默认为 false
   */
  immediateChange: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: PickerViewProps['value'];
    }>,
  ) => void;
  /**
   * @desc 滚动选择开始时触发
   */
  onPickstart: (event: BaseEvent) => void;
  /**
   * @desc 滚动选择结束时触发
   */
  onPickend: (event: BaseEvent) => void;
}

/**
 * @desc 嵌入页面的滚动选择器，比 picker 更灵活
 */
export type PickerView = Component<Partial<PickerViewProps>>;
```

### PickerViewColumn (picker-view-column)

```typescript
export type PickerViewColumn = Component;
```

### Radio (radio)

```typescript
export interface RadioProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 标识
   * @desc 被选中时，radio-group 的 change 事件会携带该 value
   */
  value: string;
  /**
   * @desc 当前是否选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 颜色
   */
  color: string;
}

/**
 * @desc 单选项目
 */
export type Radio = Component<Partial<RadioProps>>;
```

### RadioGroup (radio-group)

```typescript
/**
 * @desc 单项选择器，内部由多个 radio 组成
 * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
export interface RadioGroupProps {
  /**
   * @desc 选中项发生变化时触发
   */
  onChange: (
    event: CustomEvent<{
      value: RadioProps['value'];
    }>,
  ) => void;
}

/**
 * @desc 单项选择器，内部由多个 radio 组成
 * @desc 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
export type RadioGroup = Component<Partial<RadioGroupProps>>;
```

### Slider (slider)

```typescript
export interface SliderProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 最小值
   * @desc 默认为 0
   */
  min: number;
  /**
   * @desc 最大值
   * @desc 默认为 100
   */
  max: number;
  /**
   * @desc 步长，取值必须大于 0，并且可被 (max - min) 整除
   * @desc 默认为 1
   */
  step: number;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 当前取值
   * @desc 默认为 0
   */
  value: number;
  /**
   * @desc 滑块左侧已选择部分的线条颜色
   * @desc 默认为各平台默认色
   */
  activeColor: string;
  /**
   * @desc 滑块右侧背景条的颜色
   * @desc 默认为 #e9e9e9
   */
  backgroundColor: string;
  /**
   * @desc 滑块的大小
   * @desc 取值范围为 12 - 28
   * @desc 默认为 28
   */
  blockSize: number;
  /**
   * @desc 滑块的颜色
   * @desc 默认为 #fff
   */
  blockColor: string;
  /**
   * @desc 是否显示当前 value
   * @desc 默认为 false
   */
  showValue: boolean;
  /**
   * @desc 完成一次拖动后触发
   */
  onChange: (
    event: CustomEvent<{
      value: SliderProps['value'];
    }>,
  ) => void;
  /**
   * @desc 拖动过程中触发
   */
  onChanging: (
    event: CustomEvent<{
      value: SliderProps['value'];
    }>,
  ) => void;
}

/**
 * @desc 滑动选择器
 */
export type Slider = Component<Partial<SliderProps>>;
```

### Switch (switch)

```typescript
/**
 * @desc 样式
 */
export type SwitchType = 'switch' | 'checkbox';

export interface SwitchProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 是否选中
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 样式
   */
  type: SwitchType;
  /**
   * @desc switch 的颜色
   */
  color: string;
  /**
   * @desc checked 改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: SwitchProps['checked'];
    }>,
  ) => void;
}

/**
 * @desc 开关选择器
 */
export type Switch = Component<Partial<SwitchProps>>;
```

### Textarea (textarea)

```typescript
/**
 * @desc 设置键盘右下角按钮的文字
 * @desc send 发送
 * @desc search 搜索
 * @desc next 下一个
 * @desc go 前往
 * @desc done 完成
 */
export type TextareaConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

export interface TextareaProps {
  /**
   * @desc 输入框的内容
   */
  value: string;
  /**
   * @desc 输入框为空时占位符
   */
  placeholder: string;
  /**
   * @desc 指定 placeholder 的样式
   */
  placeholderStyle: string;
  /**
   * @desc 指定 placeholder 的样式类
   * @desc 默认为 textarea-placeholder
   */
  placeholderClass: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 最大输入长度，设置为 -1 的时候不限制最大长度
   * @desc 默认为 140
   */
  maxlength: number;
  /**
   * @desc 是否获取焦点
   * @desc 默认为 false
   */
  focus: boolean;
  /**
   * @desc 是否自动聚焦，拉起键盘
   * @desc 默认为 false
   */
  autoFocus: boolean;
  /**
   * @desc 是否自动增高
   * @desc 设置时，样式里的 height 不生效
   * @desc 默认为 false
   */
  autoHeight: boolean;
  /**
   * @desc 如果 textarea 在 position: fixed 的区域内，需要指定为 true
   * @desc 默认为 false
   */
  fixed: boolean;
  /**
   * @desc 指定光标与键盘的距离
   * @desc 取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   * @desc 单位为 px
   * @desc 默认为 0
   */
  cursorSpacing: number;
  /**
   * @desc 指定 focus 时的光标位置
   */
  cursor: number;
  /**
   * @desc 设置键盘右下角按钮的文字
   * @desc send 发送
   * @desc search 搜索
   * @desc next 下一个
   * @desc go 前往
   * @desc done 完成
   * @desc 默认为 done
   */
  confirmType: TextareaConfirmType;
  /**
   * @desc 点击键盘右下角按钮时是否保持键盘不收起
   * @desc 默认为 false
   */
  confirmHold: boolean;
  /**
   * @desc 是否显示键盘上方带有”完成“按钮那一栏
   * @desc 默认为 true
   */
  showConfirmBar: boolean;
  /**
   * @desc 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
   * @desc 默认为 -1
   */
  selectionStart: number;
  /**
   * @desc 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
   * @desc 默认为 -1
   */
  selectionEnd: number;
  /**
   * @desc 键盘弹起时，是否自动上推页面
   * @desc 默认为 true
   */
  adjustPosition: boolean;
  /**
   * @desc 是否去掉 iOS 下的默认内边距
   * @desc 默认为 false
   */
  disableDefaultPadding: boolean;
  /**
   * @desc 聚焦时点击页面的时候是否不收起键盘
   * @desc 默认为 false
   */
  holdKeyboard: boolean;
  /**
   * @desc 键盘收起时是否自动失焦
   * @desc 默认为 false
   */
  autoBlur: boolean;
  /**
   * @desc 是否忽略组件内对文本合成系统事件的处理
   * @desc 为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
   * @desc 默认为 true
   */
  ignoreCompositionEvent: boolean;
  /**
   * @desc 聚焦时触发
   */
  onFocus: (
    event: CustomEvent<{
      value: TextareaProps['value'];
      height: number;
    }>,
  ) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (
    event: CustomEvent<{
      value: TextareaProps['value'];
      height: number;
    }>,
  ) => void;
  /**
   * @desc 输入框行数变化时触发
   */
  onLinechange: (
    event: CustomEvent<{
      height: number;
      heightRpx: number;
      lineCount: number;
    }>,
  ) => void;
  /**
   * @desc 输入时触发
   */
  onInput: (
    event: CustomEvent<{
      value: TextareaProps['value'];
      cursor: number;
    }>,
  ) => string | void;
  /**
   * @desc 点击完成按钮时触发
   */
  onConfirm: (
    event: CustomEvent<{
      value: TextareaProps['value'];
    }>,
  ) => void;
  /**
   * @desc 键盘高度变化时触发
   */
  onKeyboardheightchange: (
    event: CustomEvent<{
      height: number;
      duration: number;
    }>,
  ) => void;
}

/**
 * @desc 多行输入框
 */
export type Textarea = Component<Partial<TextareaProps>>;
```

### Navigator (navigator)

```typescript
/**
 * @desc 跳转方式
 * @desc navigate 对应 navigateTo
 * @desc redirect 对应 redirectTo
 * @desc switchTab 对应 switchTab
 * @desc reLaunch 对应 reLaunch
 * @desc navigateBack 对应 navigateBack
 * @desc exit 退出小程序，target="miniProgram"时生效
 */
export type NavigatorOpenType =
  | 'navigate'
  | 'redirect'
  | 'switchTab'
  | 'reLaunch'
  | 'navigateBack'
  | 'exit';

/**
 * @desc 窗口的显示/关闭的动画类型
 * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
 * @desc 默认为 pop-in 显示、pop-out 关闭
 */
export type NavigatorAnimationType =
  | 'slide-in-right'
  | 'slide-out-right'
  | 'slide-in-left'
  | 'slide-out-left'
  | 'slide-in-top'
  | 'slide-out-top'
  | 'slide-in-bottom'
  | 'slide-out-bottom'
  | 'pop-in'
  | 'pop-out'
  | 'fade-in'
  | 'fade-out'
  | 'zoom-in'
  | 'zoom-out'
  | 'zoom-fade-in'
  | 'zoom-fade-out'
  | 'none';

/**
 * @desc 在哪个目标上发生跳转
 * @desc self 当前小程序
 * @desc miniProgram 其它小程序
 */
export type NavigatorTarget = 'self' | 'miniProgram';

/**
 * @desc 要打开的小程序版本
 * @desc 如果当前小程序是正式版，则打开的小程序必定是正式版
 * @desc develop 开发版
 * @desc trial 体验版
 * @desc release 正式版
 * @desc target="miniProgram" 时有效
 * @desc 默认为 release
 */
export type NavigatorVersion = 'develop' | 'trial' | 'release';

export interface NavigatorProps {
  /**
   * @desc 应用内的跳转链接
   * @desc 值为相对路径或绝对路径
   * @desc 例子：../first/first、/pages/first/first
   */
  url: string;
  /**
   * @desc 跳转方式
   * @desc navigate 对应 navigateTo
   * @desc redirect 对应 redirectTo
   * @desc switchTab 对应 switchTab
   * @desc reLaunch 对应 reLaunch
   * @desc navigateBack 对应 navigateBack
   * @desc exit 退出小程序，target="miniProgram"时生效
   * @desc 默认为 navigate
   */
  openType: NavigatorOpenType;
  /**
   * @desc 回退的层数
   * @desc open-type="navigateBack" 时有效
   * @desc 默认为 1
   */
  delta: number;
  /**
   * @desc 窗口的显示/关闭的动画类型
   * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
   * @desc 默认为 pop-in 显示、pop-out 关闭
   */
  animationType: NavigatorAnimationType;
  /**
   * @desc 窗口的显示/关闭动画的持续时间
   * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
   * @desc 默认为 300
   */
  animationDuration: number;
  /**
   * @desc 指定点击时的样式类
   * @desc hover-class="none" 时，没有点击态效果
   * @desc 默认为 navigator-hover
   */
  hoverClass: string;
  /**
   * @desc 指定是否阻止本节点的祖先节点出现点击态
   * @desc 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * @desc 按住后多久出现点击态
   * @desc 单位为 ms
   * @desc 默认为 50
   */
  hoverStartTime: number;
  /**
   * @desc 手指松开后点击态保留时间
   * @desc 单位为 ms
   * @desc 默认为 600
   */
  hoverStayTime: number;
  /**
   * @desc 在哪个目标上发生跳转
   * @desc self 当前小程序
   * @desc miniProgram 其它小程序
   * @desc 默认为 self
   */
  target: NavigatorTarget;
  /**
   * @desc 要打开的小程序 appId
   * @desc target="miniProgram" 时有效
   */
  appId: string;
  /**
   * @desc 打开的页面路径，如果为空则打开首页
   * @desc target="miniProgram" 时有效
   */
  path: string;
  /**
   * @desc 需要传递给目标应用的数据
   * @desc target="miniProgram" 时有效
   */
  extraData: AnyRecord;
  /**
   * @desc 要打开的小程序版本
   * @desc 如果当前小程序是正式版，则打开的小程序必定是正式版
   * @desc develop 开发版
   * @desc trial 体验版
   * @desc release 正式版
   * @desc target="miniProgram" 时有效
   * @desc 默认为 release
   */
  version: NavigatorVersion;
  /**
   * @desc 当传递该参数后，可以不传 app-id 和 path
   * @desc target="miniProgram" 时有效
   */
  shortLink: string;
}

/**
 * @desc 页面跳转
 * @desc 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
 * @desc 目标页面必须在 pages.json 中注册
 */
export type Navigator = Component<Partial<NavigatorProps>>;
```

### Audio (audio)

```typescript
export interface AudioProps {
  /**
   * @desc audio 组件的唯一标识符
   */
  id: string;
  /**
   * @desc 要播放音频的资源地址
   */
  src: string;
  /**
   * @desc 是否循环播放
   * @desc 默认为 false
   */
  loop: boolean;
  /**
   * @desc 是否显示默认控件
   * @desc 默认为 false
   */
  controls: boolean;
  /**
   * @desc 默认控件上的音频封面的图片资源地址
   * @desc 如果 controls 值为 false 则无效
   */
  poster: string;
  /**
   * @desc 默认控件上的音频名字
   * @desc 如果 controls 值为 false 则无效
   * @desc 默认为“未知音频”
   */
  name: string;
  /**
   * @desc 默认控件上的作者名字
   * @desc 如果 controls 值为 false 则无效
   * @desc 默认为“未知作者”
   */
  author: string;
  /**
   * @desc 发生错误时触发
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       * @desc 1 获取资源被用户禁止
       * @desc 2 网络错误
       * @desc 3 解码错误
       * @desc 4 不合适资源
       */
      errMsg: 1 | 2 | 3 | 4;
    }>,
  ) => void;
  /**
   * @desc 开始/继续播放时触发
   */
  onPlay: (event: BaseEvent) => void;
  /**
   * @desc 暂停播放时触发
   */
  onPause: (event: BaseEvent) => void;
  /**
   * @desc 播放进度改变时触发
   */
  onTimeupdate: (
    event: CustomEvent<{
      currentTime: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 播放到末尾时触发
   */
  onEnded: (event: BaseEvent) => void;
}

/**
 * @desc 音频
 */
export type Audio = Component<Partial<AudioProps>>;
```

### Camera (camera)

```typescript
/**
 * @desc 应用模式，不支持动态修改
 * @desc normal 普通
 * @desc scanCode 扫码
 */
export type CameraMode = 'normal' | 'scanCode';

/**
 * @desc 分辨率，不支持动态修改
 * @desc low 低
 * @desc medium 中等
 * @desc high 高
 */
export type CameraResolution = 'low' | 'medium' | 'high';

/**
 * @desc 摄像头朝向
 * @desc front 前置摄像头
 * @desc back 后置摄像头
 */
export type CameraDevicePosition = 'front' | 'back';

/**
 * @desc 闪光灯
 * @desc auto 自动
 * @desc on 打开
 * @desc off 关闭
 */
export type CameraFlash = 'auto' | 'on' | 'off';

/**
 * @desc 期望的相机帧数据尺寸
 * @desc small 小
 * @desc medium 中
 * @desc large 大
 */
export type CameraFrameSize = 'small' | 'medium' | 'large';

export interface CameraProps {
  /**
   * @desc 应用模式，不支持动态修改
   * @desc normal 普通
   * @desc scanCode 扫码
   * @desc 默认为 normal
   */
  mode: CameraMode;
  /**
   * @desc 分辨率，不支持动态修改
   * @desc low 低
   * @desc medium 中等
   * @desc high 高
   * @desc 默认为 medium
   */
  resolution: CameraResolution;
  /**
   * @desc 摄像头朝向
   * @desc front 前置摄像头
   * @desc back 后置摄像头
   * @desc 默认为 back
   */
  devicePosition: CameraDevicePosition;
  /**
   * @desc 闪光灯
   * @desc auto 自动
   * @desc on 打开
   * @desc off 关闭
   * @desc 默认为 auto
   */
  flash: CameraFlash;
  /**
   * @desc 期望的相机帧数据尺寸
   * @desc small 小
   * @desc medium 中
   * @desc large 大
   * @desc 默认为 medium
   */
  frameSize: CameraFrameSize;
  /**
   * @desc 摄像头在非正常终止时触发
   */
  onStop: (event: BaseEvent) => void;
  /**
   * @desc 用户不允许使用摄像头时触发
   */
  onError: (event: BaseEvent) => void;
  /**
   * @desc 相机初始化完成时触发
   */
  onInitdone: (
    event: CustomEvent<{
      maxZoom: number;
    }>,
  ) => void;
  /**
   * @desc 扫码识别成功时触发
   * @desc mode="scanCode" 时有效
   */
  onScancode: (event: BaseEvent) => void;
}

/**
 * @desc 页面内嵌的区域相机组件
 */
export type Camera = Component<Partial<CameraProps>>;
```

### Image (image)

```typescript
/**
 * @desc 图片裁剪、缩放的模式
 * @desc scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
 * @desc aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
 * @desc aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
 * @desc widthFix 宽度不变，高度自动变化，保持原图宽高比不变
 * @desc heightFix 高度不变，宽度自动变化，保持原图宽高比不变
 * @desc top 不缩放图片，只显示图片的顶部区域
 * @desc bottom 不缩放图片，只显示图片的底部区域
 * @desc center 不缩放图片，只显示图片的中间区域
 * @desc left 不缩放图片，只显示图片的左边区域
 * @desc right 不缩放图片，只显示图片的右边区域
 * @desc top left 不缩放图片，只显示图片的左上边区域
 * @desc top right 不缩放图片，只显示图片的右上边区域
 * @desc bottom left 不缩放图片，只显示图片的左下边区域
 * @desc bottom right 不缩放图片，只显示图片的右下边区域
 */
export type ImageMode =
  | 'scaleToFill'
  | 'aspectFit'
  | 'aspectFill'
  | 'widthFix'
  | 'heightFix'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

export interface ImageProps {
  /**
   * @desc 图片资源地址
   */
  src: string;
  /**
   * @desc 图片裁剪、缩放的模式
   * @desc scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
   * @desc aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
   * @desc aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
   * @desc widthFix 宽度不变，高度自动变化，保持原图宽高比不变
   * @desc heightFix 高度不变，宽度自动变化，保持原图宽高比不变
   * @desc top 不缩放图片，只显示图片的顶部区域
   * @desc bottom 不缩放图片，只显示图片的底部区域
   * @desc center 不缩放图片，只显示图片的中间区域
   * @desc left 不缩放图片，只显示图片的左边区域
   * @desc right 不缩放图片，只显示图片的右边区域
   * @desc top left 不缩放图片，只显示图片的左上边区域
   * @desc top right 不缩放图片，只显示图片的右上边区域
   * @desc bottom left 不缩放图片，只显示图片的左下边区域
   * @desc bottom right 不缩放图片，只显示图片的右下边区域
   * @desc 默认为 scaleToFill
   */
  mode: ImageMode;
  /**
   * @desc 是否开启图片懒加载
   * @desc 只对 page 与 scroll-view 下的 image 有效
   * @desc 默认为 false
   */
  lazyLoad: boolean;
  /**
   * @desc 是否使用图片显示动画效果
   * @desc 默认为 true
   */
  fadeShow: boolean;
  /**
   * @desc 在系统不支持 webp 的情况下是否单独启用 webp
   * @desc 默认为 false
   */
  webp: boolean;
  /**
   * @desc 是否开启长按图片显示识别小程序码菜单
   * @desc 默认为 false
   */
  showMenuByLongpress: boolean;
  /**
   * @desc 是否能拖动图片
   * @desc 默认为 true
   */
  draggable: boolean;
  /**
   * @desc 图片加载错误时触发
   */
  onError: (event: BaseEvent) => void;
  /**
   * @desc 图片加载完毕时触发
   */
  onLoad: (
    event: CustomEvent<{
      /**
       * @desc 图片宽度
       * @desc 单位为 px
       */
      width: string;
      /**
       * @desc 图片高度
       * @desc 单位为 px
       */
      height: string;
    }>,
  ) => void;
}

export type Image = Component<Partial<ImageProps>>;
```

### Video (video)

```typescript
/**
 * @desc 弹幕
 */
export interface VideoDanmu {
  /**
   * @desc 弹幕文本
   */
  text: string;
  /**
   * @desc 弹幕颜色
   */
  color: string;
  /**
   * @desc 弹幕出现时间
   * @desc 单位为 s
   */
  time: number;
}

/**
 * @desc 设置全屏时视频的方向，不指定则根据宽高比自动判断
 * @desc 0 正常竖向
 * @desc 90 屏幕逆时针 90 度
 * @desc -90 屏幕顺时针 90 度
 */
export type VideoDirection = 0 | 90 | -90;

/**
 * @desc 当视频大小与 video 容器大小不一致时，视频的表现形式
 * @desc contain 包含
 * @desc fill 填充
 * @desc cover 覆盖
 */
export type VideoObjectFit = 'contain' | 'fill' | 'cover';

/**
 * @desc 播放按钮的位置
 * @desc bottom 控制栏上
 * @desc center 视频中间
 */
export type VideoPlayBtnPosition = 'bottom' | 'center';

/**
 * @desc 解码器选择
 * @desc hardware 硬件解码
 * @desc software 软件解码
 */
export type VideoCodec = 'hardware' | 'software';

/**
 * @desc 移动网络提醒样式
 * @desc 0 不提醒
 * @desc 1 提醒
 */
export type VideoMobilenetHintType = 0 | 1;

/**
 * @desc 播放策略
 * @desc 0 普通模式，适合绝大部分视频播放场景
 * @desc 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
 * @desc 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
 */
export type VideoPlayStrategy = 0 | 1 | 2;

export interface VideoProps {
  /**
   * @desc 要播放视频的资源地址
   */
  src: string;
  /**
   * @desc 是否自动播放
   * @desc 默认为 false
   */
  autoplay: boolean;
  /**
   * @desc 是否循环播放
   * @desc 默认为 false
   */
  loop: boolean;
  /**
   * @desc 是否静音播放
   * @desc 默认为 false
   */
  muted: boolean;
  /**
   * @desc 指定视频初始播放位置
   * @desc 单位为 s
   */
  initialTime: number;
  /**
   * @desc 指定视频长度
   * @desc 单位为 s
   */
  duration: number;
  /**
   * @desc 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   * @desc 默认为 true
   */
  controls: boolean;
  /**
   * @desc 弹幕列表
   */
  danmuList: VideoDanmu[];
  /**
   * @desc 是否显示弹幕按钮，不支持动态修改
   * @desc 默认为 false
   */
  danmuBtn: boolean;
  /**
   * @desc 是否展示弹幕，不支持动态修改
   * @desc 默认为 false
   */
  enableDanmu: boolean;
  /**
   * @desc 在非全屏模式下，是否开启亮度与音量调节手势
   * @desc 默认为 false
   */
  pageGesture: boolean;
  /**
   * @desc 设置全屏时视频的方向，不指定则根据宽高比自动判断
   * @desc 0 正常竖向
   * @desc 90 屏幕逆时针 90 度
   * @desc -90 屏幕顺时针 90 度
   * @desc 默认根据宽高比自动判断
   */
  direction: VideoDirection;
  /**
   * @desc 若不设置，宽度大于 240 时才会显示
   * @desc 默认为 true
   */
  showProgress: boolean;
  /**
   * @desc 是否显示全屏按钮
   * @desc 默认为 true
   */
  showFullscreenBtn: boolean;
  /**
   * @desc 是否显示视频底部控制栏的播放按钮
   * @desc 默认为 true
   */
  showPlayBtn: boolean;
  /**
   * @desc 是否显示视频中间的播放按钮
   * @desc 默认为 true
   */
  showCenterPlayBtn: boolean;
  /**
   * @desc 是否显示 loading 控件
   * @desc 默认为 true
   */
  showLoading: boolean;
  /**
   * @desc 是否开启控制进度的手势
   * @desc 默认为 true
   */
  enableProgressGesture: boolean;
  /**
   * @desc 当视频大小与 video 容器大小不一致时，视频的表现形式
   * @desc contain 包含
   * @desc fill 填充
   * @desc cover 覆盖
   * @desc 默认为 contain
   */
  objectFit: VideoObjectFit;
  /**
   * @desc 视频封面的图片网络资源地址
   * @desc 如果 controls 值为 false 则无效
   */
  poster: string;
  /**
   * @desc 是否显示静音按钮
   * @decs 默认为 false
   */
  showMuteBtn: boolean;
  /**
   * @desc 视频的标题，全屏时在顶部展示
   */
  title: string;
  /**
   * @desc 播放按钮的位置
   * @desc bottom 控制栏上
   * @desc center 视频中间
   * @desc 默认为 bottom
   */
  playBtnPosition: VideoPlayBtnPosition;
  /**
   * @desc 移动网络提醒样式
   * @desc 0 不提醒
   * @desc 1 提醒
   * @desc 默认为 1
   */
  mobilenetHintType: VideoMobilenetHintType;
  /**
   * @desc 是否开启播放手势，即双击切换播放、暂停
   * @desc 默认为 false
   */
  enablePlayGesture: boolean;
  /**
   * @desc 当跳转到其它小程序页面时，是否自动暂停本页面的视频
   * @desc 默认为 true
   */
  autoPauseIfNavigate: boolean;
  /**
   * @desc 当跳转到其它微信原生页面时，是否自动暂停本页面的视频
   * @desc 默认为 true
   */
  autoPauseIfOpenNative: boolean;
  /**
   * @desc 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）
   * @desc 默认为 false
   */
  vslideGesture: boolean;
  /**
   * @desc 在全屏模式下，是否开启亮度与音量调节手势
   * @desc 默认为 true
   */
  vslideGestureInFullscreen: boolean;
  /**
   * @desc 视频前贴广告单元ID
   */
  adUnitId: string;
  /**
   * @desc 用于给搜索等场景作为视频封面展示
   * @desc 建议使用无播放 icon 的视频封面图
   * @desc 只支持网络地址
   */
  posterForCrawler: string;
  /**
   * @desc 解码器选择
   * @desc hardware 硬件解码
   * @desc software 软件解码
   * @desc 默认为 hardware
   */
  codec: VideoCodec;
  /**
   * @desc 是否对 http、https 视频源开启本地缓存
   * @desc 默认为 true
   */
  httpCache: boolean;
  /**
   * @desc 播放策略
   * @desc 0 普通模式，适合绝大部分视频播放场景
   * @desc 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
   * @desc 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
   * @desc 默认为 0
   */
  playStrategy: VideoPlayStrategy;
  /**
   * @desc HTTP 请求 Header
   */
  header: AnyRecord;
  /**
   * @desc 开始/继续播放时触发
   */
  onPlay: (event: BaseEvent) => void;
  /**
   * @desc 暂停播放时触发
   */
  onPause: (event: BaseEvent) => void;
  /**
   * @desc 播放到末尾时触发
   */
  onEnded: (event: BaseEvent) => void;
  /**
   * @desc 播放进度变化时触发
   * @desc 250ms 一次
   */
  onTimeupdate: (
    event: CustomEvent<{
      currentTime: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 视频进入和退出全屏时触发
   */
  onFullscreenchange: (
    event: CustomEvent<{
      fullScreen: boolean;
      direction: VideoProps['direction'];
    }>,
  ) => void;
  /**
   * @desc 视频缓冲时触发
   */
  onWaiting: (event: BaseEvent) => void;
  /**
   * @desc 视频播放出错时触发
   */
  onError: (event: BaseEvent) => void;
  /**
   * @desc 加载进度变化时触发
   */
  onProgress: (
    event: CustomEvent<{
      buffered: number;
    }>,
  ) => void;
  /**
   * @desc 视频资源开始加载时触发
   */
  onLoadeddata: (event: BaseEvent) => void;
  /**
   * @desc 开始加载数据时触发
   */
  onLoadstart: (event: BaseEvent) => void;
  /**
   * @desc 拖动进度条结束时触发
   */
  onSeeked: (event: BaseEvent) => void;
  /**
   * @desc 拖动进度条时触发
   */
  onSeeking: (event: BaseEvent) => void;
  /**
   * @desc 视频元数据加载完成时触发
   */
  onLoadedmetadata: (
    event: CustomEvent<{
      width: number;
      height: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 视频播放全屏播放点击时触发
   */
  onFullscreenclick: (
    event: CustomEvent<{
      screenX: number;
      screenY: number;
      screenWidth: number;
      screenHeight: number;
    }>,
  ) => void;
  /**
   * @desc 切换 controls 显示隐藏时触发
   */
  onControlstoggle: (
    event: CustomEvent<{
      show: boolean;
    }>,
  ) => void;
}

/**
 * @desc 视频播放组件
 * @desc 默认宽度 300px、高度 225px，可通过 css 设置宽高
 */
export type Video = Component<Partial<VideoProps>>;
```

### LivePlayer (live-player)

```typescript
/**
 * @desc 实时模式
 * @dec live 直播
 * @desc RTC 实时通话，该模式时延更低
 */
export type LivePlayerMode = 'live' | 'RTC';

/**
 * @desc 画面方向
 * @desc vertical 纵向
 * @desc horizontal 横向
 */
export type LivePlayerOrientation = 'vertical' | 'horizontal';

/**
 * @desc 填充模式
 * @desc contain 图像长边填满屏幕，短边区域会被填充⿊⾊
 * @desc fillCrop 图像铺满屏幕，超出显示区域的部分将被截掉
 */
export type LivePlayerObjectFit = 'contain' | 'fillCrop';

/**
 * @desc 声音输出方式
 * @desc speaker 扬声器
 * @desc ear 听筒
 * @desc 默认为 speaker
 */
export type LivePlayerSoundMode = 'speaker' | 'ear';

/**
 * @desc 设置小窗模式
 * @desc push 路由 push 时触发小窗
 * @desc pop 路由 pop 时触发小窗
 */
export type LivePlayerPictureInPictureMode = 'push' | 'pop';

/**
 * @desc 状态码
 * @desc 2001 已经连接服务器
 * @desc 2002 已经连接服务器，开始拉流
 * @desc 2003 网络接收到首个视频数据包 IDR
 * @desc 2004 视频播放开始
 * @desc 2005 视频播放进度
 * @desc 2006 视频播放结束
 * @desc 2007 视频播放 Loading
 * @desc 2008 解码器启动
 * @desc 2009 视频分辨率改变
 * @desc -2301 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
 * @desc -2302 获取加速拉流地址失败
 * @desc 2101 当前视频帧解码失败
 * @desc 2102 当前音频帧解码失败
 * @desc 2103 网络断连, 已启动自动重连
 * @desc 2104 网络来包不稳，可能是下行带宽不足，或由于主播端出流不均匀
 * @desc 2105 当前视频播放出现卡顿
 * @desc 2106 硬解启动失败，采用软解
 * @desc 2107 当前视频帧不连续，可能丢帧
 * @desc 2108 当前流硬解第一个 I 帧失败，SDK 自动切软解
 * @desc 3001 RTMP - DNS解析失败
 * @desc 3002 RTMP 服务器连接失败
 * @desc 3003 RTMP 服务器握手失败
 * @desc 3005 RTMP 读/写失败
 */
export type LivePlayerCode =
  | 2001
  | 2002
  | 2003
  | 2004
  | 2005
  | 2006
  | 2007
  | 2008
  | 2009
  | -2301
  | -2302
  | 2101
  | 2102
  | 2103
  | 2104
  | 2105
  | 2106
  | 2107
  | 2108
  | 3001
  | 3002
  | 3003
  | 3005;

/**
 * @desc 网络状态
 */
export interface LivePlayerInfo {
  /**
   * @desc 当前视频编/码器输出的比特率
   * @desc 单位为 kbps
   */
  videoBitrate?: number;
  /**
   * @desc 当前音频编/码器输出的比特率
   * @desc 单位为 kbps
   */
  audioBitrate?: number;
  /**
   * @desc 当前视频帧率
   */
  videoFPS?: number;
  /**
   * @desc 当前视频 GOP，也就是每两个关键帧 I 帧间隔时长
   * @desc 单位为 s
   */
  videoGOP?: number;
  /**
   * @desc 当前的发送/接收速度
   */
  netSpeed?: number;
  /**
   * @desc 网络抖动情况，抖动越大，网络越不稳定
   */
  netJitter?: number;
  /**
   * @desc 网络质量
   */
  netQualityLevel?: number;
  /**
   * @desc 视频画面的宽度
   */
  videoWidth?: number;
  /**
   * @desc 视频画面的高度
   */
  videoHeight?: number;
  /**
   * @desc 缓冲的视频总时长
   * @desc 单位为 ms
   */
  videoCache?: number;
  /**
   * @desc 缓冲的音频总时长
   * @desc 单位为 ms
   */
  audioCache?: number;
  /**
   * @desc 解码器中缓存的视频帧数 (Android 端硬解码时存在）
   */
  vDecCacheSize?: number;
  /**
   * @desc 缓冲的总视频帧数，该数值越大，播放延迟越高
   */
  vSumCacheSize?: number;
  /**
   * @desc 音画同步错位时间（播放），此数值越小，音画同步越好
   * @desc 单位为 ms
   */
  avPlayInterval?: number;
  /**
   * @desc 音画同步错位时间（网络），此数值越小，音画同步越好
   * @decs 单位为 ms
   */
  avRecvInterval?: number;
  /**
   * @desc 音频缓冲时长阈值，缓冲超过该阈值后，播放器会开始调控延时
   */
  audioCacheThreshold?: number;
}

export interface LivePlayerProps {
  /**
   * @desc 唯一标志符
   */
  id: string;
  /**
   * @desc 音视频地址
   */
  src: string;
  /**
   * @desc 实时模式
   * @dec live 直播
   * @desc RTC 实时通话，该模式时延更低
   * @desc 默认为 live
   */
  mode: LivePlayerMode;
  /**
   * @desc 是否自动播放
   * @desc 默认为 false
   */
  autoplay: boolean;
  /**
   * @desc 是否静音
   * @desc 默认为 false
   */
  muted: boolean;
  /**
   * @desc 画面方向
   * @desc vertical 纵向
   * @desc horizontal 横向
   * @desc 默认为 vertical
   */
  orientation: LivePlayerOrientation;
  /**
   * @desc 填充模式
   * @desc contain 图像长边填满屏幕，短边区域会被填充⿊⾊
   * @desc fillCrop 图像铺满屏幕，超出显示区域的部分将被截掉
   * @desc 默认为 contain
   */
  objectFit: LivePlayerObjectFit;
  /**
   * @desc 进入后台时是否静音
   * @desc 默认为 false
   */
  backgroundMute: boolean;
  /**
   * @desc 声音输出方式
   * @desc speaker 扬声器
   * @desc ear 听筒
   * @desc 默认为 speaker
   */
  soundMode: LivePlayerSoundMode;
  /**
   * @desc 最小缓冲区
   * @desc 单位为 s
   * @desc 默认为 1
   */
  minCache: number;
  /**
   * @desc 最大缓冲区
   * @desc 单位为 s
   * @desc 默认为 3
   */
  maxCache: number;
  /**
   * @desc 设置小窗模式，空字符串或通过数组形式设置多种模式
   */
  pictureInPictureMode: LivePlayerPictureInPictureMode | LivePlayerPictureInPictureMode[];
  /**
   * @desc 播放状态变化时触发
   */
  onStatechange: (
    event: CustomEvent<{
      /**
       * @desc 状态码
       * @desc 2001 已经连接服务器
       * @desc 2002 已经连接服务器，开始拉流
       * @desc 2003 网络接收到首个视频数据包 IDR
       * @desc 2004 视频播放开始
       * @desc 2005 视频播放进度
       * @desc 2006 视频播放结束
       * @desc 2007 视频播放 Loading
       * @desc 2008 解码器启动
       * @desc 2009 视频分辨率改变
       * @desc -2301 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
       * @desc -2302 获取加速拉流地址失败
       * @desc 2101 当前视频帧解码失败
       * @desc 2102 当前音频帧解码失败
       * @desc 2103 网络断连, 已启动自动重连
       * @desc 2104 网络来包不稳，可能是下行带宽不足，或由于主播端出流不均匀
       * @desc 2105 当前视频播放出现卡顿
       * @desc 2106 硬解启动失败，采用软解
       * @desc 2107 当前视频帧不连续，可能丢帧
       * @desc 2108 当前流硬解第一个 I 帧失败，SDK 自动切软解
       * @desc 3001 RTMP - DNS解析失败
       * @desc 3002 RTMP 服务器连接失败
       * @desc 3003 RTMP 服务器握手失败
       * @desc 3005 RTMP 读/写失败
       */
      code: LivePlayerCode;
    }>,
  ) => void;
  /**
   * @desc 网络状态变化时触发
   */
  onNetstatus: (
    event: CustomEvent<{
      /**
       * @desc 网络状态
       */
      info: LivePlayerInfo;
    }>,
  ) => void;
  /**
   * @desc 全屏变化时触发
   */
  onFullscreenchange: (
    event: CustomEvent<{
      direction: LivePlayerOrientation;
      fullScreen: boolean;
    }>,
  ) => void;
  /**
   * @desc 播放音量变化时触发
   */
  onAudiovolumenotify: (event: BaseEvent) => void;
  /**
   * @desc 播放器进入小窗时触发
   */
  onEnterpictureinpicture: (event: BaseEvent) => void;
  /**
   * @desc 播放器退出小窗时触发
   */
  onLeavepictureinpicture: (event: BaseEvent) => void;
}

/**
 * @desc 实时音视频播放（直播拉流）
 */
export type LivePlayer = Component<Partial<LivePlayerProps>>;
```

### LivePusher (live-pusher)

```typescript
/**
 * @desc 推流视频模式
 * @desc SD 标清
 * @desc HD 高清
 * @desc FHD 超清
 */
export type LivePusherMode = 'SD' | 'HD' | 'FHD';

/**
 * @desc 画面方向
 * @desc vertical 纵向
 * @desc horizontal 横向
 */
export type LivePusherOrientation = 'vertical' | 'horizontal';

/**
 * @desc 音质
 * @desc high 高音质 48KHz
 * @desc low 低音质 16KHz
 */
export type LivePusherAudioQuality = 'high' | 'low';

/**
 * @desc 使用的摄像头
 * @desc front 前置摄像头
 * @desc back 后置摄像头
 */
export type LivePusherDevicePosition = 'front' | 'back';

/**
 * @desc 控制本地预览画面是否镜像
 * @desc auto 前置摄像头镜像，后置摄像头不镜像
 * @desc enable 前后置摄像头均镜像
 * @desc disable 前后置摄像头均不镜像
 */
export type LivePusherLocalMirror = 'auto' | 'enable' | 'disable';

/**
 * @desc 音频混响类型
 * @desc 0 关闭
 * @desc 1 KTV
 * @desc 2 小房间
 * @desc 3 大会堂
 * @desc 4 低沉
 * @desc 5 洪亮
 * @desc 6 金属声
 * @desc 7 磁性
 */
export type LivePusherAudioReverbType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * @desc 音量类型
 * @desc 自动
 * @desc media 媒体音量
 * @desc voicecall 通话音量
 */
export type LivePusherAudioVolumeType = 'auto' | 'media' | 'voicecall';

/**
 * @desc 状态码
 * @desc 1001 已经连接推流服务器
 * @desc 1002 已经与服务器握手完毕，开始推流
 * @desc 1003 打开摄像头成功
 * @desc 1004 录屏启动成功
 * @desc 1005 推流动态调整分辨率
 * @desc 1006 推流动态调整码率
 * @desc 1007 首帧画面采集完成
 * @desc 1008 编码器启动
 * @desc -1301 打开摄像头失败
 * @desc -1302 打开麦克风失败
 * @desc -1303 视频编码失败
 * @desc -1304 音频编码失败
 * @desc -1305 不支持的视频分辨率
 * @desc -1306 不支持的音频采样率
 * @desc -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
 * @desc -1308 开始录屏失败，可能是被用户拒绝
 * @desc -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
 * @desc -1310 录屏被其他应用打断了
 * @desc -1311 Android Mic 打开成功，但是录不到音频数据
 * @desc -1312 录屏动态切横竖屏失败
 * @desc 1101 网络状况不佳：上行带宽太小，上传数据受阻
 * @desc 1102 网络断连, 已启动自动重连
 * @desc 1103 硬编码启动失败,采用软编码
 * @desc 1104 视频编码失败
 * @desc 1105 新美颜软编码启动失败，采用老的软编码
 * @desc 1106 新美颜软编码启动失败，采用老的软编码
 * @desc 3001 RTMP -DNS 解析失败
 * @desc 3002 RTMP 服务器连接失败
 * @desc 3003 RTMP 服务器握手失败
 * @desc 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
 * @desc 3005 RTMP 读/写失败
 */
export type LivePusherCode =
  | 1001
  | 1002
  | 1003
  | 1004
  | 1005
  | 1006
  | 1007
  | 1008
  | -1301
  | -1302
  | -1303
  | -1304
  | -1305
  | -1306
  | -1307
  | -1308
  | -1309
  | -1310
  | -1311
  | -1312
  | 1101
  | 1102
  | 1103
  | 1104
  | 1105
  | 1106
  | 3001
  | 3002
  | 3003
  | 3004
  | 3005;

/**
 * @desc 网络状态
 */
export interface LivePusherInfo {
  /**
   * @desc 状态码
   * @desc 1001 已经连接推流服务器
   * @desc 1002 已经与服务器握手完毕，开始推流
   * @desc 1003 打开摄像头成功
   * @desc 1004 录屏启动成功
   * @desc 1005 推流动态调整分辨率
   * @desc 1006 推流动态调整码率
   * @desc 1007 首帧画面采集完成
   * @desc 1008 编码器启动
   * @desc -1301 打开摄像头失败
   * @desc -1302 打开麦克风失败
   * @desc -1303 视频编码失败
   * @desc -1304 音频编码失败
   * @desc -1305 不支持的视频分辨率
   * @desc -1306 不支持的音频采样率
   * @desc -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
   * @desc -1308 开始录屏失败，可能是被用户拒绝
   * @desc -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
   * @desc -1310 录屏被其他应用打断了
   * @desc -1311 Android Mic 打开成功，但是录不到音频数据
   * @desc -1312 录屏动态切横竖屏失败
   * @desc 1101 网络状况不佳：上行带宽太小，上传数据受阻
   * @desc 1102 网络断连, 已启动自动重连
   * @desc 1103 硬编码启动失败,采用软编码
   * @desc 1104 视频编码失败
   * @desc 1105 新美颜软编码启动失败，采用老的软编码
   * @desc 1106 新美颜软编码启动失败，采用老的软编码
   * @desc 3001 RTMP -DNS 解析失败
   * @desc 3002 RTMP 服务器连接失败
   * @desc 3003 RTMP 服务器握手失败
   * @desc 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
   * @desc 3005 RTMP 读/写失败
   */
  code?: LivePusherCode;
  /**
   * @desc 具体的网络状态信息
   */
  message?: string;
  /**
   * @desc 当前视频编/码器输出的比特率
   * @desc 单位为 kbps
   */
  videoBitrate?: number;
  /**
   * @desc 当前音频编/码器输出的比特率
   * @desc 单位为 kbps
   */
  audioBitrate?: number;
  /**
   * @desc 当前视频帧率
   */
  videoFPS?: number;
  /**
   * @desc 当前视频 GOP，也就是每两个关键帧 I 帧间隔时长
   * @desc 单位为 s
   */
  videoGOP?: number;
  /**
   * @desc 当前的发送/接收速度
   */
  netSpeed?: number;
  /**
   * @desc 网络抖动情况，抖动越大，网络越不稳定
   */
  netJitter?: number;
  /**
   * @desc 网络质量
   */
  netQualityLevel?: number;
  /**
   * @desc 视频画面的宽度
   */
  videoWidth?: number;
  /**
   * @desc 视频画面的高度
   */
  videoHeight?: number;
  /**
   * @desc 缓冲的视频总时长
   * @desc 单位为 ms
   */
  videoCache?: number;
  /**
   * @desc 缓冲的音频总时长
   * @desc 单位为 ms
   */
  audioCache?: number;
}

/**
 * @desc 错误状态码
 * @desc 10001 用户禁止使用摄像头
 * @desc 10002 用户禁止使用录音
 * @desc 10003 背景音资源（BGM）加载失败
 * @desc 10004 等待画面资源（waiting-image）加载失败
 */
export type LiverPusherErrCode = 10001 | 10002 | 10003 | 10004;

export interface LivePusherProps {
  /**
   * @desc 推流地址，支持 RTMP 协议
   */
  url: string;
  /**
   * @desc 推流视频模式
   * @desc SD 标清
   * @desc HD 高清
   * @desc FHD 超清
   * @desc 默认为 SD
   */
  mode: LivePusherMode;
  /**
   * @desc 是否自动推流
   * @desc 默认为 false
   */
  autopush: boolean;
  /**
   * @desc 视频宽高比例
   * @desc 默认为 3:2
   */
  aspect: number;
  /**
   * @desc 是否静音
   * @desc 默认为 false
   */
  muted: boolean;
  /**
   * @desc 是否开启摄像头
   * @desc 默认为 true
   */
  enableCamera: boolean;
  /**
   * @desc 自动聚焦
   * @desc 默认为 true
   */
  autoFocus: boolean;
  /**
   * @desc 美颜
   * @desc 取值范围为 0 - 9
   * @desc 默认为 0
   */
  beauty: number;
  /**
   * @desc 美白
   * @desc 取值范围为 0 - 9
   * @desc 默认为 0
   */
  whiteness: number;
  /**
   * @desc 画面方向
   * @desc vertical 纵向
   * @desc horizontal 横向
   * @desc 默认为 vertical
   */
  orientation: LivePusherOrientation;
  /**
   * @desc 最小码率
   * @desc 默认为 200
   */
  minBitrate: number;
  /**
   * @desc 最大码率
   * @desc 默认为 1000
   */
  maxBitrate: number;
  /**
   * @desc 音质
   * @desc high 高音质 48KHz
   * @desc low 低音质 16KHz
   * @desc 默认为 high
   */
  audioQuality: LivePusherAudioQuality;
  /**
   * @desc 进入后台时推流的等待画面
   */
  waitingImage: string;
  /**
   * @desc 等待画面资源的 MD5 值
   */
  waitingImageMd5: string;
  /**
   * @desc 是否调整焦距
   * @desc 默认为 false
   */
  zoom: boolean;
  /**
   * @desc 使用的摄像头
   * @desc front 前置摄像头
   * @desc back 后置摄像头
   * @desc 默认为 front
   */
  devicePosition: LivePusherDevicePosition;
  /**
   * @desc 进入后台时是否静音
   * @desc 默认为 false
   */
  backgroundMute: boolean;
  /**
   * @desc 设置推流画面是否镜像，产生的效果在 live-player 呈现
   * @desc 默认为 false
   */
  remoteMirror: boolean;
  /**
   * @desc 控制本地预览画面是否镜像
   * @desc auto 前置摄像头镜像，后置摄像头不镜像
   * @desc enable 前后置摄像头均镜像
   * @desc disable 前后置摄像头均不镜像
   * @desc 默认为 auto
   */
  localMirror: LivePusherLocalMirror;
  /**
   * @desc 音频混响类型
   * @desc 0 关闭
   * @desc 1 KTV
   * @desc 2 小房间
   * @desc 3 大会堂
   * @desc 4 低沉
   * @desc 5 洪亮
   * @desc 6 金属声
   * @desc 7 磁性
   * @desc 默认为 0
   */
  audioReverbType: LivePusherAudioReverbType;
  /**
   * @desc 是否开启麦克风
   * @desc 默认为 true
   */
  enableMic: boolean;
  /**
   * @desc 是否开启音频自动增益
   * @desc 默认为 false
   */
  enableAgc: boolean;
  /**
   * @desc 是否开启音频噪声抑制
   * @desc 默认为 false
   */
  enableAns: boolean;
  /**
   * @desc 音量类型
   * @desc 自动
   * @desc media 媒体音量
   * @desc voicecall 通话音量
   * @desc 默认为 auto
   */
  audioVolumeType: LivePusherAudioVolumeType;
  /**
   * @desc 播放状态变化时触发
   */
  onStatechange: (
    event: CustomEvent<{
      /**
       * @desc 状态码
       * @desc 1001 已经连接推流服务器
       * @desc 1002 已经与服务器握手完毕，开始推流
       * @desc 1003 打开摄像头成功
       * @desc 1004 录屏启动成功
       * @desc 1005 推流动态调整分辨率
       * @desc 1006 推流动态调整码率
       * @desc 1007 首帧画面采集完成
       * @desc 1008 编码器启动
       * @desc -1301 打开摄像头失败
       * @desc -1302 打开麦克风失败
       * @desc -1303 视频编码失败
       * @desc -1304 音频编码失败
       * @desc -1305 不支持的视频分辨率
       * @desc -1306 不支持的音频采样率
       * @desc -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
       * @desc -1308 开始录屏失败，可能是被用户拒绝
       * @desc -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
       * @desc -1310 录屏被其他应用打断了
       * @desc -1311 Android Mic 打开成功，但是录不到音频数据
       * @desc -1312 录屏动态切横竖屏失败
       * @desc 1101 网络状况不佳：上行带宽太小，上传数据受阻
       * @desc 1102 网络断连, 已启动自动重连
       * @desc 1103 硬编码启动失败,采用软编码
       * @desc 1104 视频编码失败
       * @desc 1105 新美颜软编码启动失败，采用老的软编码
       * @desc 1106 新美颜软编码启动失败，采用老的软编码
       * @desc 3001 RTMP -DNS 解析失败
       * @desc 3002 RTMP 服务器连接失败
       * @desc 3003 RTMP 服务器握手失败
       * @desc 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
       * @desc 3005 RTMP 读/写失败
       */
      code: LivePusherCode;
    }>,
  ) => void;
  /**
   * @desc 网络状态变化时触发
   */
  onNetstatus: (
    event: CustomEvent<{
      /**
       * @desc 网络状态
       */
      info: LivePusherInfo;
    }>,
  ) => void;
  /**
   * @desc 渲染错误时触发
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误状态码
       * @desc 10001 用户禁止使用摄像头
       * @desc 10002 用户禁止使用录音
       * @desc 10003 背景音资源（BGM）加载失败
       * @desc 10004 等待画面资源（waiting-image）加载失败
       */
      errCode: LiverPusherErrCode;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 背景音开始播放时触发
   */
  onBgmstart: (event: BaseEvent) => void;
  /**
   * @desc 背景音进度变化时触发
   */
  onBgmprogress: (
    event: CustomEvent<{
      progress: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 背景音播放完成时触发
   */
  onBgmcomplete: (event: BaseEvent) => void;
}

/**
 * @desc 实时音视频录制（直播推流）
 */
export type LivePusher = Component<Partial<LivePusherProps>>;
```

### Map (map)

```typescript
/**
 * @desc 显示方式
 */
export type MapDisplay = 'BYCLICK' | 'ALWAYS';

/**
 * @desc 文本对齐方式
 * @desc left 左对齐
 * @desc right 右对齐
 * @desc center 居中对齐
 */
export type MapTextAlign = 'left' | 'right' | 'center';

/**
 * @desc 气泡
 */
export interface MapCallout {
  /**
   * @desc 文本
   */
  content: string;
  /**
   * @desc 文本颜色
   */
  color: string;
  /**
   * @desc 文字大小
   */
  fontSize: number;
  /**
   * @desc 边框圆角
   */
  borderRadius: number;
  /**
   * @desc 边框宽度
   */
  borderWidth: number;
  /**
   * @desc 边框颜色
   */
  borderColor: string;
  /**
   * @desc 背景色
   */
  bgColor: string;
  /**
   * @desc 文本边缘留白
   */
  padding: number;
  /**
   * @desc 显示方式
   */
  display: MapDisplay;
  /**
   * @desc 文本对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc center 居中对齐
   */
  textAlign: MapTextAlign;
}

/**
 * @desc 自定义气泡
 */
export interface MapCustomCallout {
  /**
   * @desc 显示方式
   */
  display: MapDisplay;
  /**
   * @desc 横向偏移量，向右为正数
   */
  anchorX: number;
  /**
   * @desc 纵向偏移量，向下为正数
   */
  anchorY: number;
}

/**
 * @desc 标签
 */
export interface MapLabel {
  /**
   * @desc 文本
   */
  content: string;
  /**
   * @desc 文本颜色
   */
  color: string;
  /**
   * @desc 文字大小
   */
  fontSize: number;
  /**
   * @desc 横坐标，原点是 marker 对应的经纬度
   */
  x: number;
  /**
   * @desc 纵坐标，原点是 marker 对应的经纬度
   */
  y: number;
  /**
   * @desc 横向偏移量，向右为正数
   */
  anchorX: number;
  /**
   * @desc 纵向偏移量，向下为正数
   */
  anchorY: number;
  /**
   * @desc 边框圆角
   */
  borderRadius: number;
  /**
   * @desc 边框宽度
   */
  borderWidth: number;
  /**
   * @desc 边框颜色
   */
  borderColor: string;
  /**
   * @desc 背景色
   */
  bgColor: string;
  /**
   * @desc 文本边缘留白
   */
  padding: number;
  /**
   * @desc 显示方式
   */
  display: MapDisplay;
  /**
   * @desc 文本对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc center 居中对齐
   */
  textAlign: MapTextAlign;
  /**
   * @desc 自定义气泡
   */
  customCallout: MapCustomCallout;
  /**
   * @desc 无障碍访问，元素的额外描述
   */
  ariaLabel: string;
  /**
   * @desc 是否参与点聚合
   * @desc 默认为 false
   */
  joinCluster: boolean;
}

/**
 * @desc 锚点
 */
export interface MapAnchor {
  /**
   * @desc 横向
   * @desc 取值范围为 0 - 1
   */
  x: number;
  /**
   * @desc 纵向
   * @desc 取值范围为 0 - 1
   */
  y: number;
}

/**
 * @desc 经纬度点
 */
export interface MapPoint {
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
}

/**
 * @desc 压盖关系
 * @desc abovelabels 显示在所有 POI 之上
 * @desc abovebuildings 显示在楼块之上 POI 之下
 * @desc aboveroads 显示在道路之上楼块之下
 */
export type MapLevel = 'abovelabels' | 'abovebuildings' | 'aboveroads';

/**
 * @desc 主题
 * @desc 只在初始化时有效，不能动态变更
 * @desc 仅 Android 支持
 * @desc normal 正常
 * @desc satellite 卫星图
 */
export type MapTheme = 'normal' | 'satellite';

/**
 * @desc 标记点
 */
export interface MapMarker {
  /**
   * @desc 标记点 ID
   * @desc marker 点击事件回调中会返回
   * @desc 最大限制 9 位数
   */
  id: number;
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
  /**
   * @desc 标注点名
   * @desc 点击时显示，callout 存在时将被忽略
   */
  title: string;
  /**
   * @desc 图标路径
   * @desc 项目目录下的图片路径，支持相对路径和临时路径
   */
  iconPath: string;
  /**
   * @desc 顺时针旋转角度
   * @desc 取值范围为 0 - 360
   * @desc 默认为 0
   */
  rotate: number;
  /**
   * @desc 透明度
   * @desc 取值范围为 0 - 1 完全透明 - 不透明
   * @desc 默认为 1
   */
  alpha: number;
  /**
   * @desc 图标宽度
   * @desc 默认为实际宽度
   */
  width: number;
  /**
   * @desc 图标高度
   * @desc 默认为实际高度
   */
  height: number;
  /**
   * @desc 自定义标记点上方的气泡窗口
   */
  callout: MapCallout;
  /**
   * @desc 为标记点旁边增加标签
   */
  label: MapLabel;
  /**
   * @desc 经纬度在标注图标的锚点
   * @desc 默认为 { x: 0.5, y: 1 } 底边中点
   */
  anchor: MapAnchor;
  /**
   * @desc 自定义点聚合簇效果时使用
   */
  clusterId: number;
  /**
   * @desc 自定义气泡窗口
   */
  customCallout: MapCustomCallout;
  /**
   * @desc 无障碍访问，（属性）元素的额外描述
   */
  ariaLabel: string;
}

/**
 * @desc 路线
 */
export interface MapPolyline {
  /**
   * @desc 经纬度点数组
   */
  points: MapPoint[];
  /**
   * @desc 十六进制颜色
   * @desc colorList 不存在时有效
   */
  color: string;
  /**
   * @desc 线的宽度
   */
  width: number;
  /**
   * @desc 是否虚线
   * @desc 默认为 false
   */
  dottedLine: boolean;
  /**
   * @desc 是否带箭头
   * @desc 默认为 false
   */
  arrowLine: boolean;
  /**
   * @desc 箭头图标路径
   * @desc 项目目录下的图片路径，支持相对路径和临时路径
   * @desc arrowLine 为 true 时有效
   */
  arrowIconPath: string;
  /**
   * @desc 线的边框颜色
   */
  borderColor: string;
  /**
   * @desc 线的宽度
   */
  borderWidth: number;
  /**
   * @desc 彩虹线
   * @desc 存在时忽略 color
   */
  colorList: string[];
  /**
   * @desc 压盖关系
   * @desc abovelabels 显示在所有 POI 之上
   * @desc abovebuildings 显示在楼块之上 POI 之下
   * @desc aboveroads 显示在道路之上楼块之下
   */
  level: MapLevel;
}

/**
 * @desc 多边形
 */
export interface MapPolygon {
  /**
   * @desc 经纬度点数组
   */
  points: MapPoint[];
  /**
   * @desc 描边宽度
   */
  strokeWidth: number;
  /**
   * @desc 十六进制描边颜色
   */
  strokeColor: string;
  /**
   * @desc 十六进制填充颜色
   */
  fillColor: string;
  /**
   * @desc z 轴数值
   */
  zIndex: number;
  /**
   * @desc 压盖关系
   * @desc abovelabels 显示在所有 POI 之上
   * @desc abovebuildings 显示在楼块之上 POI 之下
   * @desc aboveroads 显示在道路之上楼块之下
   */
  level: MapLevel;
}

/**
 * @desc 圆
 */
export interface MapCircle {
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
  /**
   * @desc 十六进制描边颜色
   */
  color: string;
  /**
   * @desc 十六进制填充颜色
   */
  fillColor: string;
  /**
   * @desc 半径
   */
  radius: number;
  /**
   * @desc 描边宽度
   */
  strokeWidth: number;
  /**
   * @desc 压盖关系
   * @desc abovelabels 显示在所有 POI 之上
   * @desc abovebuildings 显示在楼块之上 POI 之下
   * @desc aboveroads 显示在道路之上楼块之下
   */
  level: MapLevel;
}

/**
 * @desc 控件在地图的位置
 */
export interface MapPosition {
  /**
   * @desc 距离地图的左边界多远
   * @desc 默认为 0
   */
  left: number;
  /**
   * @desc 距离地图的上边界多远
   * @desc 默认为 0
   */
  top: number;
  /**
   * @desc 控件宽度
   * @desc 默认为控件宽度
   */
  width: number;
  /**
   * @desc 控件高度
   * @desc 默认为图片高度
   */
  height: number;
}

/**
 * @desc 控件
 */
export interface MapControl {
  /**
   * @desc 在控件点击事件回调中会返回
   */
  id: number;
  /**
   * @desc 控件在地图的位置
   */
  position: MapPosition;
  /**
   * @desc 图标路径
   * @desc 项目目录下的图片路径，支持相对路径和临时路径
   */
  iconPath: string;
  /**
   * @desc 是否可点击
   * @desc 默认不可点击
   */
  clickable: boolean;
}

export interface MapProps {
  /**
   * @desc 中心纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 中心经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
  /**
   * @desc 缩放级别
   * @desc 默认为 16
   */
  scale: number;
  /**
   * @desc 主题
   * @desc 只在初始化时有效，不能动态变更
   * @desc 仅 Android 支持
   * @desc normal 正常
   * @desc satellite 卫星图
   * @desc 默认为 normal
   */
  theme: MapTheme;
  /**
   * @desc 最小缩放级别
   * @desc 默认为 3
   */
  minScale: number;
  /**
   * @desc 最大缩放级别
   * @desc 默认为 20
   */
  maxScale: number;
  /**
   * @desc 个性化地图配置的 style，不支持动态修改
   * @desc 默认为 1
   */
  layerStyle: string | number;
  /**
   * @desc 标记点数组
   */
  markers: MapMarker[];
  /**
   * @desc 路线
   */
  polyline: MapPolyline[];
  /**
   * @desc 圆
   */
  circles: MapCircle[];
  /**
   * @desc 控件
   */
  controls: MapControl[];
  /**
   * @desc 缩放视野以包含所有给定的坐标点
   */
  includePoints: MapPoint[];
  /**
   * @desc 是否显示 3D 楼块
   * @desc 默认为 false
   */
  enable3D: boolean;
  /**
   * @desc 是否显示指南针
   * @desc 默认为 false
   */
  showCompass: boolean;
  /**
   * @desc 是否支持缩放
   * @desc 默认为 true
   */
  enableZoom: boolean;
  /**
   * @desc 是否支持拖动
   * @desc 默认为 true
   */
  enableScroll: boolean;
  /**
   * @desc 是否支持旋转
   * @desc 默认为 false
   */
  enableRotate: boolean;
  /**
   * @desc 是否开启俯视
   * @desc 默认为 false
   */
  enableOverlooking: boolean;
  /**
   * @desc 是否开启卫星图
   * @desc 默认为 false
   */
  enableSatellite: boolean;
  /**
   * @desc 是否开启实时路况
   * @desc 默认为 false
   */
  enableTraffic: boolean;
  /**
   * @desc 是否展示 POI 点
   * @desc 默认为 false
   */
  enablePoi: boolean;
  /**
   * @desc 是否展示建筑物
   * @desc 默认为 false
   */
  enableBuilding: false;
  /**
   * @desc 是否显示带有方向的当前定位点
   * @desc 默认为 false
   */
  showLocation: boolean;
  /**
   * @desc 多边形
   */
  polygons: MapPolygon[];
  /**
   * @desc 是否展示室内地图
   * @desc 默认为 false
   */
  enableIndoorMap: boolean;
  /**
   * @desc 点击标记点时触发
   */
  onMarkertap: (
    event: CustomEvent<{
      markerId: number;
    }>,
  ) => void;
  /**
   * @desc 点击 label 时触发
   */
  onLabeltap: (
    event: CustomEvent<{
      markerId: number;
    }>,
  ) => void;
  /**
   * @desc 点击标记点对应的气泡时触发
   */
  onCallouttap: (
    event: CustomEvent<{
      markerId: number;
    }>,
  ) => void;
  /**
   * @desc 点击控件时触发
   */
  onControltap: (
    event: CustomEvent<{
      controlId: number;
    }>,
  ) => void;
  /**
   * @desc 视野发生变化时触发
   */
  onRegionchange: (event: BaseEvent) => void;
  /**
   * @desc 点击地图时触发
   */
  onTap: (event: BaseEvent) => void;
  /**
   * @desc 地图渲染更新完成时触发
   */
  onUpdated: (event: BaseEvent) => void;
  /**
   * @desc 点击定位标时触发
   */
  onAnchorpointtap: (event: CustomEvent<MapPoint>) => void;
  /**
   * @desc 点击地图 poi 点时触发
   */
  onPoitap: (
    event: CustomEvent<{
      /**
       * @desc 名称
       */
      name: string;
      /**
       * @desc 纬度
       * @desc 取值范围为 -90 - 90
       */
      latitude: number;
      /**
       * @desc 经度
       * @desc 取值范围为 -180 - 180
       */
      longitude: number;
    }>,
  ) => void;
}

/**
 * @desc 地图组件，用于展示地图
 */
export type Map = Component<Partial<MapProps>>;
```

### Canvas (canvas)

```typescript
/**
 * @desc 类型
 */
export type CanvasType = '2d' | 'webgl';

export interface CanvasProps {
  /**
   * @desc 类型
   */
  type: CanvasType;
  /**
   * @desc 唯一标识符
   */
  canvasId: string;
  /**
   * @desc 当在 canvas 中移动时且有绑定手势事件时，是否禁止屏幕滚动以及下拉刷新
   * @desc 默认为 false
   */
  disableScroll: boolean;
  /**
   * @desc 是否启用高清处理
   * @desc 默认为 true
   */
  hidpi: boolean;
  /**
   * @desc 手指触摸动作开始时触发
   */
  onTouchstart: (event: BaseEvent) => void;
  /**
   * @desc 手指触摸后移动时触发
   */
  onTouchmove: (event: BaseEvent) => void;
  /**
   * @desc 手指触摸动作结束时触发
   */
  onTouchend: (event: BaseEvent) => void;
  /**
   * @desc 手指触摸动作被打断时触发
   */
  onTouchcancel: (event: BaseEvent) => void;
  /**
   * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
   */
  onLongtap: (event: BaseEvent) => void;
  /**
   * @desc 发生错误时触发
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
}

/**
 * @desc 画布
 */
export type Canvas = Component<Partial<CanvasProps>>;
```

### WebView (web-view)

```typescript
/**
 * @desc 样式
 */
export interface WebViewStyles {
  /**
   * @desc 进度条样式
   * @desc 仅加载网络 HTML 时生效
   * @desc 设置为 false 时禁用进度条
   * @desc 默认为 { color: '#00ff00' }
   */
  progress: boolean | { color: string };
}

export interface WebViewProps {
  /**
   * @desc 指向网页的链接
   */
  src: string;
  /**
   * @desc 用于为 iframe 指定其特征策略
   */
  allow: string;
  /**
   * @desc 该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件
   */
  sandbox: string;
  /**
   * @desc 样式
   */
  webviewStyles: WebViewStyles;
  /**
   * @desc 是否自动更新当前页面标题
   */
  updateTitle: boolean;
  /**
   * @desc 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息
   */
  onMessage: (
    event: CustomEvent<{
      dta: any[];
    }>,
  ) => void;
  /**
   * @desc 网页向应用实时 postMessage
   */
  onPostMessage: (event: BaseEvent) => void;
}

/**
 * @desc web 浏览器组件，可承载网页
 */
export type WebView = Component<Partial<WebViewProps>>;
```

### Ad (ad)

```typescript
export interface AdProps {
  /**
   * @desc APP 广告位 id */
  adpid: string;
  /**
   * @desc 广告单元 id，可在小程序管理后台的流量主模块新建
   */
  unitId: string;
  /**
   * @desc 广告自动刷新的间隔时间，必须大于等于 30
   * @desc 该参数不传入时 Banner 广告不会自动刷新
   * @desc 单位为 s
   */
  adIntervals: number;
  /**
   * @desc 广告数据，优先级高于 adpid
   */
  data: AnyRecord;
  /**
   * @desc 小程序应用 ID
   */
  appid: string;
  /**
   * @desc 小程序广告位 ID
   */
  apid: string;
  /**
   * @desc type 为 feeds 时广告左边距，必须大于 0
   * @desc 单位为 px
   */
  adLeft: number;
  /**
   * @desc type 为 feeds 时广告上边距，必须大于 0
   * @desc 单位为 px
   */
  adTop: number;
  /**
   * @desc type 为 feeds 时广告宽度，最大值为屏幕宽度，最小值为 265
   * @desc 单位为 px
   * @desc 默认为 100%
   */
  adWidth: number;
  /**
   * @desc type 为 feeds 时广告高度，最大值为 160，最小值为 85
   * @desc 单位为 px
   */
  adHeight: number;
  /**
   * @desc 广告类型
   */
  type: string;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 广告关闭的回调
   */
  onClose: (event: BaseEvent) => void;
}

/**
 * @desc 广告
 */
export type Ad = Component<Partial<AdProps>>;
```

### AdContentPage (ad-content-page)

```typescript
export interface AdContentPageProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 广告开始播放时触发
   */
  onStart: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 广告暂停播放时触发
   */
  onPause: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 广告恢复播放时触发
   */
  onResume: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 广告完成播放时触发
   */
  onComplete: (
    event: CustomEvent<{
      /**
       * @desc 广告唯一标识
       */
      id: string;
      /**
       * @desc 广告类型
       * @desc 0 未知类型
       * @desc 1 普通信息流
       * @desc 2 sdk 内部广告
       * @desc 3 第三方广告
       * @desc 4 直播
       */
      type: 0 | 1 | 2 | 3 | 4;
      /**
       * @desc 视频总时长
       */
      duration: number;
    }>,
  ) => void;
}

export type AdContentPage = Component<Partial<AdContentPageProps>>;
```

### AdDraw (ad-draw)

```typescript
export interface AdDrawProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
  /**
   * @desc 广告数据
   */
  data: AnyRecord;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
}

export type AdDraw = Component<Partial<AdDrawProps>>;
```

### AdFullscreenVideo (ad-fullscrren-video)

```typescript
export interface AdFullscreenVideoProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string | number | (string | number)[];
  /**
   * @desc 是否在页面就绪后加载广告数据
   * @desc 默认为 true
   */
  preload: boolean;
  /**
   * @desc 是否自动加载下一条广告数据
   * @desc 默认为 false
   */
  loadnext: boolean;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 广告关闭的回调
   */
  onClose: (event: BaseEvent) => void;
}

export type AdFullscreenVideo = Component<Partial<AdFullscreenVideoProps>>;
```

### AdInteractive (ad-interactive)

```typescript
export interface AdInteractiveProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
  /**
   * @desc 点击广告后打开的页面路径
   */
  openPagePath: string;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
}

export type AdInteractive = Component<Partial<AdInteractiveProps>>;
```

### AdIntersitial (ad-intersitial)

```typescript
export interface AdInterstitialProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string | number | (string | number)[];
  /**
   * @desc 是否在页面就绪后加载广告数据
   * @desc 默认为 true
   */
  preload: boolean;
  /**
   * @desc 是否自动加载下一条广告数据
   * @desc 默认为 false
   */
  loadnext: boolean;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 广告关闭的回调
   */
  onClose: (event: BaseEvent) => void;
}

export type AdInterstitial = Component<Partial<AdInterstitialProps>>;
```

### AdRewardedVideo (ad-rewarded-video)

```typescript
/**
 * @desc 服务器回调透传数据
 */
export interface AdRewardedVideoUrlCallback {
  userId: string;
  extra: string;
}

export interface AdRewardedVideoProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string | number | (string | number)[];
  /**
   * @desc 是否在页面就绪后加载广告数据
   * @desc 默认为 true
   */
  preload: boolean;
  /**
   * @desc 是否自动加载下一条广告数据
   * @desc 默认为 false
   */
  loadnext: boolean;
  /**
   * @desc 服务器回调透传数据
   */
  urlCallback: AdRewardedVideoUrlCallback;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 广告加载失败的回调
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误码
       */
      errCode: number;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 广告关闭的回调
   */
  onClose: (event: BaseEvent) => void;
}

export type AdRewardedVideo = Component<Partial<AdRewardedVideoProps>>;
```

### PageMeta (page-meta)

```typescript
/**
 * @desc 下拉背景字体、loading 图的样式
 * @desc dark 暗色
 * @desc light 亮色
 */
export type PageMetaBackgroundTextStyle = 'dark' | 'light';

export interface PageMetaProps {
  /**
   * @desc 下拉背景字体、loading 图的样式
   * @desc dark 暗色
   * @desc light 亮色
   */
  backgroundTextStyle: PageMetaBackgroundTextStyle;
  /**
   * @desc 窗口的背景色
   */
  backgroundColor: string;
  /**
   * @desc 顶部窗口的十六进制背景色，仅 iOS 支持
   */
  backgroundColorTop: string;
  /**
   * @desc 底部窗口的十六进制背景色，仅 iOS 支持
   */
  backgroundColorBottom: string;
  /**
   * @desc 滚动位置，在被设置时页面会滚动到对应位置
   * @desc 单位为 px / rpx
   */
  scrollTop: string;
  /**
   * @desc 滚动动画时长
   * @desc 默认为 300
   */
  scrollDuration: number;
  /**
   * @desc 页面根节点样式
   * @desc 页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点
   */
  pageStyle: string;
  /**
   * @desc 页面的根字体大小
   */
  rootFontSize: string;
  /**
   * @desc 是否开启自动下拉刷新
   * @desc 默认为 false
   */
  enablePullDownRefresh: boolean;
  /**
   * @desc 页面尺寸变化时触发
   */
  onResize: (
    event: CustomEvent<{
      windowWidth: number;
      windowHeight: number;
    }>,
  ) => void;
  /**
   * @desc 页面滚动时触发
   */
  onScroll: (
    event: CustomEvent<{
      scrollTop: number;
    }>,
  ) => void;
  /**
   * @desc 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发
   */
  onScrolldone: (event: BaseEvent) => void;
}

/**
 * @desc 页面属性配置节点，用于指定页面的一些属性、监听页面事件
 * @desc 可部分替代 pages.json
 * @desc 只能是页面内的第一个节点
 */
export type PageMeta = Component<Partial<PageMetaProps>>;
```

### NavigationBar (navigation-bar)

```typescript
/**
 * @desc 副标题文字超出显示区域时处理方式
 * @desc clip 超出显示区域时内容裁剪
 * @desc ellipsis 超出显示区域时尾部显示省略标记
 */
export type NavigationBarSubtitleOverflow = 'clip' | 'ellipsis';

/**
 * @desc 标题对齐方式
 * @desc center 居中对齐
 * @desc left 左对齐
 * @desc auto 自动
 */
export type NavigationBarTitleAlign = 'center' | 'left' | 'auto';

/**
 * @desc 背景图片重复方式
 * @desc backgroundImage 设置为图片路径时有效
 * @desc repeat 背景图片在垂直方向和水平方向平铺
 * @desc repeat-x 背景图片在水平方向平铺，垂直方向拉伸
 * @desc repeat-y 背景图片在垂直方向平铺，水平方向拉伸
 * @desc 背景图片在垂直方向和水平方向都拉伸
 */
export type NavigationBarBackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

/**
 * @desc 高斯模糊标题栏的风格
 * @desc dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
 * @desc extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
 * @desc light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
 * @desc none 无模糊效果
 */
export type NavigationBarBlurEffect = 'none' | 'dark' | 'extralight' | 'light';

/**
 * @desc 导航条前景颜色值，包括按钮、标题、状态栏的颜色
 */
export type NavigationFrontColor = '#ffffff' | '#000000';

/**
 * @desc 改变导航栏颜色时的动画方式
 */
export type NavigationBarColorAnimationTimingFunc = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';

export interface NavigationBarProps {
  /**
   * @desc 导航条标题
   */
  title: string;
  /**
   * @desc 标题图标
   * @desc 仅支持本地文件路径、相对路径
   * @desc 固定宽高 34px
   * @desc 设置后标题将居左显示
   */
  titleIcon: string;
  /**
   * @desc 标题图标圆角
   * @desc 单位为 px
   */
  titleIconRadius: string;
  /**
   * @desc 副标题文字内容
   * @desc 设置副标题后将显示两行标题，副标题在主标题下方
   * @desc 设置副标题后将居左显示
   */
  subtitleText: string;
  /**
   * @desc 副标题文字字体大小
   * @desc 单位为 px
   * @desc 默认为 12px
   */
  subtitleSize: string;
  /**
   * @desc 副标题文字颜色
   * @desc 默认为主标题文字颜色
   */
  subtitleColor: string;
  /**
   * @desc 副标题文字超出显示区域时处理方式
   * @desc clip 超出显示区域时内容裁剪
   * @desc ellipsis 超出显示区域时尾部显示省略标记
   * @desc 默认为 ellipsis
   */
  subtitleOverflow: NavigationBarSubtitleOverflow;
  /**
   * @desc 标题对齐方式
   * @desc center 居中对齐
   * @desc left 左对齐
   * @desc auto 自动
   * @desc 默认 Android left，iOS center
   */
  titleAlign: NavigationBarTitleAlign;
  /**
   * @desc 背景图片
   * @desc 支持本地文件路径、相对路径、渐变色
   */
  backgroundImage: string;
  /**
   * @desc 背景图片重复方式
   * @desc backgroundImage 设置为图片路径时有效
   * @desc repeat 背景图片在垂直方向和水平方向平铺
   * @desc repeat-x 背景图片在水平方向平铺，垂直方向拉伸
   * @desc repeat-y 背景图片在垂直方向平铺，水平方向拉伸
   * @desc 背景图片在垂直方向和水平方向都拉伸
   * @desc 默认为 no-repeat
   */
  backgroundRepeat: NavigationBarBackgroundRepeat;
  /**
   * @desc 高斯模糊标题栏的风格
   * @desc dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
   * @desc extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
   * @desc light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
   * @desc none 无模糊效果
   * @desc 默认为 none
   */
  blurEffect: NavigationBarBlurEffect;
  /**
   * @desc 是否在导航条显示 loading 加载提示
   * @desc 默认为 false
   */
  loading: boolean;
  /**
   * @desc 导航条前景颜色值，包括按钮、标题、状态栏的颜色
   */
  frontColor: NavigationFrontColor;
  /**
   * @desc 导航条背景颜色值
   */
  backgroundColor: string;
  /**
   * @desc 改变导航栏颜色时的动画时长
   * @desc 默认为 0
   */
  colorAnimationDuration: number;
  /**
   * @desc 改变导航栏颜色时的动画方式
   */
  colorAnimationTimingFunc: NavigationBarColorAnimationTimingFunc;
}

/**
 * @desc 页面导航条配置节点，用于指定导航栏的一些属性
 * @desc 只能是 page-meta 组件内的第一个节点，需要配合 page-meta 一同使用
 */
export type NavigationBar = Component<Partial<NavigationBarProps>>;
```

### CustomTabBar (custom-tab-bar)

```typescript
/**
 * @desc 选项的排列方向
 * @desc vertical 纵向
 * @desc horizontal 横向
 */
export type CustomTabBarDirection = 'vertical' | 'horizontal';

export interface CustomTabBarProps {
  /**
   * @desc 选项的排列方向
   * @desc vertical 纵向
   * @desc horizontal 横向
   * @desc 默认为 horizontal
   */
  direction: 'vertical' | 'horizontal';
  /**
   * @desc 是否显示 icon
   * @desc 默认为 false
   */
  showIcon: boolean;
  /**
   * @desc 选中的 tabBar 选项索引值
   * @desc 默认为 0
   */
  selected: number;
  /**
   * @desc 点击事件
   */
  onTabItemTap: ({
    index,
    pagePath,
    text,
  }: {
    /**
     * @desc 被点击 tabItem 的序号，从 0 开始
     */
    index: number;
    /**
     * @desc 被点击 tabItem 的页面路径
     */
    pagePath: string;
    /**
     * @desc 被点击 tabItem 的按钮文字
     */
    text: string;
  }) => void;
}

/**
 * @desc 自定义 tabBar 组件
 */
export type CustomTabBar = Component<Partial<CustomTabBarProps>>;
```

## 致谢

最初在 [uni-base-components-types](https://github.com/satrong/uni-base-components-types) 得到了灵感。

基于 [这个 PR](https://github.com/satrong/uni-base-components-types/pull/5) 完成。
