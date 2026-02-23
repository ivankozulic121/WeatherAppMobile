import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Image, View, ImageBackground, StyleSheet } from 'react-native';
import { weatherIcons } from '@/app/constants/weatherIcons';
import { weatherCodes } from '@/app/constants/weatherCodes';

type DailyForecastProps = {
    minTemp: number;
    maxTemp: number;
    day: string;
    weatherCode: number;
}
 
export function DailyForecastCard({minTemp, maxTemp, day, weatherCode}: DailyForecastProps) {

  const dayName = new Date(day).toLocaleDateString("en-US", {weekday: 'short'});
  const actualWeather = Object.keys(weatherCodes).find( key =>
    weatherCodes[key].includes(weatherCode)
  )

  return (
    <Card className="w-[30%] rounded-xl  overflow-hidden bg-[#25253f] mt-4 py-4 flex">
         <ImageBackground
        source={require('@/assets/images/bg-today-2.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle className="text-center text-white">{dayName}</CardTitle>
        </View>
      </CardHeader>
      <CardContent>
        <View className="flex-row align-center justify-center">
          <Image source={weatherIcons[actualWeather ?? 'sunny']} resizeMode="stretch" className='h-12 w-12'/>
        </View>
      </CardContent>
      <CardFooter className="flex-row justify-between gap-2">
        <Text className='text-white'>{Math.floor(maxTemp)}°</Text>
        <Text className='text-white'>{Math.floor(minTemp)}°</Text>
      </CardFooter>
      <ImageBackground />
    </Card>
  );
}