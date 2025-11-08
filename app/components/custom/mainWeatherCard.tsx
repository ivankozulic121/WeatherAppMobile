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
import { ImageBackground, View } from 'react-native';
 
export function MainWeatherCard() {
  return (

        <Card className="w-full max-w-sm bg-transparent outline-none">
        
      <CardHeader className="flex-col">
        <View className="gap-2">
          <CardTitle className="text-3xl">Berlin, Germany</CardTitle>
          <CardDescription>Today kurac!</CardDescription>
        </View>
      </CardHeader>
      <CardContent>
        <View className="flex-row justify-between items-center">
          <Text className="text-3xl">Sunny</Text>
          <Text className="text-3xl">20</Text>
        </View>
      </CardContent>
    </Card>
      
    
  );
}