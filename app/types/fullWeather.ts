import { CurrentWeatherData } from "./currentWeather"
import { DailyWeatherData } from "./dailyWeather";
import { HourlyWeatherData } from "./hourlyWeather";

export type FullWeatherData = {
    current: CurrentWeatherData;
    hourly: HourlyWeatherData;
    daily: DailyWeatherData;
}