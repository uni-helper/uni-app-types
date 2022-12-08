import { Component } from './Component';

interface _TemplateProps {}

type _Template = Component<Partial<_TemplateProps>>;

export { _TemplateProps as TemplateProps, _Template as Template };

// declare global {
//   namespace UniHelper {
//     export interface TemplateProps extends _TemplateProps {}
//     export type Template = _Template;
//   }
// }

// declare module '@vue/runtime-core' {
//   export interface GlobalComponents {
//     Template: _Template;
//   }
// }
