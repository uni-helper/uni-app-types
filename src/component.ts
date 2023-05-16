/* eslint-disable @typescript-eslint/ban-types */
import {
  DefineComponent,
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  EmitsOptions,
  ExtractPropTypes,
  ExtractDefaultPropTypes,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
  SlotsType,
} from 'vue3';

type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

type _AnyRecord = Record<string, any>;

type _Component<P extends _AnyRecord = _AnyRecord, S extends SlotsType = {}> = DefineComponent<
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
  Readonly<ExtractPropTypes<P>>,
  ExtractDefaultPropTypes<{}>,
  S
>;

export { _AnyRecord as AnyRecord, _Component as Component };

declare global {
  namespace UniHelper {
    export type AnyRecord = _AnyRecord;
    export type Component = _Component;
  }
}
/* eslint-enable @typescript-eslint/ban-types */
