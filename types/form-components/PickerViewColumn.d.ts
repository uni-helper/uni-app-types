import { Component } from '../Component';

type _PickerViewColumn = Component;

export { _PickerViewColumn as PickerViewColumn };

declare global {
  namespace UniHelper {
    export type PickerViewColumn = _PickerViewColumn;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PickerViewColumn: _PickerViewColumn;
  }
}
