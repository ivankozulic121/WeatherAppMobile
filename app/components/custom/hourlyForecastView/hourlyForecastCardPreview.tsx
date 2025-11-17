import { HourlyWeatherData } from '@/app/types/hourlyWeather';
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
import { weatherCodes } from '@/app/constants/weatherCodes';
import { weatherIcons } from '@/app/constants/weatherIcons';

type HourlyForecastCardPreviewProps = {
  time: string;
  temperature: number;
  weatherCode: number;
}

 
export function HourlyForecastCardPreview({time, temperature, weatherCode}: HourlyForecastCardPreviewProps) {
  
  const formattedTime = new Date(time).toLocaleTimeString("en-US", {
  hour: "numeric",
  hour12: true
  });

  const actualWeather = Object.keys(weatherCodes).find( key => 
    weatherCodes[key].includes(weatherCode)
  )
  return (
    <Card className="w-full max-w-sm bg-[#2f2f49] py-4 border border-[#3b3a5d]">
      <CardContent>
        <View className="w-full flex-row items-center justify-between gap-2">
          <View className="flex-row justify-between items-center">
            <Image source={weatherIcons[actualWeather ?? 'sunny']} resizeMode="stretch" className='h-8 w-8'/>
            <Text className="text-xl">{formattedTime}</Text>
          </View>
          <Text className="text-xl">{temperature}</Text>
          </View>
      </CardContent>
    </Card>
  );
}