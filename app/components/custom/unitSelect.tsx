import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { TriggerRef } from '@rn-primitives/select';
import * as React from 'react';
import { useState } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 
const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
];

type Unit = 'Celsius' | 'Fahrenheit'

type UnitSelectProps = {
    unit: string
    onUnitChange: (unit: string) => void;
};
 
export function UnitSelectPreview({unit, onUnitChange}: UnitSelectProps) {

  const [units, setUnits] = useState('Celsius');
  const ref = React.useRef<TriggerRef>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };
 
  // Workaround for rn-primitives/select not opening on mobile
  function onTouchStart() {
    ref.current?.open();
  }

 
  return (
    <Select onValueChange={(option) => {
    if (!option) return;
    onUnitChange(option.value);
  }}>
      <SelectTrigger ref={ref} className="w-[180px]" onTouchStart={onTouchStart}>
        <SelectValue placeholder="Units" />
      </SelectTrigger>
      <SelectContent side="bottom" sideOffset={100}insets={contentInsets} className="w-[180px]">
        <SelectGroup>
          
            <SelectItem  key={"Celsius"} label={"Celsius"} value={"Celsius"}>
              Celsius
            </SelectItem>

            <SelectItem key={"Fahrenheit"} label={"Fahrenheit"} value={"Fahrenheit"}>
              Fahrenheit
            </SelectItem>
        
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}