import axios from 'axios';

const API_KEY = '6ebb39c9cac54387b3f3e1af2eb7378b';
const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}&units=metric`;
  const request = axios.get(url);

  console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}