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
 
export function HourlyForecastView() {
  return (
    <Card className="w-full bg-[#25253f] flex-1 h-50">
      <CardHeader>
        <View className="flex-1 flex-row justify-between items-center gap-1.5">
          <Text>Hourly Forecast</Text>
          <HourlyForecastSelectPreview></HourlyForecastSelectPreview>
        </View>
      </CardHeader>
      <CardContent className="flex-col gap-4">
        
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
          <HourlyForecastCardPreview></HourlyForecastCardPreview>
      </CardContent>
    </Card>
  );
}