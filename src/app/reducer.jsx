import axios from 'axios'
const FETCH_WEATHER = 'weatherApp/FETCH_WEATHER'
const OPEN_MODAL = 'weatherApp/OPEN_MODAL'
const CLOSE_MODAL = 'weatherApp/CLOSE_MODAL'

const initialValues = {
  openModal: false,
  selectedCity: {},
  city: [],
}

export function reducer(state = initialValues, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        city: [
          action.payload.data, ...state.city,
        ],
      };
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
}

const openModal = () => ({ type: OPEN_MODAL })
const closeModal = () => ({ type: CLOSE_MODAL })

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
  openModal,
  closeModal,
}