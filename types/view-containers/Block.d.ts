import { Component } from '../Component';

/**
 * @desc 包装元素，不会在页面中做任何渲染，只接受控制属性
 * @desc 支持在 template 模板中嵌套 template 和 block
 * @desc 在不同的平台表现存在一定差异，推荐统一使用 template
 */
export type Block = Component;
