import axios from 'axios'
const FETCH_WEATHER = 'weatherApp/FETCH_WEATHER'

export function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}

const fetchWeather = (city, country) => {
  const API_KEY = '6ebb39c9cac54387b3f3e1af2eb7378b'
  const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
  const url = `${ROOT_URL}&q=${city},${country}&units=metric`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export const actions = {
  fetchWeather,
}