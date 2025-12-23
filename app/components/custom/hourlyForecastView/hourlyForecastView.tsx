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
import { ScrollView, View } from 'react-native';
import { HourlyForecastSelectPreview } from './hourlyForecastSelectPreview';
import { HourlyForecastCardPreview } from './hourlyForecastCardPreview';
import { HourlyWeatherData } from '@/app/types/hourlyWeather';
import { useState } from 'react';

type HourlyForecastCardPreviewProps = {
  hourlyWeatherData: HourlyWeatherData,
  days: string[];
}
 
export function HourlyForecastView({hourlyWeatherData, days}: HourlyForecastCardPreviewProps) {
  const today = new Date().toISOString().slice(0, 10);
  const [selectedDay, setSelectedDay] = useState(today)
  console.log("SELECTED DAY ", selectedDay)
  console.log("HOURLY WEATHER DATA ",hourlyWeatherData );
  console.log("DEJZZ ", days);
  return (
    <Card className="w-full bg-[#25253f] flex-1 h-50">
      <CardHeader>
        <View className="flex-1 flex-row justify-between items-center gap-1.5">
          <Text>Hourly Forecast</Text>
          <HourlyForecastSelectPreview selectedDay={selectedDay} onSelectedDay={setSelectedDay} days={days}></HourlyForecastSelectPreview>
        </View>
      </CardHeader>
      <CardContent className="flex-col gap-4">
        <ScrollView style={{height:500, display: "flex", flexDirection:"column", gap: 4}} nestedScrollEnabled={true}>
        {hourlyWeatherData?.time?.map((el, index) => (
          el.includes(selectedDay) ? 
            (<HourlyForecastCardPreview key={el} time={el} temperature={hourlyWeatherData?.temperature_2m?.[index]} weatherCode={hourlyWeatherData?.weather_code?.[index]}></HourlyForecastCardPreview>) : null
        ))}
        </ScrollView>
          
          {/* <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview> */}
      </CardContent>
    </Card>
  );
}