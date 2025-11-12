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
import { View } from 'react-native';
 
type StatsCardProps = {
    text: string,
    value: number | undefined | null
}
export function StatsCard({text, value}: StatsCardProps) {
  return (
    <Card className="w-[48%] mt-4 bg-[#25253f]">
      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle style={{fontFamily: 'DM-Sans-Regular', fontSize:16}}>{text}</CardTitle>
          
        </View>
      </CardHeader>
      <CardFooter>
        
          <Text style={{fontFamily: 'DM-Sans-Regular'}} className="text-left text-4xl font-extralight">
            {value}
            {text === "Feels like" && '°'}
            {text === "Humidity" && '%'}
            {text === "Wind" && ' mph'}
            {text === "Precipitation" && ' in'}</Text>
    
      </CardFooter>
    </Card>
  );
}