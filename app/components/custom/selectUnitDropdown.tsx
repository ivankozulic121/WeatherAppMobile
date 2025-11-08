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
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 
const units = [
  { label: 'Celsius', value: 'celsius' },
  { label: 'Fahrenheit', value: 'fahrenheit' },

];
 
export function SelectPreview() {
  const ref = React.useRef<TriggerRef>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: 12,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 0,
    right: 12,
  };
 
  // Workaround for rn-primitives/select not opening on mobile
  function onTouchStart() {
    ref.current?.open();
  }
 
  return (
    <Select>
      <SelectTrigger ref={ref} className="w-[180px]" onTouchStart={onTouchStart}>
        <SelectValue placeholder="Units" />
      </SelectTrigger>
      <SelectContent side="bottom" sideOffset={100} className="w-[180px]">
        <SelectGroup>
          <SelectLabel>Units</SelectLabel>
          {units.map((unit) => (
            <SelectItem key={unit.value} label={unit.label} value={unit.value}>
              {unit.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}