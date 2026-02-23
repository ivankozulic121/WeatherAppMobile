import * as React from 'react';
import { View,Text } from 'react-native';
 
type Unit = 'Celsius' | 'Fahrenheit'

type UnitSelectProps = {
    unit: string
    onUnitChange: (unit: string) => void;
};
 
export function UnitSelectPreview({unit, onUnitChange}: UnitSelectProps) {

  console.log(unit);
  
  return (
    <View className=' gap-4  flex flex-row justify-end mt-4 mr-4 overflow-hidden ' >
      <View className=' flex flex-row rounded-sm border border-white  overflow-hidden '>
        <Text onPress={() => onUnitChange('Celsius')} className={`text-white px-4 py-2 text-[16px] ${unit == 'Celsius' && 'bg-blue-700 '}`}>℃</Text>
        <Text onPress={() => onUnitChange('Fahrenheit')} className={`text-white px-4 py-2 text-[16px] ${unit == 'Fahrenheit' && 'bg-blue-700'}`}>℉</Text>
      </View>
    </View>
  );
}