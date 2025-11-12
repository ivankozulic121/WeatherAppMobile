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
 
export function HourlyForecastCardPreview() {
  return (
    <Card className="w-full max-w-sm bg-[#2f2f49] py-4 border border-[#3b3a5d]">
      <CardContent>
        <View className="w-full flex-row items-center justify-between gap-2">
          <View className="flex-row justify-between items-center">
            <Image source={require('@/assets/images/icon_sun.png')} resizeMode="stretch" className='h-8 w-8'/>
            <Text className="text-xl">3 PM</Text>
          </View>
          <Text className="text-xl">58'</Text>
          </View>
      </CardContent>
    </Card>
  );
}