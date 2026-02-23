import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { StyleSheet, ImageBackground, Image,  type ImageStyle, View, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import { MainWeatherCard } from './components/custom/mainWeatherCard';
import { SelectPreview } from './components/custom/selectUnitDropdown';
import { SearchField } from './components/custom/searchField';
import { SearchButton } from './components/custom/searchButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatsCard } from './components/custom/statsCard';
import { SearchComponent } from './components/custom/searchComponent';
import { useState } from 'react';
import { Location } from './types/location';
import axios from 'axios';
import { CurrentWeatherData } from './types/currentWeather';
import { DailyForecastCard } from './components/custom/dailyForecastCard';
import { HourlyForecastView } from './components/custom/hourlyForecastView/hourlyForecastView';
import { FullWeatherData } from './types/fullWeather';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UnitSelectPreview } from './components/custom/unitSelect';

export default function Screen() {

  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>();
  const [weatherData, setWeatherData] = useState<FullWeatherData | undefined>();
  const [units, setUnits] = useState('Celsius')

  const onUnitChange = (unit: string) => setUnits(unit);
  
  const screenOptions = {
  title: '',
  headerTransparent: false,
  headerLeft: () => <Logo />,
 
};
 
  const converter = (temperature: number) => (temperature * 1.8 ) + 32

  function handleLocationSelect(location: Location) {
    setSelectedLocation(location);
  
    const { latitude, longitude } = location;
  
    axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,wind_speed_2m,precipitation,relative_humidity_2m,weather_code&hourly=temperature_2m,weather_code&forecast_hours=168&daily=temperature_2m_max,temperature_2m_min,weather_code`
    ).then((response: any) => {
      setWeatherData(response.data);
    });
  }


   console.log(weatherData);
   

  return (
    <>
     <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <Stack.Screen options={screenOptions} />

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        
        <View className='flex-1 flex flex-col bg-[#02012b]'>
          <UnitSelectPreview unit={units} onUnitChange={onUnitChange} />
        <View className="flex-col flex-1 items-center pt-10 gap-4  px-4 py-4 ">
          
          <Text style={{fontFamily: 'Bricolage-Grotesque-48pt-Bold', fontSize: 42, lineHeight: 56, textAlign: "center", color: '#fff'}}>How's the sky looking today?</Text>
          
          <SelectPreview searchField="true" onSelectLocation={handleLocationSelect}></SelectPreview>
          { weatherData && 
          (<ScrollView className="grid grid-col-3" style={styles.scrollView}>
          <ImageBackground
          source={require('@/assets/images/bg-today-small-converted-from-svg.png')}
          resizeMode="contain"
          style={styles.image}
          >
          <MainWeatherCard selectedLocation={selectedLocation} temperature={units ==='Celsius' ? weatherData?.current.temperature_2m : converter(weatherData?.current.temperature_2m)} weatherCode={weatherData?.current.weather_code}></MainWeatherCard>
          </ImageBackground>
          <View className="flex-row justify-between flex-wrap mb-8">
            <StatsCard text="Feels like" value={weatherData?.current.apparent_temperature}></StatsCard>
            <StatsCard text="Humidity" value={weatherData?.current.relative_humidity_2m}></StatsCard>
            <StatsCard text="Wind" value={weatherData?.current.wind_speed_2m}></StatsCard>
            <StatsCard text="Precipitation" value={weatherData?.current.precipitation}></StatsCard>
          </View>
          <Text className='text-xl font-bold'>Daily Forecast</Text>
          <View className="flex-row justify-between flex-wrap mt-2">
            
          { 
          weatherData?.daily.time.map((el, index) => (
            <DailyForecastCard key={el} day={el} minTemp={units === 'Celsius' ? weatherData?.daily.temperature_2m_min[index] : converter(weatherData?.daily.temperature_2m_min[index])} maxTemp={units === 'Celsius' ? weatherData?.daily.temperature_2m_max[index] : converter(weatherData?.daily.temperature_2m_max[index])}  weatherCode={weatherData?.daily.weather_code[index]}></DailyForecastCard>
          ))}
            
          </View>
        
        { weatherData &&  (<HourlyForecastView hourlyWeatherData={weatherData?.hourly} days={weatherData?.daily?.time}></HourlyForecastView>) }
          </ScrollView> )
          }
        </View>
      </View>
    
      
      </KeyboardAvoidingView>
      
      </SafeAreaView>
      </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    display: 'flex',
    //flexDirection: 'column',
    //flex: 1,
    //justifyContent: 'space-between',
    //alignItems: 'center',
    //width: '100%',
    height: 300,
    width:'100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  logo: {
    height:25,
    width: 25
  },
  scrollView :{
    
    width: '100%',
    flex: 4

}});

function Logo() {
  return (
    /*<View style={styles.logo}>*/
    <View className='w-40 pl-2 flex flex-row items-center gap-2'>

    <Image source={require('../assets/images/logoWeatherApp1.png')} style={{...styles.logo}}/>
    <Text className='font-bold text-lg opacity-90'>Weather App</Text>
    </View>

  )
}

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="ios:size-9 rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
