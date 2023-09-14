# 改动日志

## 0.5.10 (2023-09-14)

- fix: 修复 `Map` 相关类型，感谢 [ZXheart](https://github.com/ZXheart) 在 [#51](https://github.com/uni-helper/uni-app-types/pull/51) 的贡献

## 0.5.9 (2023-05-16)

- fix: 补充 button open-type 和事件 <span style="color: transparent">微信你坏事做绝 👎</span>

## 0.5.7 (2023-04-28)

- fix: 支持 `Vue Language Features (Volar)` & `vue-tsc` 1.6.0

## 0.5.6 (2023-04-28)

- fix: 支持 `Vue Language Features (Volar)` & `vue-tsc` 1.6.0

## 0.5.5 (2023-04-27)

- fix: 支持 `Vue Language Features (Volar)` & `vue-tsc` 1.6.0

## 0.5.4 (2023-03-30)

- fix: 支持 `typescript@5`

## 0.5.3 (2023-03-22)

- fix: 修复 `TextareaOnFocusDetail` 参数

## 0.5.2 (2023-03-20)

- fix: 修复 `MapProps` `enableBuilding` 类型，感谢 [Surlyyoung](https://github.com/Surlyyoung) 在 [#38](https://github.com/uni-helper/uni-app-types/pull/38) 的贡献

## 0.5.1 (2023-03-06)

- fix: 修复发布错误

## 0.5.0 (2023-03-06)

- build: 现在使用 `rollup` 打包生成类型文件
- fix: 修复部分文件没有导入 `BaseEvent` 和 `CustomEvent` 导致类型被推断为 `any` 的问题
- fix: 修复 `custom-tab-bar` 事件名称错误的问题 `onTabItemTap` -> `onOnTabItemTap`
- feat: 增加 `RegionPickerOnChangeDetail` 下字段，感谢 [Megasu](https://github.com/Megasu) 的贡献
- feat: 增加大量 `XxxEvent` 类型方便使用，感谢 [Megasu](https://github.com/Megasu) 的大量贡献
- feat: 调整 `CustomEvent` 下的类型，现在 `CustomEvent` 下的 `detail` 不再是可选的，感谢 [Megasu](https://github.com/Megasu) 的大量贡献

## 0.4.0 (2023-02-09)

- feat: 提供所有组件的实例类型

之前：

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { Button } from '@uni-helper/uni-app-types';

// 你必须手动构造组件实例类型
type ButtonInstance = InstanceOf<Button>;

const buttonRef = ref<ButtonInstance | null>();
</script>

<template>
  <button ref="buttonRef">button</button>
</template>
```

现在：

```vue
<script setup lang="ts">
import { ref } from 'vue';
// 你无需手动构造，导入即可使用
import type { ButtonInstance } from '@uni-helper/uni-app-types';

const buttonRef = ref<ButtonInstance | null>();

// 也可以直接使用全局命名空间下的组件实例类型
// const buttonRef = ref<UniHelper.ButtonInstance | null>();
</script>

<template>
  <button ref="buttonRef">button</button>
</template>
```

- feat: 现在所有组件 Props 类型下的属性都是可选的，使用 `v-bind` 直接绑定一个对象更为方便

之前：

```vue
<script setup lang="ts">
import type { ButtonProps } from '@uni-helper/uni-app-types';

// 你必须手动设置 Partial
// 否则你需要设置所有属性或禁用检查
const buttonProps: Partial<ButtonProps> = { ... };
</script>

<template>
  <button v-bind="buttonProps">button</button>
</template>
```

现在：

```vue
<script setup lang="ts">
import type { ButtonProps } from '@uni-helper/uni-app-types';

// 不需要设置 Partial，也不需要设置所有属性
const buttonProps: ButtonProps = { ... };
</script>

<template>
  <button v-bind="buttonProps">button</button>
</template>
```

## 0.3.2 (2023-01-31)

- fix: 修复大小写
- fix: 修复 `CustomTabBar` 类型
- fix: 补充 `Input` 类型

## 0.3.1 (2022-12-27)

- fix: 修复部分类型错误

## 0.3.0 (2022-12-14)

## 0.3.0-3 (2022-12-12)

- feat!: 调整事件类型命名
- feat: 增加基本测试
- fix: 修复部分类型错误

## 0.3.0-2 (2022-12-08)

- feat: 调整 `UniHelper` 的实现
- feat: 增加导出

## 0.3.0-1 (2022-12-06)

- feat: 调整 `UniHelper` 的实现

## 0.3.0-0 (2022-12-06)

- feat!: 要求 `node >= 14.18`，这是为了对标 `rollup` 和 `vite`
- feat: 增加组件
- feat: 增加导出
- feat: 增加 `UniHelper` 命名空间

## 0.2.0 (2022-12-02)

- feat: 增加 `AnyRecord`
- feat!: `BaseEventTarget` -> `EventTarget`，增加泛型和属性
- feat!: 移除 `BaseEventCurrentTarget`
- feat: `BaseEvent` 增加泛型
- feat: `CustomEvent` 增加泛型
- feat!: `TouchEventTouch` -> `TouchDetail`
- feat!: `TouchEventCanvasTouch` -> `TouchCanvasDetail`
- feat!: 移除 `TouchEventChangedTouch`
- feat!: 移除 `TouchEventCanvasChangedTouch`
- feat: 增加 `BaseTouchEvent`
- feat!: `TouchEvent` 调整泛型
- feat: 增加 `TouchCanvasEvent`
- feat!: 移除 `Block`

## 0.1.8 (2022-11-16)

- perf: 增加 `Component` 导出

## 0.1.7 (2022-11-16)

- 调整为 `@uni-helper/uni-app-types`

## 0.1.6 (2022-09-21)

## 0.1.5 (2022-08-25)

- perf: 优化 `BaseEventTarget` 类型

## 0.1.4 (2022-08-15)

## 0.1.3 (2022-08-15)

- fix: 修复导出

## 0.1.2 (2022-07-24)

## 0.1.1 (2022-07-18)

- fix: 修复类型

## 0.1.0 (2022-07-18)

- feat: 增加广告组件类型
- feat: 增加页面元数据组件类型

## 0.0.7 (2022-07-18)

- feat: 增加网页视图组件类型
- feat: 增加画布组件类型

## 0.0.6 (2022-07-18)

- feat: 增加地图组件类型

## 0.0.5 (2022-07-17)

- feat: 增加媒体组件类型

## 0.0.4 (2022-07-16)

- feat: 增加表单组件类型
- feat: 增加导航组件类型
- fix: 修复导出
- fix: 修复类型

## 0.0.3 (2022-07-15)

- feat: 增加基础组件类型

## 0.0.2 (2022-07-15)

- fix: 修复类型

## 0.0.1 (2022-07-15)

初次发布。
