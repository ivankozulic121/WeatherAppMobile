import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Text } from '@/components/ui/text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchField } from './searchField';
import { useState } from 'react';

const units = [
  { label: 'Celsius', value: 'celsius' },
  { label: 'Fahrenheit', value: 'fahrenheit' },

];
 
export function SearchComponent() {
    const [ searchValue, setSearchValue] = useState('sss');
      const [filteredUnits, setFilteredUnits] = useState(units)
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 4,
    right: 4,
  };

  function onInputChange(e: any) {
  const text = e.nativeEvent.text;
  setSearchValue(text);
  setFilteredUnits(units.filter(unit => unit.value.toLowerCase().includes(text.toLowerCase())));
}
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SearchField onChange={onInputChange}></SearchField> 
      </DropdownMenuTrigger>
      <DropdownMenuContent insets={contentInsets} sideOffset={2} className="w-56" align="start">
        {filteredUnits
    .map((unit) => (
      <DropdownMenuItem key={unit.value}>
        {unit.value}
      </DropdownMenuItem>
    ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

