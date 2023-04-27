import { Component } from '../Component';

// eslint-disable-next-line @typescript-eslint/ban-types
type _PickerViewColumnProps = Partial<{}>;

type _PickerViewColumn = Component<_PickerViewColumnProps>;

type _PickerViewColumnInstance = InstanceType<_PickerViewColumn>;

export {
  _PickerViewColumnProps as PickerViewColumnProps,
  _PickerViewColumn as PickerViewColumn,
  _PickerViewColumnInstance as PickerViewColumnInstance,
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PickerViewColumn: _PickerViewColumn;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      PickerViewColumn: _PickerViewColumn;
    }
  }
  namespace UniHelper {
    export type PickerViewColumnProps = _PickerViewColumnProps;
    export type PickerViewColumn = _PickerViewColumn;
    export type PickerViewColumnInstance = _PickerViewColumnInstance;
  }
}
