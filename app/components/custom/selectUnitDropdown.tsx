import {
    NativeSelectScrollView,
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
import { SearchField } from './searchField';
import { useState } from 'react';
import axios from "axios";
import { Location } from '@/app/types/location';


 
const units = [
  { label: 'Celsius', value: 'celsius' },
  { label: 'Fahrenheit', value: 'fahrenheit' },

];

type SelectPreviewProps = {
  searchField: string;
onSelectLocation?: (location: Location) => void;
};


export function SelectPreview({searchField, onSelectLocation}: SelectPreviewProps) {
  const [ searchValue, setSearchValue] = useState('sss');
  const [filteredUnits, setFilteredUnits] = useState(units);
  const [data, setData] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location>();
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

  function onInputChange(e: any) {
  const text = e.nativeEvent.text;
  console.log("EXECUTING!");
  setSearchValue(text);
  //setFilteredUnits(units.filter(unit => unit.value.toLowerCase().includes(text.toLowerCase())));
  axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${text}`).then( 
    (response: any) => {
        console.log("RESP ", response.data);
        setData(response.data.results || []);
    }
  )


}

function onSelectedItem(unit: Location) {
    console.log("SELECTED ", unit.name)
    setSearchValue(unit.name);
    setSelectedLocation(unit);
    onSelectLocation?.(unit);
}
  return (
    <Select>
        { searchField !== "true" ?
     ( <SelectTrigger ref={ref} className="w-[180px]" onTouchStart={onTouchStart}>

      </SelectTrigger> )

            : ( <SelectTrigger searchField={searchField} ref={ref} className="w-full" onTouchStart={onTouchStart}>
                <SearchField value={searchValue} onChange={onInputChange}></SearchField> 
                </SelectTrigger>) }
      <SelectContent side="bottom" sideOffset={searchField==="true" ? 0 : 100} className="w-[98%]">
        <SelectGroup>
           <NativeSelectScrollView>
          {data
    .map((unit) => (
      <SelectItem onPress={() => onSelectedItem(unit)} key={unit.id} label={unit.name} value={unit.name}>
        {unit.name}
      </SelectItem>
    ))}
        </NativeSelectScrollView>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}