/* eslint-disable @typescript-eslint/ban-types */
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

export type Component<P extends Record<string, any> = Record<string, any>> = DefineComponent<
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
/* eslint-enable @typescript-eslint/ban-types */
