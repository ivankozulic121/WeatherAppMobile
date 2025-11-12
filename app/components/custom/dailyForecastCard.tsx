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
 
export function DailyForecastCard() {
  return (
    <Card className="w-[30%] bg-[#25253f] mt-4 py-4 flex">
      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle className="text-center">Tue</CardTitle>
        </View>
      </CardHeader>
      <CardContent>
        <View className="flex-row align-center justify-center">
          <Image source={require('@/assets/images/icon_sun.png')} resizeMode="stretch" className='h-12 w-12'/>
        </View>
      </CardContent>
      <CardFooter className="flex-row justify-between gap-2">
        <Text>70</Text>
        <Text>58</Text>
      </CardFooter>
    </Card>
  );
}