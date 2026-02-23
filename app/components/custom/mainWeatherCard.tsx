import { Location } from '@/app/types/location';
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

type MainWeatherCardProps = {
  selectedLocation: Location | undefined;
  temperature: number;
  weatherCode: number;
  
}
 
export function MainWeatherCard({selectedLocation, temperature, weatherCode}: MainWeatherCardProps) {
 
  const actualWeather = Object.keys(weatherCodes).find( key =>
    weatherCodes[key].includes(weatherCode)
  );
    const options = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };
    
    const formatted = new Date().toLocaleDateString('en-US', options);
  return (

        <Card className="w-full max-w-sm bg-transparent outline-none py-12">
        
      <CardHeader className="flex-col gap-2 items-center">

          <CardTitle className="text-3xl text-center text-white font-dmsans-bold">{selectedLocation?.name }, {selectedLocation?.country}</CardTitle>
          <CardDescription className="font-dmsans text-gray-400">{formatted}</CardDescription>
        
      </CardHeader>
      <CardContent>
        <View className="flex-row justify-between items-center mt-2">
          <Image source={weatherIcons[actualWeather ?? 'sunny']} resizeMode="stretch" className='h-24 w-24'/>
          <Text className="text-8xl text-white font-dmsans-italic overflow-visible pr-2" style={{ lineHeight: 110 }}>{Math.floor(temperature)}°</Text>
        </View>
      </CardContent>
    </Card>
      
    
  );
}