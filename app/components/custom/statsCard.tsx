import { ImageBackground, StyleSheet, View } from 'react-native';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

type StatsCardProps = {
  text: string;
  value: number | undefined | null;
};

export function StatsCard({ text, value }: StatsCardProps) {
  return (
    <Card className="w-[48%] mt-4 overflow-hidden bg-transparent">
      <ImageBackground
        source={require('@/assets/images/bg-today-2.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />

      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle style={{ fontFamily: 'DM-Sans-Regular', fontSize: 16, color: '#fff' }}>
            {text}
          </CardTitle>
        </View>
      </CardHeader>

      <CardFooter>
        <Text
          style={{ fontFamily: 'DM-Sans-Regular' }}
          className="text-left text-4xl font-extralight text-white"
        >
          {value}
          {text === 'Feels like' && '°'}
          {text === 'Humidity' && '%'}
          {text === 'Wind' && ' mph'}
          {text === 'Precipitation' && ' in'}
        </Text>
      </CardFooter>

    </Card>
  );
}