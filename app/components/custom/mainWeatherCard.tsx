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

type MainWeatherCardProps = {
  selectedLocation: Location | undefined
}
 
export function MainWeatherCard({selectedLocation}: MainWeatherCardProps) {
  return (

        <Card className="w-full max-w-sm bg-transparent outline-none py-12">
        
      <CardHeader className="flex-col gap-2 items-center">

          <CardTitle className="text-3xl text-center">{selectedLocation?.name }, {selectedLocation?.country}</CardTitle>
          <CardDescription>Sunday, Nov 5, 2025</CardDescription>
        
      </CardHeader>
      <CardContent>
        <View className="flex-row justify-between items-center mt-2">
          <Image source={require('@/assets/images/icon_sun.png')} resizeMode="stretch" className='h-24 w-24'/>
          <Text className="text-8xl">20°</Text>
        </View>
      </CardContent>
    </Card>
      
    
  );
}