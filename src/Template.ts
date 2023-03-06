import { Component } from './Component';

// eslint-disable-next-line @typescript-eslint/ban-types
type _TemplateProps = Partial<{}>;

type _Template = Component<_TemplateProps>;

type _TemplateInstance = InstanceType<_Template>;

export {
  _TemplateProps as TemplateProps,
  _Template as Template,
  _TemplateInstance as TemplateInstance,
};

// declare global {
//   namespace UniHelper {
//     export type TemplateProps = _TemplateProps;
//     export type Template = _Template;
//     export type TemplateInstance = _TemplateInstance;
//   }
// }

// declare module '@vue/runtime-core' {
//   export interface GlobalComponents {
//     Template: _Template;
//   }
// }
