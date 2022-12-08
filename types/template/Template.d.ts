import { Component } from '../Component';

interface _TemplateProps {}

type _Template = Component<Partial<_TemplateProps>>;

export { _TemplateProps as TemplateProps, _Template as Template };

// declare global {
//   namespace UniHelper {
//     export type TemplateProps = _TemplateProps;
//   }
// }
