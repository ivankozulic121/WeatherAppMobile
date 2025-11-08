import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { StyleSheet, ImageBackground, Image,  type ImageStyle, View } from 'react-native';
import { MainWeatherCard } from './components/custom/mainWeatherCard';
import { SelectPreview } from './components/custom/selectUnitDropdown';

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  title: '',
  headerTransparent: true,
  headerLeft: () => <MainLogoImage/>,
  headerRight: () => <SelectPreview/>,
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

export default function Screen() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="flex-1 items-center justify-center p-4">
         <ImageBackground
        source={require('@/assets/images/bg-today-small-converted-from-svg.png')}
        resizeMode="contain"
        style={styles.image}
      >
        <MainWeatherCard></MainWeatherCard>
        </ImageBackground>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    width: 120
  }
});

function MainLogoImage() {
  return (
    /*<View style={styles.logo}>*/
    <Image source={require('../assets/images/logoWeatherApp.png')} resizeMode='stretch' style={styles.logo}/>
   /* </View>*/
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
