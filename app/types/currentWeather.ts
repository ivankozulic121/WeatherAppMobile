export type CurrentWeatherData = {
  time: string; // ISO timestamp
  interval: number; // seconds or minutes between data points
  temperature_2m: number;
  apparent_temperature: number;
  wind_speed_2m: number | null;
  precipitation: number;
  relative_humidity_2m: number;
  weather_code: number;
};