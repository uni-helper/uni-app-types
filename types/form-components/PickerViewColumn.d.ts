import { Component } from '../Component';

interface _PickerViewColumnProps {}

type _PickerViewColumn = Component<Partial<_PickerViewColumnProps>>;

export { _PickerViewColumnProps as PickerViewColumnProps, _PickerViewColumn as PickerViewColumn };

declare global {
  namespace UniHelper {
    export interface PickerViewColumnProps extends _PickerViewColumnProps {}
    export type PickerViewColumn = _PickerViewColumn;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PickerViewColumn: _PickerViewColumn;
  }
}
