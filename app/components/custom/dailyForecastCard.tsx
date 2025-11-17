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
import { Image, View } from 'react-native';
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
    <Card className="w-[30%] bg-[#25253f] mt-4 py-4 flex">
      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle className="text-center">{dayName}</CardTitle>
        </View>
      </CardHeader>
      <CardContent>
        <View className="flex-row align-center justify-center">
          <Image source={weatherIcons[actualWeather ?? 'sunny']} resizeMode="stretch" className='h-12 w-12'/>
        </View>
      </CardContent>
      <CardFooter className="flex-row justify-between gap-2">
        <Text>{Math.floor(maxTemp)}°</Text>
        <Text>{Math.floor(minTemp)}°</Text>
      </CardFooter>
    </Card>
  );
}