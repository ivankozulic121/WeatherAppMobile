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
 
const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
];

type HourlyForecastSelectPreviewProps = {
  days: string[];
  selectedDay: string;
  onSelectedDay?: (day: string) => void;
}
 
export function HourlyForecastSelectPreview({selectedDay, days, onSelectedDay}: HourlyForecastSelectPreviewProps) {
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
    console.log("KURCINA!");
  }

  function onSelectedItem(day: string) {
    onSelectedDay?.(day);
  }
 
  return (
    <Select className="bg-[#3c3b5d] rounded-md border-none">
      <SelectTrigger ref={ref} className="w-[180px]" onPress={onTouchStart}>
        <SelectValue className="border-none"  placeholder="Choose a day" />
      </SelectTrigger>
      <SelectContent insets={contentInsets} className="w-[180px]">
        <SelectGroup>
          <SelectLabel >Choose a day</SelectLabel>
          {days.map((day) => (
            <SelectItem onPress={() => onSelectedItem(day)}key={day} label={new Date(day).toLocaleDateString("en-US", {weekday: 'long'})} value={day}>
              {new Date(day).toLocaleDateString("en-US", {weekday: 'long'})} {selectedDay === day  && "(Today)"}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}